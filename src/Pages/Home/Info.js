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
        <InfoDetails
          description="Sundarbans is a mangrove area in the delta formed by the confluence of
          the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It
          spans the area from the Baleswar River in Bangladesh's division of
          Khulna to the Hooghly River in India's state of West Bengal."
          cardTitle="Sundarban"
          img={card1}
        ></InfoDetails>
        <InfoDetails
          description="Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island."
          cardTitle=" Cox's Bazar"
          img={card2}
        ></InfoDetails>
        <InfoDetails
          description="The Chittagong Hill Tracts, often shortened to simply the Hill Tracts and abbreviated to CHT, are group of districts within the Chittagong Division in southeastern Bangladesh, bordering India and Myanmar."
          cardTitle="Chittagong Hill Tracts"
          img={card3}
        ></InfoDetails>
      </div>
    </div>
  );
};

export default Info;
