const Input = require('./userInput');
const joining = require('./join.js');


async function loginmenu(connection, query) {
    console.log(`1. 로그인  2.회원가입 3.관리자접속`);
    while (true) {
        let login_menu = await Input.getUserInput();
        let login_fail_count = 0;
        let login_success = 0;
        let login_id;
        if (login_menu === '1') {
            // return 1;
            while (true) {
                console.log('학번 입력 : ');
                login_id = await Input.getUserInput();
                console.log('비밀번호 입력 : ');
                let login_pwd = await Input.getUserInput();
                let sql = `select unum from user where unum= ? and upwd = ?`;
                // 0 일 때 성공 X;
                let result = await query(sql, [login_id, login_pwd]);
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
            return login_id;
        }
        else if (login_menu === '2') {
            await joining.registerUser(connection);
            return 4;
        }
        else if (login_menu === '3') {
            return 3; //관리자로 들어감
        }
    }
}

module.exports = {loginmenu};