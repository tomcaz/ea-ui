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
  
  useEffect(()=> { // constructor
    axios.get(DATA_URL).then(data=> {
      setTasks(data.data)
    }).catch(console.error)
  }, [])

  const handleTaskStateChange = (id) => {
    let task = tasks.filter(task => task.id === id)[0];
    task.selected = !task.selected;
    setTasks([
      ...tasks.filter(task=> task.id !== id),
      task
    ])
  }

  const handleSearch = (value) => {
    setSearchText(value);
    
  }

  const handleAdd = (text) => {
    setTasks([
      ...tasks,
      {
        text,
        selected: false,
        hightlighted: text.indexOf(searchText) >=0 && searchText.length > 0
      }
    ])
  }

  const handleOk = () => {
    setTasks([])
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
     <MainLayout tasks={tasks} handleTaskStateChange={handleTaskStateChange} handleAdd={handleAdd} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
