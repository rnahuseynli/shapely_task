import React from "react";
import ImageSeo from "./assets/macbook-preview-flexible.png";
const Friendly = () => {
  return (
    <div>
      <div className="seo_img">
        <img src={ImageSeo} alt="" />
        <div className="seo_about">
          <h3>SEO Friendly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam
            feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et
            interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula
            id ultricies.
          </p>
          <button className="btn_seo">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Friendly;
