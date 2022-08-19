import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosInstance";
import InputComponents from "./components/InputComponents";
import DoneComponent from "./components/DoneComponent";
import OngoingComponent from "./components/OngoingComponent";
import DroppedComponent from "./components/DroppedComponent";

function App() {
  const [toDo, setToDo] = useState("");
  const [des,setDes]=useState('')
  const [toDos, setToDos] = useState('');
  const [upTodo,setUpTodo] = useState('')

 useEffect(async () => {
    const value = await axios.get("/");
    
    setToDos(value.data);
  }, [upTodo]);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = dayNames[date.getDay()];

  const dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currDate = new Date();
  const hours = currDate.getHours();
  const AMorPM = hours >= 12 ? "PM" : "AM";
  var hour = hours % 12;
  const hour12 = () => {
    if (hour === 0) hour = 12;
    return hour;
  };
  const toDoDate =
    currDate.getDate() +
    "." +
    (currDate.getMonth() + 1) +
    "." +
    currDate.getFullYear();
  const toDoDay = dayNamesShort[currDate.getDay()];
  const toDoTime =
    hour12() +
    ":" +
    currDate.getMinutes() +
    ":" +
    currDate.getSeconds() +
    " " +
    AMorPM;
  const toDoTimeDateDay = toDoTime + " " + toDoDay + " " + toDoDate;

  const handleUserInput = (e) => {
    setToDo(e.target.value);
  };
  const handleDescription=(e)=>{
    setDes(e.target.value)
  }

  const handleInputSubmit = async (e) => {
    e.preventDefault();
console.log(des,"description");
    const data = await {
      id: Date.now(),
      text: toDo,
      toDoTime: toDoTimeDateDay,
      description:des
    };

    let values = await axios.post("/todo", { data: data });

    if (values) {
      setToDos([
        ...toDos,
        {
          id: values.data.id,
          text: values.data.text,
          toDoTime: values.data.toDoTime,
          description:values.data.description
        },
      ]);
      setToDo("");
      setDes('')
    }
  };
  const resetInputField = () => {
    setToDo("");
  };
  const DroppItem = (id) => {
    axios.post("/delete", { id: id }).then((res) => {
      setToDos(
        toDos.filter((obj2) => {
          if (obj2.id === res.data.id) {
            obj2.statusRemove = true;
          }
          return obj2;
        })
      );
    });
  };
  
const UpdateItem=async(id,change)=>{
 let valuess= await  axios.patch("/update",{id:id,change:change})
 
 setUpTodo(valuess)

}
  return (
    <div className="app">
      <InputComponents
        handleInputSubmit={handleInputSubmit}
        handleUserInput={handleUserInput}
        day={day}
        resetInputField={resetInputField}
        toDo={toDo}
        des={des}
        handleDescription={handleDescription}
      />

      <DoneComponent toDos={toDos} setToDos={setToDos} DroppItem={DroppItem}  />

      <OngoingComponent setToDos={setToDos} toDos={toDos} UpdateItem={UpdateItem} />

      <DroppedComponent
        toDos={toDos}
        setToDos={setToDos}
        DroppItem={DroppItem}
      />
    </div>
  );
}

export default App;
