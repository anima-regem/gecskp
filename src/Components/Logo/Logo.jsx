import React, { useContext } from "react";
import "../Logo/Logo.css";
import { LanguageContext } from "../../Context/LanguageContext";

function Logo({ footer }) {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className="header_logo_section">
        <div className="header_logo">
          <img className="collage_logo" src="/images/logo.png" alt="Logo" />
        </div>
        <div className="header_heading">
          <h2
            className={
              language
                ? "malayalam_logo_heading"
                : "english_logo_heading"
            }
          >
            {language
              ? "സർക്കാർ എഞ്ചിനീയറിംഗ് കോളേജ് പാലക്കാട്, ശ്രീകൃഷ്ണപുരം"
              : "Government Engineering College, Palakkad, Sreekrishnapuram"}
          </h2>
          <p className="logo_para">
            Under Section 2(f) of UGC Act 1956 <br /> (Approved by AICTE &
            Affiliated to APJ Abdul Kalam Technical University)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
