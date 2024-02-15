let mysql = require('mysql');
let readline = require('readline');

let connection = mysql.createConnection({
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



// 사용자 정보를 입력받아 데이터베이스에 삽입하는 함수
function registerUser(connection) {
        
// 사용자 입력을 받기 위한 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

        rl.question('학번을 입력해주세요: ',(usernumber) => { 
        rl.question('이름을 입력해주세요: ', (username) => {
        rl.question('전화번호를 입력해주세요: ', (phonenumber) => {
        rl.question('비밀번호를 입력해주세요: ', (password) => {
                // MySQL에 사용자 정보 삽입
                const sql = 'INSERT INTO user (unum, uname, upno, upwd) VALUES (?,?,?,?)';
                connection.query(sql, [username,username,phonenumber, password], (err, result) => {
                    if (err) {
                        console.error('Error registering user: ', err);
                    } else {
                        console.log('회원가입이 완료되었습니다!');
                    }
                    // MySQL 연결 종료
                    connection.end();
                    rl.close();
                });
                });

            });
        });
    });
}

module.exports={registerUser};