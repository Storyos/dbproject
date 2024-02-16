const Input = require('./userInput');
let mysql = require('mysql');
async function searchbook(connection) {
  console.log("찾으시는 도서나 저자 이름을 입력해 주세요 : ");
  // book_title을 입력받음
  let book_title = await Input.getUserInput();
  // 입력된 값이 해당 sql문에 있는지 확인
  let sql = `select book_title, book_author, publisher, DATE_FORMAT(publishing_year, '%Y-%m-%d') from book where book_title like ? or book_author like ? `;
  let search_value = '%' + book_title + '%';
  connection.query(sql, [search_value, search_value], (pwd_err, book_result, fields) => {

    if (pwd_err) return console.error(pwd_err.message);

    // 입력이 정확하면 book_result에 값이 들어간다
    if (book_result.length > 0) {
      console.table(book_result);
    } else {
      console.log(`일치하는 도서를 찾을 수 없습니다.`);
    }
  });
  // connection.query(sql, [true], (pwd_err,book_result,fields)=>{
  //     if(pwd_err) return console.error(pwd_err.message);            
  //     if(book_result[0].book_title === book_title || book_result[0].book_author === book_title)
  //       console.log(book_result[0].book_title, "일치합니다");  
  // });
}

module.exports = { searchbook };