import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../NssPage/NssPage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const NssBody = () => {
  let nssImg = "https://www.gecskp.ac.in/img/nss/00.png";
  return (
    <>
      <div className="nss_body mt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 nss_img">
              <img src={nssImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function NssPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"NSS (National Service Scheme)"} />
      <NssBody />
      <Footer />
    </div>
  );
}

export default NssPage;
