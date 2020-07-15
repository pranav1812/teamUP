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

project.put('/add_member',async(req, res)=>{
  console.log(req.body.name)
    try{
        var pro= await Project.findOne({_id: "5f0e016dc18560e708c5d134"})
        if(! pro) return
        pro.members.push(req.body.update)
        /*pro.members.push({name: req.body.name , role: req.body.role})*/
        console.log(pro.members)
        var data= await pro.save()
        res.send(`updated your project. \n ${data}`)
    }
    catch(err){
        res.status(400).send(err)
    }
})



module.exports= project
