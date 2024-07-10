//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [tasks,setTask]=useState([]);
const [newTask,setnewTask]=useState('');
const [isEditing,setisEditing]=useState(false);
const [id,setId]=useState(0);
function addTask(){
    if(newTask.trim !==''){
        setTask(t=>[...t,newTask])
        setnewTask('')
    }
}
function editTask(index){
  setisEditing(true)
  setnewTask(()=>tasks[index])
  setId(index)
}
function updateTask(){
  console.log(id)
  const arr1=tasks.map((element,ind)=>{
    if(ind===id){
        return newTask
    }
    else{
      return element
    }
  }
)
console.log(arr1)
setTask(arr1)
setisEditing(false)
setnewTask('')
}
function removeTask(index){
  const delarr=tasks.filter((_,i)=>i!==index);
  setTask(delarr)
}
  return (
    <div>
    <h1>To do List</h1>
    <input className="inpt" type="text" placeholder='Enter the task...' value={newTask} onChange={(e)=>setnewTask(e.target.value)}/>
    {!isEditing?
        <button onClick={addTask} className="b">Add task</button>:<button onClick={updateTask}>Update</button>
    }
    <ul>{tasks.map((val,i)=>(
            <li key={i}>
              {val}
              <button onClick={()=>editTask(i)}>edit</button>
              <button onClick={()=>removeTask(i)}>remove</button>
            </li>
    ))
    }
    </ul>
    </div>
  );
}

export default App;
