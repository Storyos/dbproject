let mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// connect to the MySQL server
connection.connect((err) => {
    if (err) return console.error(err.message);

    //여기에 sql문 다 복붙하시면 됩니다
    const createTodosTable = `CREATE TABLE USER(
      UID	INT	NOT NULL	COMMENT '사용자식별ID',
      UNUM	INT	NOT NULL	COMMENT '사용자 학번',
      UNAME	VARCHAR(20)	NOT NULL	COMMENT '사용자 이름',
      UPNO	INT	NOT NULL	COMMENT '사용자 연락처',
      CHECKOUT	BOOLEAN	NOT NULL	COMMENT '사용자 대출 가능여부',
      UPWD	VARCHAR(20)	NOT NULL	COMMENT '사용자 비밀번호',
      PRIMARY KEY (UID)
    )`;

    connection.query(createTodosTable, (err, results, fields) => {
        if (err) return console.log(err.message);
    });

    // close the connection
    connection.end((err) => {
        if (err) return console.log(err.message);
    });
});
