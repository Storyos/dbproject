const search = require('./searchbook');
const Input = require('./userInput');
const manageusers = require('./manageuser.js');
const delete_books = require('./delete_book.js');
const userInfo = require('./userInfo.js');
const add_books = require('./add_book.js');
const add_checkouts = require('./add_checkout.js');
const search_mycheckouts = require('./search_mycheckout.js');
let mysql = require('mysql');
const  return_checkouts = require('./return_checkout.js');
const login_menus = require('./login.js');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function query(sql, args) {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

async function main() {
  connection.connect();
  console.clear();
  // loginmenu()에서 return값을 받음 --> 성공일 때, 넘기기
  // 로그인 성공하였을 때 login_success 에 학번을 넘긴다.
  let login_success = await login_menus.loginmenu(connection,query);
  if (login_success >= 4) {
    while (true) {
      console.clear();
      console.log(`       ----------- ${login_success} 님 환영합니다. ----------\n\n`);
      console.log(`||1. 대출 신청 2.도서 반납 3.도서 조회 4.내 대출 현황 조회 5.종료||`);
      let menu = await Input.getUserInput();
      if (menu === '1') {
        console.log('대출 신청칸');
        await add_checkouts.add_checkout(connection, query);
      } else if (menu === '2') {
        // 도서 조회 및 도서 반납
        await return_checkouts.return_checkout(connection, login_success, query);

      } else if (menu === '3') {
        await search.searchbook(connection);
      } else if (menu === '4') {
        await search_mycheckouts.search_mycheckout(connection, login_success);
      } else if (menu === '5') {
        console.log('프로그램을 종료합니다');
        connection.end();
        process.exit();
      } else {
        console.log('메뉴를 잘못 선택하셨습니다.');
      };
      await wait(1000);
      // console.clear();
    };
  } else if (login_success === 3) {
    console.clear();
    console.log('----------관리자 메뉴-------------');
    while (true) {
      console.log(`1. 사용자 조회  2.도서 관리 3. 대출 허가/거부 변경 4. 종료`);
      let admin_menu = await Input.getUserInput();
      if (admin_menu === '1') {
        await userInfo.userInfo(connection);
      } else if (admin_menu === '2') {
        console.log('도서 관리');
        while (true) {
          console.log("\n 1. 도서 추가 , 2. 도서 삭제 3.종료");
          let book_menu = await Input.getUserInput();
          if (book_menu === '1') {
            await add_books.add_book(connection, query);
            console.log('도서가 추가되었습니다.');
          } else if (book_menu === '2') {

            await delete_books.delete_book(connection, query);
            console.log('도서를 삭제하였습니다.');
          } else if (book_menu === '3') {
            console.log('프로그램 종료');
            connection.end();
            process.exit();
          }
          else {
            console.log('메뉴를 잘못 선택하셨습니다.');
          }
          await wait(1000);
          console.clear();
        }
      } else if (admin_menu === '3') {
        console.log('대출 허가/거부 변경');
        await manageusers.manageuser(connection, query);
      } else if (admin_menu === '4') {
        console.log('프로그램을 종료합니다.');
        connection.end();
        process.exit();
      }
    }
  };
}
main();
const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

