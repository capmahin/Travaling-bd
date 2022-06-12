import React from "react";
import { useNavigate } from "react-router-dom";

const InfoDetails = ({ img, cardTitle, description }) => {
  const navigate = useNavigate();
  const navigateTrip = () => {
    navigate("/trips");
  };
  return (
    <div class="card  w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-dark text-white" onClick={navigateTrip}>
            Booking!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
