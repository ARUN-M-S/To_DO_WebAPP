const ToDoDatas = require("../model/ToDo");
const mongoose = require("mongoose");

const postText = async (req, res) => {
  const { id, text, toDoTime } = req.body.data;
  const ToDoData = await ToDoDatas.create({
    id: id,
    text: text,
    toDoTime: toDoTime,
  });
 res.status(201).json(ToDoData)
};

const deleteText= async(req,res)=>{
    const id=req.body.id
    console.log(id,"iddd");
     const resp=await ToDoDatas.findOneAndDelete({id:id})
     res.status(200).json(resp)
}
const getList= async(req,res)=>{
    const list =await ToDoDatas.find();
    console.log(list,"cvbnm,");
    res.status(200).json(list)
}

module.exports = {postText,deleteText,getList};
