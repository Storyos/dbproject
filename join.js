const mysql = require('mysql');
const Input = require('./userInput');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// MySQL 연결
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL');
});

async function registerUser(connection) {
    console.log('학번을 입력해주세요: ');
    let usernumber = await Input.getUserInput();
    console.log('이름');
    let username = await Input.getUserInput();
    console.log('번호');
    let phonenumber = await Input.getUserInput();
    console.log('비밀번호');
    let password = await Input.getUserInput();
                    // MySQL에 사용자 정보 삽입
                    const sql = 'INSERT INTO user (unum, uname, upno, upwd) VALUES (?, ?, ?, ?)';
                    connection.query(sql, [usernumber, username, phonenumber, password], (err, result) => {
                        if (err) {
                            console.error('Error registering user: ', err);
                        } else {
                            console.log('회원가입이 완료되었습니다!');
                        }

                    });
}

module.exports = { registerUser };
