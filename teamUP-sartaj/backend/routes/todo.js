const express= require('express')
const {PersonalToDo, GroupToDo}= require('../models')

const todo= express.Router()

todo.post('/personalToDo/create', async(req, res)=>{
  /*  var alreadyPresent= await PersonalToDo.findOne({_id: "5f0cb69f73c1a1a6fc45af89"})
    if (alreadyPresent) return res.send('you already have a todo, edit that instead')
*/
    try{
    console.log(req.body)
        var list= new PersonalToDo(req.body)
        var data= await list.save()
        res.send(`saved your todo list. \n ${data}`)
   }
    catch(err){
        console.log(err)
    }

})

todo.post('/groupToDo/create', async(req, res)=>{
    var alreadyPresent= await GroupToDo.findOne({project_id: req.body.project_id})
    if (alreadyPresent) return res.send('you already have a todo, edit that instead')

    try{
        var list= new GroupToDo(req.body)
        var data= await list.save()
        res.send(`saved your todo list. \n ${data}`)
    }
    catch(err){
        console.log(err)
    }

})

// there is a security bug: a person can use the user id of someone else to change his todo
// solution: check if the cookie (storing jwt) confirms his uid as that of req.... but later

todo.put('/personalToDo/add', async(req, res)=>{
    try{
        var list= await PersonalToDo.findOne({uid: "5f094de7c30b346650d86cc0"}).exec()
        list.tasks.push(req.body.tasks)
        var newList= await list.save()
        res.send(`updated, your new todo list looks like \n ${newList}`)
    }
    catch(err){
        console.log(err)
    }
})

todo.put('/groupToDo/add', async(req, res)=>{
    try{
        var list= await GroupToDo.findOne({project_id: req.body.project_id}).exec()
        if(! list) return res.status(404).send("No project todo for this project, create one first")
        list.todo.push(...req.body.todo)
        var newList= await list.save()
        res.send(`updated, your new todo list looks like \n ${newList}`)
    }
    catch(err){
        console.log(err)
    }
})

todo.put('/personalToDo/update_status', async(req, res)=>{
    try{
        var list= await PersonalToDo.findOne({uid: "5f094de7c30b346650d86cc0"}).exec()
        // list.tasks.findOne({tid: req.body.tid}).set({status: req.body.status})
        var task= list.tasks.find(obj=> obj._id== req.body.tid)
        task.status= req.body.status
        console.log(req.body.status)
        var newList= await list.save()
        res.send(`updated, your new todo list looks like \n ${newList}`)
    }
    catch(err){
        console.log(err)
    }
})

todo.put('/groupToDo/update_status', async(req, res)=>{
    try{
        var list= await PersonalToDo.findOne({project_id: req.body.project_id}).exec()
        // list.tasks.findOne({tid: req.body.tid}).set({status: req.body.status})
        var task= list.todo.tasks.find(obj=> obj.tid== req.body.tid)
        task.status= req.body.status
        var newList= await list.save()
        res.send(`updated, your new todo list looks like \n ${newList}`)
    }
    catch(err){
        console.log(err)
    }
})
todo.get("/myTodo", (req, res) => {
  console.log("drftyguhijokojihugyf");
    var list= PersonalToDo.findOne({uid: "5f094de7c30b346650d86cc0"}).then(data => {
      var x[] = data.tasks.find(obj=> obj.status== "pending")
      console.log(x)
        res.status(200).json({
            tasks: x
        })

    });
});

module.exports= todo
