import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../CeePage/CeePage.css";
import { LibraryDetails } from "../LibraryPage/LibraryPage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import cee from "../../jsonFiles/cee.json";

export const CommonHeading = ({ heading, size }) => {
  return (
    <>
      <div className="common_heading mt-4">
        <h1 style={{ fontSize: `${size}px` }}>{heading}</h1>
      </div>
    </>
  );
};

const CeeBody = () => {
  let ceeImg = "https://www.gecskp.ac.in/img/cce.jpg";
  return (
    <>
      <div className="ceeBody mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cee_body_section">
              <div className="cee_heading">
                <CommonHeading
                  heading={
                    "Center For Continuing Education Government Engineering Collage Palakkad"
                  }
                  size="28"
                />
                <img src={ceeImg} alt="" />
              </div>
              <p>
                The Centre for Continuing Education (CCE) is functioning in this
                institution since 2010. The CCE coordinates the continuing
                education programs of the Institute. The CCE helps to organize
                Continuing Education Programs aimed at imparting skills to the
                students. It also shall arrange short-term courses meant for
                faculty in professional institutions. <br /> <br /> By utilizing
                the laboratory resources, CCE coordinates various engineering
                testing and consultancy activities by all the Departments. The
                Centre is currently located alongside the Department of
                Mechanical Engineering. The institution has a good collection of
                equipment for testing and certification. Concrete structures and
                cubes are tested and certified. Also consultancy works are
                undertaken to certify the equipment after field visits. <br />{" "}
                <br />
                Participants interested in lifelong learning and those willing
                to develop professional skills, can attend the courses offered
                by the CCE. The target audience of the courses are in-service
                technical persons from various Govt./Semi Govt. organisations,
                public and private undertakings, research institutions and
                industries. Courses for students are also conducted by various
                departments through the CCE.
              </p>
              <div>
                <CommonHeading heading={"Major Activities"} size="22" />
                <LibraryDetails title={""} details={cee.ceeActivities} />
              </div>
              <div>
                <CommonHeading heading={"Fee Structure"} size="22" />
                <LibraryDetails title={""} details={cee.ceeFee} />
              </div>
              <div>
                <CommonHeading heading={"The institution has signed MoUs with the following firms:"} size="22" />
                <LibraryDetails title={""} details={cee.ceeFirms} />
              </div>
              <div>
                <CommonHeading heading={"Contact Person:"} size="22" />
                <LibraryDetails title={""} details={cee.ceeContact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function CeePage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Center For Continuing Education"} />
      <CeeBody />
      <Footer />
    </div>
  );
}

export default CeePage;
