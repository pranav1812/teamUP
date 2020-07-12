/*const mongoose= require('mongoose')

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
}*/

//**********************************************************************

const mongoose= require('mongoose')

// user schema
const userSchema= mongoose.Schema({
    name:{
        type: String,
		required: true
    },

    username: {
		type: String,
		unique: true,
		required: true
	},
  mail:{
      type: String,
      required: true,
      unique: true
  },
  phone:{
      type: String,
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
  /*profileImg: {
    type: String,
  },
  branch: {
    type: String,
  },
  tellus: {
    type: String,
  },
  interestedfeilds: {
    type: String,
  },
  skills: {
    type: String,
  },
  githubprofile: {
    type: String,
  }*/




})

module.exports={
    userSchema: userSchema
}
