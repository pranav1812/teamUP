const express= require('express')
const bcrypt= require('bcrypt')
const { User }= require('../models') 
const jwt = require("jsonwebtoken");
const joi = require("joi");

const register= express.Router()

register.get('/',(req,res)=>{
    res.send('signup form will be showed')
})

register.post('/create', validateRegisterUserReq, async(req, res)=>{
    var alreadyPresent= await User.findOne({username: req.body.username })
    if(alreadyPresent) return res.send("a user with this username is already present")
    
    try{       
        var usr= new User(req.body)
        
        var salt= await bcrypt.genSalt(10)
        usr.password= await bcrypt.hash(req.body.password, salt)

        var data= await usr.save()

        const token= jwt.sign({
            _id: data._id,
            isAdmin: data.isAdmin
        },'secret key')

        newData= await User.findById(usr._id).select(['-password','-__v'])
        
        res.cookie('jwt',token, {expires: new Date(Date.now() + 24*3*60*60*1000), httpOnly: true })
        res.header('x-auth-token',token).send(newData)
        
    }
    catch(err){
        return res.send(err)
    }
})

register.put('/update_profile', async (req, res)=>{
    try{
        var usr= await User.findOne({_id: req.body.uid}).exec()
        if(! usr) return res.status(400).send("user not found")
        usr.set(req.body)
        var updatedUser= await usr.save()
        res.send(`updated user looks like ${updatedUser}`)
    }
    catch(err){
        console.error(err)
    }
})


/* -----------------------will be shifted to a separate folder ----------------- */

const userVal= joi.object().keys(
    {
        name: joi.string().required(),
		username: joi.string().required(),
		password: joi.string().min(8).required(),
        isAdmin: joi.bool().default(false),
        mail: joi.string().regex(/@thapar.edu/),
        phone: joi.string().min(10).max(10).regex(/[6-9][0-9]{9}/)
	}
)
function validateRegisterUserReq(req, res, next) {
	joi.validate(JSON.stringify(req.body), userVal, (err, value)=>{
        if(err) return res.status(422).send(`${err}`)
        next()
    })
}

module.exports= register