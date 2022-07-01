import React from "react";

const Service = ({ service, setTask }) => {
  const { sluts } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="card-actions justify-end">
          <button class=""></button>
          <label
            for="booking-modal"
            onClick={() => setTask(service)}
            class="btn btn-primary text-white uppercase"
          >
            Click Here!!!
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
