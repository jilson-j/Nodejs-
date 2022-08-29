const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const route=require('./route/index')
const app=express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/',route)
var dburl='mongodb://localhost:27017/AccessLogin'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Database connected')
})
.catch((e)=>{
    console.log('Could not connect to Db '  +e)
})

app.listen(9000,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Server Connected')
    }
})