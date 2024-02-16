let mysql = require('mysql');

console.log("사용자 정보를 조회하시겠습니까?");

async function userInfo(connection) {
  console.log("사용자 정보를 조회하시겠습니까?");
  
  let info = `SELECT UID, UNUM 학번, UNAME 이름, UPNO 전화번호, CHECKOUT 대출가능여부 FROM USER`;
    
  connection.query(info, async (error, results, fields) => {
    if (error) return console.error(error.message);
      console.table(results);
    });
}

module.exports={userInfo};
