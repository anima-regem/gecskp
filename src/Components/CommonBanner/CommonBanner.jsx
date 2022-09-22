import React from "react";
import '../CommonBanner/CommonBanner.css'

function CommonBanner(props) {
  const style={
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    height: "20vh",
  }
  return (
    <>
    <div style={style} className="common_banner_section">
      <div className="common_banner_heading_section">
        <h1 className="common_banner_heading">{props.commonBannerHeading}</h1>
      </div>
    </div>
    </>
  );
}

export default CommonBanner;
