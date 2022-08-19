const { json } = require('express');
var express = require('express');
var router = express.Router();
const {postText,deleteText,getList} = require("../controller/toDoController")

/* GET home page. */
router.get('/',getList)


router.post("/todo",postText);
router.post("/delete",deleteText);

module.exports = router;
