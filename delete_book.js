const exp = require('constants');
const Input = require('./userInput');

async function delete_book(connection,query){
    console.log('삭제할 도서의 id를 입력하세요');
    let delete_book_id = await Input.getUserInput();

    let sql = `delete from book where uid = ?`;
    await query(sql,[delete_book_id]);
    console.log('삭제가 완료되었습니다.');
}

module.exports={delete_book};