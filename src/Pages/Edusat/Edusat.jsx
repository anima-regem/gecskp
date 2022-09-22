import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../Edusat/Edusat.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const EdusatBody = () => {
  return (
    <>
      <div className="edusat_body mt-5 mb-5">
        <div className="container">
          <div className="row">
            <h1>
              This facility is provided in a seventy two seated hall in the
              first floor. Using this facility educational Programmes and
              Administrative level meeting by DTE are conducted.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

function Edusat() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Edusat"} />
      <EdusatBody />
      <Footer />
    </div>
  );
}

export default Edusat;
