const mongoose = require ("mongoose")


const ToDoDatas= new mongoose.Schema({
    id:{
        type:String,
        require:true

    },
    text:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    toDoTime:{
        type:String,
        require:true
    },
    statusErase:{
        type:Boolean,
        default:false
    } ,
    statusDone: {
        type:Boolean,
        default:false
    } ,
    statusDrop: {
        type:Boolean,
        default:false
    } ,
    statusRetrieve:{
        type:Boolean,
        default:false
    } ,
    statusRemove:{
        type:Boolean,
        default:false
    } 



})

module.exports = mongoose.model("ToDolist",ToDoDatas);



