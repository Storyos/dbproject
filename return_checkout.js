
const Input = require('./userInput');

async function return_checkout(connection, login_success, query) {
  while (1) {
    console.log(`||1. 대출 도서 목록 조회 2. 종료||`);
    let return_select = await Input.getUserInput();
    if (return_select === '1') {
      // 유저의 아이디에 있는 책 목록을 가져올게요
      let sql = `select checkout_uid 대출번호, book_uid 도서번호, user_uid 회원번호,DATE_Format(loan_date,"%Y-%m-%D") 대출일, DATE_Format(return_date,"%Y-%m-%D") 반납일, book_delay 반납여부 
              from checkout where user_uid = (select uid from user where unum= ?);`
      connection.query(sql, [login_success], (err, result, fields) => {
        if (err) return console.error(err.message);
        console.table(result);
      });

      // 대출번호로 받기
      // 사용자의 아이디 안에 책 정보가 있을거 아니냐
      console.log("반납할 도서 대출번호를 선택");
      let return_checkout_uid = await Input.getUserInput();


      let sql2 = `
          update book set book_state = 1 
          where uid = ( select book_uid from checkout where checkout_uid = ? );`;
      await query(sql2, [return_checkout_uid]);

      let sql3 = `
    update checkout set book_delay = 0
    where checkout_uid = ?;`
      await query(sql3, [return_checkout_uid]);

      console.log("반납 되었습니다.");

    }
    else if (return_select === '2') break;
    else console.log("잘못된 번호 입니다. 다시 입력하세요.");
  }
}

module.exports = {return_checkout};