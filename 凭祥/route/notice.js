const express=require('express')
const route=express.Router()
const con=require('../db/mysql')


//插入数据路由
route.post('/insert',(req,res)=>{
    let title=req.body.title
    let time=Date.now()
    let detail=req.body.detail
    //let {title,detail}=req.body  //数据结构
    let sql=`insert into notice values(null,'${title}','${time}','${detail}')`
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.affectedRows>0){
            res.json({msg:1,data:'success'})
        }else{
            res.json({msg:-1,data:'faile'})
        }
    })
})

//查询数据路由（页面一开始的）
route.get('/getList',(req,res)=>{
    let sql= `select * from notice where 1=1`  //查询所有数据的
    if(req.query.title){
        sql= sql+ ` and title like '%${req.query.title}%'`
    }
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})

//查询数据路由（分页的查询路由）
route.post('/getPage',(req,res)=>{
    var page=req.body.page  //第几页
    page=5*(page-1)
    let sql=`select * from notice limit ${page},5`
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})


module.exports=route