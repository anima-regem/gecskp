import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../BusFacility/BusFacility.css";
import { CommonHeading } from "../CeePage/CeePage";
import { LibraryDetails } from "../LibraryPage/LibraryPage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import BusDetails from "../../jsonFiles/Bus.json";

const BusBody = () => {
  let BusImg = "https://www.gecskp.ac.in/images/ece/bus.jpg";
  return (
    <>
      <div className="bus_body mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 bus_details">
              <img src={BusImg} alt="" />
            </div>
            <div className="col-lg-6">
              <CommonHeading
                heading={"College is having bus services to 6 destinations"}
                size="26"
              />
              <LibraryDetails title={""} details={BusDetails.busTime} />
              <CommonHeading heading={"Notices"} size="26" />
              <LibraryDetails title={""} details={BusDetails.busNotice} />
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <CommonHeading heading={"Bus Secretary"} size={"26"} />
            <LibraryDetails title={""} details={BusDetails.busSecretary} />
          </div>
          <div className="col-lg-12">
            <CommonHeading heading={"Bus Timings"} size="26" />
          </div>
          <div className="col-lg-12">
            <div className="row">
              {BusDetails.busTimes.map((img) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-12 mt-4 bus_details">
                      <img src={img.img} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function BusFacility() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Collage Bus Facility"} />
      <BusBody />
      <Footer />
    </div>
  );
}

export default BusFacility;
