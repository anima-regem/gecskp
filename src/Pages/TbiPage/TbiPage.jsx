import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonHeading } from "../CeePage/CeePage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import "../TbiPage/TbiPage.css";

const TbiBody = () => {
  return (
    <>
      <div className="tbi_body mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 tbi_section">
              <p>
                TBI­GECS is a prominent facility in GEC Sreekrishnapuram,
                Palakkad under the Directorate of Technical Education, Kerala.
                Its aim is to bring Technology and Business under one umbrella.
                Proposals are invited from young entrepreneurs with innovative
                ideas to start new venture in different areas of technology. The
                incubatees can use the facility provided in TBI­GECS for a
                maximum period of three years (maturation time). A small rent
                will have to be paid by the incubatees while they are in
                TBI­GECS. <br />
                <br /> The selected start-up companies will be provided with
                office space, broadband internet, and technical advice to
                develop their ideas into marketable products. Depending on the
                progress, support for marketing, branding, technology transfer,
                securing IPR, etc. may also be extended by TBIGECS. Application
                form can be downloaded from the link below and along with the
                filled application the curriculum vitae of the applicants,
                detailed project plan (Business Proposal) are also to be
                submitted. These documents must reach TBI­GECS on or before
                10.11.2020 by email to tbi.gecskp@gmail.com The screening of the
                business proposals will be done by an expert panel chosen by the
                TBI­GECS management committee. The applicants of the selected
                proposals will be intimated within 15 days of selection.
              </p>
              <div>
                <CommonHeading
                  heading={"Firms Incubated at TBI GEC Palakkad"}
                  size="22"
                />
              </div>
              <div>
                <CommonHeading
                  heading={"New firms selected for incubation - 2019"}
                  size="22"
                />
              </div>
              <div>
                <CommonHeading
                  heading={"TBI Statistics"}
                  size="22"
                />
              </div>
              <div>
                <CommonHeading
                  heading={"For further details, please contact:"}
                  size="22"
                />
              </div>
              <div className="ccf_button">
                <button>DOWNLOAD Application Form</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TbiPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Technology Business Incubator (TBI)"} />
      <TbiBody />
      <Footer />
    </div>
  );
}

export default TbiPage;
