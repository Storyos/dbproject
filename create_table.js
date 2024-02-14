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
    const createTodosTable = ``;

    connection.query(createTodosTable, (err, results, fields) => {
        if (err) return console.log(err.message);
    });

    // close the connection
    connection.end((err) => {
        if (err) return console.log(err.message);
    });
});
