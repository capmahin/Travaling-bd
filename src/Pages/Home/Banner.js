import React from "react";

const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://uploads-ssl.webflow.com/5a723458b5e4b70001aa226c/5e87f6f458edde59716c2e76_Screen%20Shot%202020-04-03%20at%2023.54.15.png"
          class="w-full h-80"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://lh3.googleusercontent.com/Zcu5UupB1AqesDhGSF9QAsFJtPr2xuaFlWPqAhYNe_xh7t5PRO1lgsKZn_MR0iAO8PCoLbIjsOpnZRSfBMC6UZpIyvA=w640-h400-e365-rj-sc0x00ffffff"
          class="w-full  h-80"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://images.ctfassets.net/lzny33ho1g45/google-sheets-to-do-list-p-img/ed5c3bf53cd398a7b804155da7ca348a/file.png"
          class="w-full h-80"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://i.pinimg.com/originals/4b/e4/a2/4be4a2e8382df8e7796607230d38d654.jpg"
          class="w-full h-80"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
