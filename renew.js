const mysql = require('mysql');
const Input = require('./userInput');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// 도서 대출 연장 함수
async function renewBook() {
    try {

    const checkoutId = await Input.getUserInput('대출 ID를 입력하세요: ');

      // 대출 정보 조회 SQL 쿼리
    const checkQuery = `
        SELECT checkout_id
        FROM checkout where checkout_id = ?    `;

      // SQL 쿼리 실행 대출 정보 조회
    connection.query(checkQuery, [checkoutId], (err, results) => {
    if (err) {
        console.error('도서 연장 중 오류가 발생했습니다:', err);
        connection.end();
        return;
        }

      //  반납되지 않은 상태 일때(사용자가 대출 중 일때)
    else if (book_delay === 1) { 
        
        // 도서 대출 연장 SQL 쿼리
        const renewQuery = `
        UPDATE checkout
        SET return_date = DATE_ADD(return_date, INTERVAL 14 DAY)
        WHERE checkout_id = ?;
        `;

        // 도서 대출 연장 수행
        connection.query(renewQuery, [checkoutId], (err, result) => {
        if (err) {
            console.error('도서 연장 중 오류가 발생했습니다:', err);
        } else {
            console.log(`${bookTitle} (${bookAuthor}) 도서 대출이 연장되었습니다!`);
        }
        
        connection.end();
        });
        console.log('대출 연장이 가능합니다');
        connection.end();
        return;
    }

    });
    } catch (error) {
    console.error('입력 처리 중 오류가 발생했습니다:', error);
    }
}

module.exports= {renewBook};