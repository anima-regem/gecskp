import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../CcfPage/CcfPage.css";
import { LibraryDetails } from "../LibraryPage/LibraryPage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import ccfData from "../../jsonFiles/ccf.json";

export const CcfLine = () => {
  return (
    <>
      <div className="ccf_line_section mt-3 mb-3">
        <div className="ccf_line"></div>
      </div>
    </>
  );
};

const CcfBody = () => {
  return (
    <>
      <div className="ccf_body_section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LibraryDetails
                title={"CCF Staff"}
                details={ccfData.ccfDetails}
              />
              <div className="mt-3">
                <LibraryDetails
                  title={"Facilities"}
                  details={ccfData.ccfFacilities}
                />
              </div>
              <div className="mt-3 ccf_button">
                <LibraryDetails title={"Documents"} details={ccfData.ccfDocs} />
                <button>Internet Usage Policy</button>
              </div>
              <div className="mt-3 ccf_button">
                <LibraryDetails title={"Contact"} details={ccfData.ccfDocs} />
                <button>adminccf@gecskp.ac.in</button>
              </div>
            </div>
            <div className="col-lg-8 ccf__details p-5">
              {ccfData.ccfData.map((item) => {
                return (
                  <>
                    <p>
                      <span>{item.spanTitle}</span>
                      {item.para}
                    </p>
                    <CcfLine />
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

function CcfPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Central Computing Facility"} />
      <CcfBody />
      <Footer />
    </div>
  );
}

export default CcfPage;
