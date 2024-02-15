const Input = require('./userInput');

async function manageuser(connection,query){
    console.log('변경할 사용자의 학번을 입력하시오 ');
    let change_unum = await Input.getUserInput();
    let sql = `select checkout from user where unum = ?`;
    let result = await query(sql, [change_unum]);

    if(result[0].checkout===1){
        console.log(`${change_unum}은 현재 대출가능 상태입니다.`);
        console.log('-------------------------------------------');
        console.log('대출을 제한하시려면 y를 눌러주세요');
        let cmd = await Input.getUserInput();
        if(cmd==='y'){
            let sql = `UPDATE USER SET CHECKOUT = 0 WHERE UNUM = ?;`
            await query(sql, [change_unum]);
            console.log('변경되었습니다.');
        }
    } else {
        console.log(`${change_unum}d은 현재 대출 불가능 상태입니다.`);
        console.log('-------------------------------------------');
        console.log('대출을 허용하시려면 y를 눌러주세요');
        let cmd = await Input.getUserInput();
        if(cmd==='y'){
            let sql = `UPDATE USER SET CHECKOUT = 1 WHERE UNUM = ?;`
            await query(sql,[change_unum]);
            console.log('변경되었습니다.');
        }
    };
}

module.exports={manageuser};