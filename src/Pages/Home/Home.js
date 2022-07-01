import React from "react";

import ToDo from "../ToDo/ToDo";
import ToDoList from "../ToDo/ToDoList";

import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ToDo></ToDo>
      <ToDoList></ToDoList>
    </div>
  );
};

export default Home;
