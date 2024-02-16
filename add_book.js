const exp = require('constants');
const Input = require('./userInput');

async function add_book(connetcion, query){
    console.log('추가할 도서의 이름을 입력해주세요');
    let book_title = await Input.getUserInput();
    let book_author = await Input.getUserInput();
    let publisher = await Input.getUserInput();
    let publishing_year = await Input.getUserInput();
    let sql = `insert into (book_title, book_author, publisher, publishing_year) values (?,?,?,?);`
    await query(sql,[book_title,book_author,publisher,publishing_year]);
    console.log(`${book_title}이(가) 추가되었습니다.`);
}

module.exports={add_book};