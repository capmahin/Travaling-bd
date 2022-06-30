import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import ToDo from "./Pages/ToDo/ToDo";
import Calender from "./Pages/Calendar/Calender";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completedTasks" element={<CompletedTask />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calendar" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
