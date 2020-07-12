/*const express= require('express')
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
const register= require('./routes/register')
const auth= require('./routes/auth')

const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoConnection= 'mongodb://localhost/teamUp'
mongoose.connect(mongoConnection,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log(`connected to ${mongoConnection}`))
    .catch(err=>console.log(`could not connect to DB ${err}`))

app.use('/register', register)
app.use('/auth', auth)

app.listen(8000)*/

//*********************************************************************
const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');
const cors = require('cors');

const mongoose= require('mongoose');
const register= require('./routes/register');
const auth= require('./routes/auth')

const app= express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mongoConnection= "mongodb+srv://testowasp:04@10@2000@cluster0.vfkpf.mongodb.net/testowasp?retryWrites=true&w=majority";
mongoose.connect(mongoConnection,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=>console.log(`connected to ${mongoConnection}`))
    .catch(err=>console.log(`could not connect to DB ${err}`))
//mongoose.set('useFindAndModify', false);
app.use('/register', register)
app.use('/auth', auth)

app.listen(8000);
