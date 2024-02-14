const Input = require('./userInput');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function loginmenu() {
    while (true) {
        console.log(`1. 로그인  2.회원가입 3.관리자접속`);
        let login_menu = await Input.getUserInput();
        if (login_menu === '1') {
            console.log('ID 입력 : ');
            let login_id = await Input.getUserInput();
        // 여기서 sql 문 작성
            let sql = `select password from user where uid=login_id`;
            connection.query(sql, [true], (error, result, fields) => {
                if (error) return console.error(error.message);
                // 로그인 성공처리
                if (result === 'login_id') {
                    return 0;
                } else {
                    console.log('로그인 실패 ');
                }
            });
        }
        else if(login_menu === '3'){
            return 1;
        }
    }
}

async function main() {
    connection.connect();
    console.clear();

    // loginmenu()에서 return값을 받음 --> 성공일 때, 넘기기
    let login_success = await loginmenu();

    if(login_success=1){
        console.log("SUCCESSED");
    while (true) {
        console.log(`1. 데이터입력 2.데이터수정 3.데이터삭제 4.목록  5.종료`);
        let menu = await Input.getUserInput();
        if (menu === '1') {
            console.log('제목입력>');
            // 설정 필요
            let title = await Input.getUserInput();
            console.log('');
            // query문 설정 필요
            // let sql = `INSERT INTO dbteamproject(title,completed) VALUES(?,false)`;
            // connection.query(sql, [title]);
        } else if (menu === '2') {
            console.log('수정');
        } else if (menu === '3') {
            console.log('삭제');
        } else if (menu === '4') {
            console.log('목록');
        } else if (menu === '5') {
            console.log('프로그램 종료~');
            connection.end();
            process.exit();
        } else {
            console.log('메뉴를 잘못 선택하셨습니다.');
        };
        await wait(1000);
        console.clear();
    };
};
};

main();
const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
