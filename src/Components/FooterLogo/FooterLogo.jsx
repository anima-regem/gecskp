import React from "react";
import "../FooterLogo/FooterLogo.css";

function FooterLogo() {
  return (
    <>
      <div className="footer_logo">
        <img className="footer_collage_logo" src="/images/logo.png" alt="Logo" />
        <div className="footer_logo_headings text-white">
          <h3>Government Engineering College, Palakkad, Sreekrishnapuram</h3>
          <p>
            {" "}
            Under Section 2(f) of UGC Act 1956 <br /> (Approved by AICTE &
            Affiliated to APJ Abdul Kalam Technical University)
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterLogo;
