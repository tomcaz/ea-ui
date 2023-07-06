import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavComponent } from './components/nav/nav.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { useEffect, useState } from 'react';
import { MainLayout } from './layouts/main.layout';
import axios from 'axios';

const DATA_URL = 'http://localhost:4000/api/tasks'

function App() {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [tasks, setTasks] = useState([])
  const [dragId, setDragId] = useState()

  const reloadData = () => {
    axios.get(DATA_URL).then(data=> {
      
      if (searchText.length > 0) {
        setTasks([
          ...data.data.map(item=>({
            ...item,
            hightlighted: item.text.indexOf(searchText) >=0
          }))
        ])
      } else {
        setTasks(data.data)
      }
    }).catch(console.error)
  }

  const handleDrop = () => {
    if(dragId) {
      handleTaskStateChange(dragId)
    }
  }

  useEffect(()=> { // constructor
    const interval = setInterval(() => {
      reloadData();
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const handleTaskStateChange = (id) => {
    let task = tasks.filter(task => task.id === id)[0];
    task.selected = !task.selected;
    
    axios.patch(`${DATA_URL}/${id}`, {selected: task.selected}).then().catch(console.error)

    setTasks([
      ...tasks.filter(task=> task.id !== id),
      task
    ])
  }

  const handleSearch = (value) => {
    setSearchText(value);
    
  }

  const handleAdd = (text) => {
    axios.post(DATA_URL, {
      text,
      selected: false
    }).then(data=> {
      setTasks([
        ...tasks,
        {
          id:data.data,
          text,
          selected: false,
          hightlighted: text.indexOf(searchText) >=0 && searchText.length > 0
        }
      ])
    }).catch(console.error)
  }

  const handleOk = () => {
    axios.delete(DATA_URL).then(()=> {
      setTasks([])
    }).catch(console.error)
  }

  const checkHightlight = () => {
    setTasks([
      ...tasks.map(item=>({
        ...item,
        hightlighted: item.text.indexOf(searchText) >=0
      }))
    ])
  }

  useEffect(()=>{
    if (searchText.length > 0) {
      checkHightlight();
    }
  },[searchText])

  return (
    <div className="App">
     <NavComponent deleteConfirmation={()=>setVisible(true)} />
     <br />
     <DialogComponent
      labelOk="Confirm Delete All"
      title="Confirmation"
      body="All the tasks are about to be deleted, this cannot be undone. Are you sure?"
      handleOk={handleOk} 
      visible={visible}
      setVisible={setVisible}
     />
     <MainLayout tasks={tasks} 
      handleTaskStateChange={handleTaskStateChange} 
      handleAdd={handleAdd} 
      handleSearch={handleSearch} 
      setDragId={setDragId} 
      handleDrop={handleDrop} />
    </div>
  );
}

export default App;
