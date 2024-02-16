const exp = require('constants');
const Input = require('./userInput');

async function add_checkout(connection,query) {
    console.log('신청할 학번을 입력해주세요');
    let user_id = await Input.getUserInput();
    console.log('신청할 도서의 제목을 입력해주세요');
    let book_title = await Input.getUserInput();

    console.log(user_id);
    let sql = `call coprocess(?,?)`;
    await query(sql,[user_id,book_title]);
    console.log(`${user_id}님의 ${book_title} 대출 신청이 완료되었습니다.`);
}

module.exports={add_checkout};