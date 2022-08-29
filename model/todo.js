const mongoose=require('mongoose')
var schema=mongoose.Schema

var todoData=new schema({
    email:{
        type:String
    },
    age:{
        type:Number
    },
    mobile:{
        type:Number
    },
    delete_flag:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('tododata',todoData)