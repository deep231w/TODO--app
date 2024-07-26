const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://maharanad449:jDeK4p9xB5TN4r7r@todo--app.qkkwzvl.mongodb.net/todos");
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo',todoschema);

module.exports=todo;  
