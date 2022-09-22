import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const AffliationsAndApprovals = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="syllabus_details">
              <h1>National Board of Accreditation (NBA)</h1>
              <ul>
                <li>
                  <a href="#">
                    Computer Science & Engineering, Electronics & Communication
                    Engg and Mechanical Engineering departmets got accreditation
                    for 3 Years.
                  </a>
                </li>
              </ul>
            </div>
            <div className="syllabus_details">
              <h1>AICTE-All India Council for Technical Education</h1>
              <ul>
                <li>
                  <a href="#">Academic Year 2022-23 (EOA)</a>
                </li>
                <li>
                  <a href="#">
                    Academic Year 2021-22 (EOA) and Approval for New Courses
                  </a>
                </li>

                <li>
                  <a href="#">Academic Year 2020-21 (EOA)</a>
                </li>
                <li>
                  <a href="#">Academic Year 2019-20 (EOA)</a>
                </li>
                <li>
                  <a href="#">Academic Year 2018-19 (EOA)</a>
                </li>
                <li>
                  <a href="#">Academic Year 2016-17 (EOA)</a>
                </li>
                <li>
                  <a href="#">Academic Year 2014-15 (EOA)</a>
                </li>
                <li>
                  <a href="#">Academic Year 2013-14 (EOA)</a>
                </li>
              </ul>
            </div>
            <div className="syllabus_details mb-5">
              <h1>KTU - APJ Abdul Kalam Kerala Technological University</h1>
              <ul>
                <li>
                  <a href="#">
                    Affiliation for Academic Year 2021-22 EoA and Approval for
                    New Courses
                  </a>
                </li>
                <li>
                  <a href="#">Affiliation for Academic Year 2020-21 EoA</a>
                </li>

                <li>
                  <a href="#">Affiliation for Academic Year 2019-20 (EOA)</a>
                </li>
                <li>
                  <a href="#">Affiliation for Academic Year 2018-19 (EOA)</a>
                </li>
                <li>
                  <a href="#">Affiliation for Academic Year 2017-18 (EOA)</a>
                </li>
                <li>
                  <a href="#">Affiliation for Academic Year 2016-17 (EOA)</a>
                </li>
                <li>
                  <a href="#">Affiliation for Academic Year 2015-16</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AffliationsAndApprovalsPage = () => {
  return (
    <div>
      <Header isDepartment={false}/>
      <CommonBanner title={"Affiliations and Approvals"} />
      <AffliationsAndApprovals />
      <Footer />
    </div>
  );
};

export default AffliationsAndApprovalsPage;
