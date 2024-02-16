const exp = require('constants');
const Input = require('./userInput');

async function search_mycheckout(connection, login_success){
    console.log("HELLO");
    let sql = `select checkout_uid 대출번호, book_uid 도서번호, user_uid 회원번호,DATE_Format(loan_date,"%Y-%m-%D") 대출일, DATE_Format(return_date,"%Y-%m-%D") 반납일, book_delay 연체상태 
    from checkout where user_uid = (select uid from user where unum= ?);`
    connection.query(sql,[login_success], (err,result,fields)=>{
    console.log(result);
    if(err) return console.error(err.message);
    console.table(result);
    })
}
module.exports = {search_mycheckout};