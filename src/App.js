import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

import CompletedTask from "./Pages/CompletedTask/CompletedTask";

import Calender from "./Pages/Calendar/Calender";
import Footer from "./Shared/Footer";

import ToDoList from "./Pages/ToDo/ToDoList";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedTasks" element={<CompletedTask />} />
        <Route path="/toDoList" element={<ToDoList />} />

        <Route path="/calendar" element={<Calender />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
