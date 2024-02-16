let mysql = require('mysql');

console.log("사용자 정보를 조회하시겠습니까?");

async function userInfo(connection) {
  console.log("사용자 정보를 조회하시겠습니까?");
  
  let info = `SELECT UID, UNUM, UNAME, UPNO, CHECKOUT, UPWD FROM USER`;

  connection.query(info, async (error, results, fields) => {
    if (error) return console.error(error.message);
    
    let info = `SELECT UID, UNUM, UNAME, UPNO, CHECKOUT, UPWD FROM USER`;
    
    if (error) return console.error(error.message);
      for(let i = 0; i < results.length; i++) {
          console.log(`${i+1} | ${results[i].UID}   |   ${results[i].UID}   |   ${results[i].UNUM}   |   ${results[i].UNAME}  |   ${results[i].UPNO}   |   ${results[i].CHECKOUT}   |   ${results[i].UPWD}`);
      }
    });
}

module.exports={userInfo};
