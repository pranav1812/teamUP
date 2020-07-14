const express= require('express')
const {Project}= require('../models')

const project= express.Router()

project.get('/add', (req ,res)=>{
    res.send("create project component will be shown")
})

project.post('/add',async(req, res)=>{
    try{
        var pro= new Project(req.body)
        var data= await pro.save()
        res.send(`saved your new project. \n ${data}`)
    }
    catch(err){
        res.status(400).send(err)
    }
})

project.put('/project/add_member',(req, res)=>{
    try{
        var pro= Project.findOne({_id: req.body.project_id})
        if(! pro) return
        pro.members.push(req.body.newMembers)
        var data= await pro.save()
        res.send(`updated your project. \n ${data}`)
    }
    catch(err){
        res.status(400).send(err)
    }
})



module.exports= project
