const express= require('express')
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
const register= require('./routes/register')
const auth= require('./routes/auth')

// using todo here for testing purpose.... will be shifted to dashboard
const todo= require('./routes/todo')

const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoConnection= 'mongodb://localhost/teamUp'
mongoose.connect(mongoConnection,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log(`connected to ${mongoConnection}`))
    .catch(err=>console.log(`could not connect to DB ${err}`))

app.use('/register', register)
app.use('/auth', auth)
app.use('/todo', todo)

app.listen(8000)