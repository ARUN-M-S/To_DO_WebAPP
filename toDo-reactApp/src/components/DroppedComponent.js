import React from 'react'

function DroppedComponent(props) {
  return (
  
       <div className="container dropped">
            <h3>Dropped</h3>
            {
               props.toDos && props.toDos.map((obj) => {
                  if (obj.statusDrop && !obj.statusRetrieve && !obj.statusRemove) {
                     return (
                        <div key={obj.id} className="toDo">
                           <div className="left recycle">
                              <i onClick={(e) => {
                                 let isdelete = window.confirm("Retrieving dropped ToDo");
                                 if (isdelete) {
                                    e.target.value = true;
                                 }
                                 props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                       obj2.statusRetrieve = e.target.value;
                                    }
                                    return obj2;
                                 }));
                              }} value={obj.statusRetrieve} className="fas fa-redo-alt" title="Retrieve"></i>
                           </div>
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

export default DroppedComponent
