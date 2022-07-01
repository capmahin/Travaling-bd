import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

import CompletedTask from "./Pages/CompletedTask/CompletedTask";

import Calender from "./Pages/Calendar/Calender";
import Footer from "./Shared/Footer";
import ToDo from "./Pages/ToDo/ToDo";

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
      <Footer></Footer>
    </div>
  );
}

export default App;
