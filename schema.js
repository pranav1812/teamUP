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
    },
    branch: String,
    bio: String,
    skills: [String],
    fieldsOfInterest: [String],
    github: String	
})

// group member schema
let memberSchema= mongoose.Schema({
    name: String,
    role: String,
    id: String,
    isLead: Boolean
})


// project schema
const projectSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "progress"
    },
    members: [memberSchema],

    description: String,

    isPublic: {
        type: Boolean,
        default: true
    },
    mentor_id: String
},{timestamp: true})

// task schema
var taskSchema= mongoose.Schema({
    tid:{
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    deadline: String
})

// personal to-do
const personalTodoSchema= mongoose.Schema({
    member: String,
    uid: String,
    tasks:[taskSchema],
    responsibility: String
})

// group to-do .................. title in groupTodo is the name of responsibility board... 
const groupTodoSchema= mongoose.Schema({
    todo: [personalTodoSchema],
    title: {
        type: String,
        required: true
    },
    project_id: String
})

module.exports={
    userSchema: userSchema,
    projectSchema: projectSchema,
    personalTodoSchema: personalTodoSchema,
    groupTodoSchema: groupTodoSchema
}