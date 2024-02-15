let mysql = require('mysql');

console.log("사용자 정보를 조회하시겠습니까?");

function userInfo(connection) {
  console.log("사용자 정보를 조회하시겠습니까?");
  

  let info = `SELECT UID, UNUM, UNAME, UPNO, CHECKOUT, UPWD FROM USER`;

  connection.query(info, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log(results[0].uid);

    if (results[0].uid = true) {
      // console.log('${results}를 조회했습니다.');
      // console.log(results);
    }
  });

// connection.connect((err) => {
//   if (err) return console.error(err.message);

//   });



//   // close the database connection
//   connection.end();
}
