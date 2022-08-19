import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosInstance"
import InputComponents from "./components/InputComponents";
import DoneComponent from "./components/DoneComponent";
import OngoingComponent from "./components/OngoingComponent";
import DroppedComponent from "./components/DroppedComponent";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState('')
 

  const index = toDos && toDos.findIndex((obj) => obj.statusRemove == true);
  // console.log(index);
  if (index > -1) toDos && toDos.splice(index, 1);

  useEffect(async()=>{
    const value = await axios.get('/');
    console.log(value.data,"valuesssss");
     setToDos(value.data)
  },[])

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

  const handleInputSubmit = async (e) => {
   
    e.preventDefault();
    
    const data= await {
      id: Date.now(),
      text: toDo,
      toDoTime: toDoTimeDateDay,
    }
   
   let values= await axios.post("/todo",{data:data})
    
    if (toDo) {
      setToDos([
        ...toDos,
        {
          id:values.data.id ,
          text: values.data.text,
          toDoTime: values.data.toDoTime,
          statusErase: false,
          statusDone: false,
          statusDrop: false,
          statusRetrieve: false,
          statusRemove: false,
        },
      ]);
      setToDo(" ");
    }
  };
  const resetInputField = () => {
    setToDo("");
  };
  const DroppItem=(id)=>{
   axios.post("/delete",{id:id}).then((res)=>{
    setToDos(toDos.filter((obj2) => {
      if (obj2.id === res.data.id) {
         obj2.statusRemove = true;
         
      }
      return obj2;
   }))

   })

  }

  useEffect(() => {
    // storing toDos data to localStorage of browser
    // localStorage.setItem("Storage", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="app">
      <InputComponents
        handleInputSubmit={handleInputSubmit}
        handleUserInput={handleUserInput}
        day={day}
        resetInputField={resetInputField}
        toDo={toDo}
      />

      <DoneComponent toDos={toDos} setToDos={setToDos} />

      <OngoingComponent setToDos={setToDos} toDos={toDos} />

      <DroppedComponent toDos={toDos} setToDos={setToDos} DroppItem={DroppItem} />
    </div>
  );
}

export default App;
