const mongoose= require('mongoose')
const {userSchema, projectSchema, personalTodoSchema, groupTodoSchema}= require('./schema')

const User= mongoose.model('User', userSchema)
const Project= mongoose.model('Project', projectSchema)
const PersonalToDo= mongoose.model('PersonalToDo', personalTodoSchema)
const GroupToDo= mongoose.model('GroupToDo', groupTodoSchema)

module.exports= {
    User: User,
    Project: Project,
    PersonalToDo: PersonalToDo,
    GroupToDo: GroupToDo
}