import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const ToDo = () => {
  const [services, setServices] = useState([]);
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service) => (
        <Service key={service.id} service={service} setTask={setTask}></Service>
      ))}
      {task && <BookingModal task={task}></BookingModal>}
    </div>
  );
};

export default ToDo;
