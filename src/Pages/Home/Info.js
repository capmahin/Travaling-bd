import React from "react";
import InfoDetails from "./InfoDetails";
import card1 from "../../assats/image/infocard/Sundorban.jpg";
import card2 from "../../assats/image/infocard/Cox.jpg";
import card3 from "../../assats/image/infocard/Partotto.jpg";

const Info = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center text-black p-4">
          Our Service Packages
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
        <InfoDetails cardTitle="Sundarban" img={card1}></InfoDetails>
        <InfoDetails cardTitle=" Cox's Bazar" img={card2}></InfoDetails>
        <InfoDetails
          cardTitle="Chittagong Hill Tracts"
          img={card3}
        ></InfoDetails>
      </div>
    </div>
  );
};

export default Info;
