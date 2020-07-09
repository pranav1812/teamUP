const mongoose= require('mongoose')

// user schema
const userSchema= mongoose.Schema({
    name:{
        type: String,
		required: true
    },
    mail:{
        type: String,
        required: true,
        unique: true
    },
    username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false
    },
    phone:{
        type: String,
        required: true
    }
	
})

module.exports={
    userSchema: userSchema
}