var todo=require('../model/todo')
module.exports={
        create_todo:(req,res)=>{
            if(!req.body.email){
                return res.json({
                    message:'Need to pass Email as Param'
                })
            }
            else if(!req.body.age){
                return res.json({
                    message:'Need to pass age as Param'
                })
            }
            else if(!req.body.mobile){
                return res.json({
                    message:'Need to pass Mobile as Param'
                })
            }
            else{
                var todoData=new todo({
                    email:req.body.email,
                    age:req.body.age,
                    mobile:req.body.mobile
                })
                todoData.save((err,data)=>{
                    if(err){
                        return res.json({
                            message:'Something Went Wrong ! '+err
                        })
                    }
                    else{
                        return res.json({
                            message:'TODO List Created'
                        })
                    }
                })
            }
        
        },
        List_todo:(req,res)=>{
            var param={}
            if(req.body.email){
                var param={
                    email:req.body.email,
                    delete_flag:false
                }
                fetchData(param)
            }
            else if(req.body.age){
                var param={
                    age:req.body.age,
                    delete_flag:false
                }
                fetchData(param)
            }
            else if(req.body.mobile){
                var param={
                    mobile:req.body.mobile,
                    delete_flag:false
                }
                fetchData(param)
            }
            else{
                
                param={
                    delete_flag:false
                }
                fetchData(param)
            }
            function fetchData(param){
                console.log(param)
                todo.find(param,(err,data)=>{
                    if(err){
                        return res.json({
                            message:'Something Wents Wrong ! '+err
                        })
                    }
                    else if(data.length<=0){
                        return res.json({
                            message:'No Data Found'
                        })
                    }
                    else{
                        return res.json({
                            message:'Sucess',
                            data:data
                        })
                    }
                })
            }
        },
        Edit_todo:(req,res)=>{
            if(!req.body._id){
                return res.json({
                    message:'Need to pass _id as param'
                })
            }
            else{
                todo.findOne({_id:req.body._id},(err,data)=>{
                    if(err){
                        return res.json({
                            message:'Something Went Wrong !'+err
                        })
                    }
                    else if(!data){
                        return res.json({
                            message:'No Record found'
                        })
                    }
                    else{
                        return res.json({
                            message:'Success',
                            data:data
                        })
                    }
                })
            }
        },
        Update_todo:(req,res)=>{
            if(!req.body._id){
                return res.json({
                    message:'Need to Pass _id'
                })
            }
            else{
                todo.findOne({_id:req.body._id},(err,data)=>{
                    if(err){
                        return res.json({
                            message:'Something went wrong ! '+err
                        })
                    }
                    else if(!data){
                        return res.json({
                            message:'No Data Found'
                        })
                    }
                    else{
                        todo.updateOne({_id:req.body._id},{
                            $set:{
                                email:req.body.email,
                                mobile:req.body.mobile,
                                age:req.body.age
                            }
                        },(err,data)=>{
                            if(err){
                                return res.json({
                                    message:'Something went wrong ! '+err
                                })
                            }
                            else{
                                return res.json({
                                    message:'Todo List updated'
                                })
                            }
                        })
                    }
                })
             
            }
        },
        Delete_todo:(req,res)=>{
            if(!req.body._id){
                return res.json({
                    message:'Need to Pass _id'
                })
            }
            else{
                todo.findOne({_id:req.body._id},(err,data)=>{
                    if(err){
                        return res.json({
                            message:'Something went wrong ! '+err
                        })
                    }
                    else if(!data){
                        return res.json({
                            message:'No Data Found'
                        })
                    }
                    else{
                        todo.updateOne({_id:req.body._id},{
                            $set:{
                              delete_flag:true
                            }
                        },(err,data)=>{
                            if(err){
                                return res.json({
                                    message:'Something went wrong ! '+err
                                })
                            }
                            else{
                                return res.json({
                                    message:'Todo List Deleted'
                                })
                            }
                        })
                    }
                })
             
            }
        }
}