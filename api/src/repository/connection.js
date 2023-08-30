import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host:process.env.SLQ_HOST,
    user:process.env.SLQ_USER,
    password:process.env.SLQ_PWD,
    database:process.env.SLQ_DB
});

console.log('BD conectado')


export { con }
