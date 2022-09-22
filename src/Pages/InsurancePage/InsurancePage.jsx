import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonHeading } from "../CeePage/CeePage";
import "../InsurancePage/InsurancePage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const InsuranceBody = () => {
  let insImg = "https://www.gecskp.ac.in/img/united.jpg";
  return (
    <>
      <div className="insurance_body mt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ins_details">
              <CommonHeading
                heading={
                  "Student Safety Insurance Current Policy Validity 18/12/2019 - 17/12/2020"
                }
                size="28"
              />
              <img className="mt-2" src={insImg} alt="" />
            </div>
            <div className="col-lg-12 ins_para">
              <p className="m-4">
                All the students of this istitution is under the cover of
                Student safety insurance policy 3008014219P112179429 from
                18/12/2019 to 17/12/2020 against the Death or Hospitalisation
                due to accident. Clik here to view the policy document For any
                other information contact C1 Section, Administrative office
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function InsurancePage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Students Safety Insurance"} />
      <InsuranceBody />
      <Footer />
    </div>
  );
}

export default InsurancePage;
