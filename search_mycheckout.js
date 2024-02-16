const exp = require('constants');
const Input = require('./userInput');
const renews = require('./renew');
async function search_mycheckout(connection, login_success){
    let sql = `select checkout_uid 대출번호, book_uid 도서번호, user_uid 회원번호,DATE_Format(loan_date,"%Y-%m-%D") 대출일, DATE_Format(return_date,"%Y-%m-%D") 반납일, book_delay 반납여부 
    from checkout where user_uid = (select uid from user where unum= ?);`
    connection.query(sql,[login_success], (err,result,fields)=>{
    if(err) return console.error(err.message);
    console.table(result);
    });
    console.log("1. 돌아가기 2. 연장 신청 3. 종료")
    let search_menu = await Input.getUserInput();
    if(search_menu==='2'){
        await renews.renewBook(connection);
    }
    else if(search_menu==='3'){
        connection.end();
        process.exit();
    }
}
module.exports = {search_mycheckout};