const mysql=require('mysql')

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'policy'
})

module.exports=con //导出