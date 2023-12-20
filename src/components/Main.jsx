import React from "react";
import Image from "./assets/photo-1443527216320-7e744084f5a7-1.jpg";

const Main = () => {
  return (
    <div>
      <div className="img">
        <img src={Image} alt="" />

        <h2>We Change Everything WordPress</h2>
        <p>This is the only WordPress theme you will ever want to use.</p>
        <button className="btn_purple">READ MORE</button>
        <button className="btn_white">DOWNLOAD NOW</button>
      </div>
    </div>
  );
};

export default Main;
