import React from 'react'

function DoneComponent(props) {
  return (
    <div className="container done">
    <h3>Done</h3>
    {
       props.toDos && props.toDos.map((obj) => {
          if (obj.statusDone && !obj.statusRemove) {
             return (
                <div key={obj.id} className="toDo">
                   <div className="left"></div>
                   <div className="top">
                      <p className="textCross">{obj.text}</p>
                      <p className="textCross">{obj.description}</p>

                   </div>
                   <div className="bottom">
                      <p>{obj.toDoTime}</p>
                   </div>
                   <div className="right bin">
                      <i onClick={(e) => {
                         let isdelete = window.confirm("Deleting ToDo permanently !");
                         if (isdelete) {
                           //  e.target.value = true;
                            props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                      
                                       props.DroppItem(obj2.id)
                                    }
                                    return obj
                                 }));
                         }
                      
                      }} value={obj.statusRemove} className="fas fa-trash-alt" title="Remove"></i>
                   </div>
                </div>
             );
          }
       })
    }
 </div>
  )
}

export default DoneComponent
