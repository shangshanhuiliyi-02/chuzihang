const express=require('express')
const app=express()
app.listen(8000)

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static('./public'))
app.use(express.static('./backstage'))
app.use(express.static('./backstage/news'))
app.use(express.static('./backstage/notice'))

const newsroute=require('./route/news')
app.use('/api/news',newsroute)

const noticeroute=require('./route/notice')
app.use('/api/notice',noticeroute)
