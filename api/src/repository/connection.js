import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host:process.env.MYSLQ_HOST,
    user:process.env.MYSLQ_USER,
    password:process.env.MYSLQ_PWD,
    database:process.env.MYSLQ_DB

    

});


return  { con }
