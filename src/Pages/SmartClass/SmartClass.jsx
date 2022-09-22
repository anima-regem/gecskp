import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import "../SmartClass/SmartClass.css";

const SmartClassBody = () => {
  return (
    <>
      <div className="smart_class_body mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Will be updated soon!!!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function SmartClass() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Smart Class"} />
      <SmartClassBody />
      <Footer />
    </div>
  );
}

export default SmartClass;
