const Input = require('./userInput');
let mysql = require('mysql');
async function searchbook(connection) {
  console.log("찾으시는 도서나 저자 이름을 입력해 주세요 : ");
  // book_title을 입력받음
  let book_title = await Input.getUserInput();
  // 입력된 값이 해당 sql문에 있는지 확인
  let sql = `select book_title, book_author, publisher, publishing_year from book where book_title like ? or book_author like ? `;
  let search_value = '%' + book_title + '%';
  connection.query(sql, [search_value, search_value], (pwd_err, book_result, fields) => {

    if (pwd_err) return console.error(pwd_err.message);



    // 입력이 정확하면 book_result에 값이 들어간다
    if (book_result.length > 0) {
      console.log(`순번 | 책 제목   |   책 저자   |   출판사    |   출판연도`);
      for (let i = 0; i < book_result.length; i++) {
        console.log(`${i + 1} | ${book_result[i].book_title}   |   ${book_result[i].book_author}   |   ${book_result[i].publisher}   |   ${String(book_result[i].publishing_year).slice(0,15)}
        `);
        // 5개씩 나눠 보기
        if((i+1)%5===0) console.log();
      }
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