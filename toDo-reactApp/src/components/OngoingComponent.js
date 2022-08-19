import React from 'react'

function OngoingComponent(props) {
  return (
    <div>
        <div className="container onGoing">
            <h3>On Going</h3>
            {
               props.toDos && props.toDos.map((obj) => {
                  if (!obj.statusDone && !obj.statusDrop) {
                     return (
                        <div key={obj.id} className="toDo">
                           <div className="left tick">
                              <i onClick={(e) => {
                                
                                 props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                      
                                       let data="Done"
                                       props.UpdateItem(obj.id,data)
                                    }
                                    return obj
                                 }));
                              }} value={obj.statusDone} className="fas fa-check" title="Done"></i>
                           </div>
                           <div className="top">
                              <p>{obj.text}</p>
                              <p>{obj.description}</p>

                           </div>
                           <div className="bottom">
                              <p>{obj.toDoTime}</p>
                           </div>
                           <div className="right close">
                              <i onClick={(e) => {
                                
                                 props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                      
                                       let data="Drop"
                                       props.UpdateItem(obj.id,data)
                                    }
                                    
                                 }));
                              }} value={obj.statusDrop} className="fas fa-times" title="Drop"></i>
                           </div>
                        </div>
                     );
                  } else if (obj.statusRetrieve && !obj.statusDone) {
                     return (
                        <div key={obj.id} className="toDo">
                           <div className="left tick">
                              <i onClick={(e) => {
                                 e.target.value = true;
                                 props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                      
                                       let data="Done"
                                       props.UpdateItem(obj.id,data)
                                    }
                                    return obj2;
                                 }));
                              }} value={obj.statusDone} className="fas fa-check" title="Done"></i>
                           </div>
                           <div className="top">
                              <p>{obj.text}</p>
                           </div>
                           <div className="bottom">
                              <p>{obj.toDoTime}</p>
                           </div>
                           <div className="right close">
                              <i onClick={(e) => {

                                 e.target.value = true;
                                props.setToDos(props.toDos.filter((obj2) => {
                                    if (obj2.id === obj.id) {
                                       
                                       let data="Drop&Retrive"
                                       props.UpdateItem(obj.id,data)
                                    }
                                    return obj2;
                                 }));
                              }} value={obj.statusDrop} className="fas fa-times" title="Drop"></i>
                           </div>
                        </div>
                     );
                  }
               })
            }
         </div>
    </div>
  )
}

export default OngoingComponent
