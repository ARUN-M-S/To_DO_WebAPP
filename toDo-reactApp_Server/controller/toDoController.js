const ToDoDatas = require("../model/ToDo");
const mongoose = require("mongoose");

const postText = async (req, res) => {
  const { id, text, toDoTime,description } = req.body.data;
  
  const ToDoData = await ToDoDatas.create({
    id: id,
    text: text,
    toDoTime: toDoTime,
    description:description
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
const updateText = async(req,res)=>{
  const {id,change}=req.body
  console.log(id);
  if(change=='Done'){
    const updatedata= await ToDoDatas.findOneAndUpdate({id:id},{$set:{statusDone:true}});
    console.log(updatedata,"fdatagggg");
    res.status(204).json(updatedata)
  }else if(change== 'Drop'){
    const updatedata= await ToDoDatas.findOneAndUpdate({id:id},{$set:{statusDrop:true}});
    console.log(updatedata,"fdatagggg");
    res.status(204).json(updatedata)
    
  }
  else if(change=='Drop&Retrive'){
    const updatedata= await ToDoDatas.findOneAndUpdate({id:id},{$set:{statusDrop:true,statusRetrieve:false}});
    console.log(updatedata,"fdatagggg");
    res.status(204).json(updatedata)

  }
}

module.exports = {postText,deleteText,getList,updateText};
