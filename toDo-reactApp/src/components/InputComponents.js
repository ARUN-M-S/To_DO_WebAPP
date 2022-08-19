import React from 'react'

function InputComponents(props) {
  return (
    <div>
      <div className="headings">
            <div className="mainHeading">
               <h1 className="gradient-text">ToDo List</h1>
            </div>
            <div className="subHeading">
               <h2 className="gradient-text2">Hey, it's {props.day} </h2>
            </div>
         </div>

         <form onSubmit={ props.handleInputSubmit}>
            <div className="toDoInput">
               <div className="left">
                  <input value={props.toDo} onChange={props.handleUserInput} type="text" placeholder=" Plan Something . . ." />
               </div>
               <div className="right erase">
                  <i onClick={props.resetInputField} className="fas fa-eraser" title="Clear"></i>
               </div>
               <div className="rightEnd  add">
                  <button style={{ border: 'none', outline: 'none', backgroundColor: '#fff' }} type="submit"><i className="fas fa-plus" title="Add"></i></button>
               </div>
            </div>
         </form>
    </div>
  )
}

export default InputComponents
