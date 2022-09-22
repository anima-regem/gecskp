import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import "../SyllabusPage/SyllabusPage.css";

const Syllabus = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="syllabus_details">
              <h1>KTU - B.Tech Regulation 2019 Revision</h1>
              <ul>
                <li>
                  <a href="https://ktu.edu.in/eu/acd/academicRegulation2019.htm">
                    Detailed Syllabus S1-S2 2019 Revision
                  </a>
                </li>
              </ul>
            </div>
            <div className="syllabus_details">
              <h1>KTU - B.Tech Regulation 2015 Revision</h1>
              <ul>
                <li>
                  <a href="https://ktu.edu.in/eu/acd/academicRegulation.htm">
                    Regulations, Curriculum and Syllabus 2015
                  </a>
                </li>
              </ul>
            </div>
            <div className="syllabus_details mb-5">
              <h1>KTU - M.Tech Regulation 2015 Revision</h1>
              <ul>
                <li>
                  <a href="https://ktu.edu.in/eu/acd/academicRegulationsMtech.htm">
                    Regulations, Curriculum and Syllabus 2015
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SyllabusPage = () => {
  return (
    <div>
      <Header isDepartment={false}/>
      <CommonBanner title={"Syllabus"} />
      <Syllabus />
      <Footer />
    </div>
  );
};

export default SyllabusPage;
