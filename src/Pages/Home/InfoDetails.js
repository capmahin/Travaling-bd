import React from "react";

const InfoDetails = ({ img, cardTitle }) => {
  return (
    <div class="card  w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-dark text-white">Booking!!</button>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
