import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../AluminiPage/AluminiPage.css";
import { CcfLine } from "../CcfPage/CcfPage";
import { CommonHeading } from "../CeePage/CeePage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const AluminiLine = () => {
    return(
        <>
        <div className="alumini_line"></div>
        </>
    )
}



const AluminiBody = () => {
  let aluminiImg = "https://www.gecskp.ac.in/img/teacher/alumini.png";
  return (
    <>
      <div className="alumini_body mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 mt-4 alumini_img">
              <img src={aluminiImg} alt="alumini Image" />
            </div>
            <div className="col-lg-6 col-md-12 m-2 col-12 alumini_details">
              <CommonHeading
                heading={"Eminent Alumni and their Achievements"}
                size="24"
              />
              <p>
                Sastra Robotics, a startup by our 2012 ECE alumnus Mr. Aronin
                Ponnappan signed a big contract with Aircraft Manufacturer M/s.
                Lockhead Martin for supplying robots for them.
              </p>
            </div>
            <AluminiLine/>
            <div className="col-lg-6 alumini_img">
              <img src={aluminiImg} alt="alumini Image" />
            </div>
            <div className="col-lg-6 m-2 alumini_details">
              <CommonHeading
                heading={"Eminent Alumni and their Achievements"}
                size="26"
              />
              <p>
                Sastra Robotics, a startup by our 2012 ECE alumnus Mr. Aronin
                Ponnappan signed a big contract with Aircraft Manufacturer M/s.
                Lockhead Martin for supplying robots for them.
              </p>
            </div>
            <AluminiLine/>
            <div className="col-lg-6 alumini_img">
              <img src={aluminiImg} alt="alumini Image" />
            </div>
            <div className="col-lg-6 m-2 alumini_details">
              <CommonHeading
                heading={"Eminent Alumni and their Achievements"}
                size="26"
              />
              <p>
                Sastra Robotics, a startup by our 2012 ECE alumnus Mr. Aronin
                Ponnappan signed a big contract with Aircraft Manufacturer M/s.
                Lockhead Martin for supplying robots for them.
              </p>
            </div>
            <AluminiLine/>
          </div>
        </div>
      </div>
    </>
  );
};

function AluminiPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Alumini"} />
      <AluminiBody />
      <Footer />
    </div>
  );
}

export default AluminiPage;
