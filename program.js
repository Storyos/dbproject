const search = require('./searchbook');
const Input = require('./userInput');
let mysql = require('mysql');

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

async function loginmenu() {
    console.log(`1. 로그인  2.회원가입 3.관리자접속`);
    while (true) {
        let login_menu = await Input.getUserInput();
        let login_fail_count = 0;
        let login_success = 0;
        if (login_menu === '1') {
            while (true) {
                console.log('학번 입력 : ');
                let login_id = await Input.getUserInput();
                console.log('비밀번호 입력 : ');
                let login_pwd = await Input.getUserInput();
                let sql = `select unum from user where unum=${login_id} and upwd = "${login_pwd}"`;
                // 0 일 때 성공 X;
                let result = await query(sql, [true]);
                if (result[0]) {
                    console.log("로그인 성공");
                    login_success = 1;
                    break; // 로그인 성공 시 while 루프를 탈출합니다.
                } else {
                    console.log(`${++login_fail_count}번 실패하였습니다. 3번 실패 시 종료됩니다.`);
                    if (login_fail_count >= 3) {
                        connection.end();
                        process.exit();
                    }
                }
            }
            return 1;
        }
        else if (login_menu === '3') {
            return 3; //관리자로 들어감
        }
    }
}

async function main() {
    connection.connect();
    console.clear();
    // loginmenu()에서 return값을 받음 --> 성공일 때, 넘기기
    let login_success = await loginmenu();
    console.log(login_success);
    if (login_success = 1) {
        console.log("SUCCESSED");
        while (true) {
            console.log(`1. 대출 신청 2.도서 반납 3.도서 조회 4.종료`);
            let menu = await Input.getUserInput();
            if (menu === '1') {
                console.log('대출 신청칸');
                // 설정 필요
                let title = await Input.getUserInput();
                console.log('');
            } else if (menu === '2') {
                console.log('도서반납 칸');
            } else if (menu === '3') {
                await search.searchbook(connection);
            } else if (menu === '4') {

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
            console.log(`1. 사용자 대출 허가/거부 변경 2.도서 관리 3. 종료`);
            let admin_menu = await Input.getUserInput();
            if (admin_menu === '1') {
                console.log('사용자 대출 허가/거부 변경')
            } else if (admin_menu === '2') {
                console.log('도서 관리');
                while (true) {
                    console.log("\n 1. 도서 추가 , 2. 도서 삭제 3.종료");
                    let book_menu = await Input.getUserInput();
                    if (book_menu === '1') {
                        console.log('도서가 추가되었습니다.');
                    } else if (book_menu === '2') {
                        console.log('도서를 삭제하였습니다.');
                    } else if (book_menu === '3') {
                        console.log('프로그램 종료~');
                        connection.end();
                        process.exit();
                    } else {
                        console.log('메뉴를 잘못 선택하셨습니다.');
                    }
                    await wait(1000);
                    console.clear();
                }
            };
        }
    };

    main();
    const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
