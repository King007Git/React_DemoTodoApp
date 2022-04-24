import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Completed from './components/Completed';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (data, isCompleted=false) => {
    
    setTask(task.filter((e) => {
      return e !== data;
    }));
    if(!isCompleted){
      toast(data.task + " Deleted!", {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.ERROR,
        className: 'taskDeletedNotify-toast',
      });
    }else{
      toast(data.task + " completed!", {
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
        type: toast.TYPE.SUCCESS,
        className: 'taskCompleteNotify-toast',
    });
    }
    localStorage.setItem("todos", JSON.stringify(task));
  }
  const addTask = (title, deadline) => {
    toast(title + " Added", {
      autoClose: 2000,
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
      className: 'taskAddedNotify-toast',
    });
    let id_num;
    if (task.length === 0) {
      id_num = 0;
    } else {
      id_num = task[task.length - 1].id + 1;
    }
    let newTask = {
      id: id_num,
      task: title,
      deadline: deadline
    }
    setTask([...task, newTask]);
  }

  const [task, setTask] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(task));
  }, [task]);
  return (
    <Router>
      <Header title="Demo App" searchBar={false} background="dark" />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTask={addTask} />
            <Todos todos={task} onDelete={onDelete} />
          </>
        } />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }} className="text-center">
              <h1>404 Page Not Found</h1>
              <p>Please try different Routes</p>
            </main>
          }
        />
        <Route exact path="/contact" element={
          <About />
        } />
        <Route exact path="/completed" element={
          <Completed key={task.id}/>
        } />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
