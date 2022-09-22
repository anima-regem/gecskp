import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../IeeePage/IeeePage.css";
import { LibraryDetails } from "../LibraryPage/LibraryPage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import ieeeDetails from "../../jsonFiles/ieee.json";

const IeeeBody = () => {
  let ieeeImg = "https://www.gecskp.ac.in/img/ieee1.jpg";
  return (
    <>
      <div className="ieee_body mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LibraryDetails
                title={"Contact"}
                details={ieeeDetails.ieeeContact}
              />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 mt-3 ieeeImg">
                  <img src={ieeeImg} alt="" />
                </div>
                <div className="col-lg-4 mt-3 ieeeImg">
                  <img src={ieeeImg} alt="" />
                </div>
                <div className="col-lg-4 mt-3 ieeeImg">
                  <img src={ieeeImg} alt="" />
                </div>
                <div className="col-lg-4 mt-3 ieeeImg">
                  <img src={ieeeImg} alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function IeeePage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"IEEE Students Chapter"} />
      <IeeeBody />
      <Footer />
    </div>
  );
}

export default IeeePage;
