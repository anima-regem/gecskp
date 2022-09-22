import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Line from "../../Components/Line/Line";
import { LinkLine } from "../../Components/MenuSection/MenuSection";
import "../LibraryPage/LibraryPage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import lib from "../../jsonFiles/lib.json";

export const LibraryDetails = ({ title, details }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 datacenter_details library__details">
          <h3 className="mt-4">{title}</h3>

          {details.map((item) => {
            return (
              <>
                <p>{item.para}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const LibrarySection = () => {
  let libImg = "https://www.gecskp.ac.in/img/logo/knimbus.jpg";
  let libImg2 = "https://www.gecskp.ac.in/img/details/21.jpg";
  let libPara =
    "The central library of the college is attached with the main building of the college, which satisfy the information needs of the college community. It also caters the needs of students regarding career guidance and personality development. The floor area of the library is 578 sq.metre. Central library is automated. The total collection is 17151 books. All books are classified and catalogued according to international standards. It follows the open accesses system.It is open to all students, faculty and other staff members of the college from 9.30AM to 4.30PM.";
  return (
    <>
      <div className="library_section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 datacenter_para">
              <p>{libPara}</p>
            </div>
            <div className="col-lg-12 mt-4 datacenter_heading">
              <h3>Online Journals</h3>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
                <div className="col-lg-3 col-md-3 col-6 col-sm-6 online_lib_img">
                  <img className="mt-4" src={libImg} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5 datacenter_heading">
              <h3>Hardcopy Journals</h3>
            </div>
            <div className="col-lg-6">
              <p>Advances in wireless and mobile communication</p>
            </div>
            <div className="col-lg-6">
              <p>Advances in wireless and mobile communication</p>
            </div>
            <div className="col-lg-12 mt-5 datacenter_heading">
              <h3>Sections of the library</h3>
            </div>
            <div className="col-lg-12 datacenter_para mt-3">
              <p>
                Circulation section, Stalk area, Book Bank, Periodical Section,
                and Digital section, OPAC are the major sections of the central
                Library.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 lib_img mt-3">
                <img src={libImg2} alt="" />
                <LibraryDetails title="Loan Privileges" details={lib} />
              </div>
              <div className="col-lg-6 lib_img mt-3">
                <img src={libImg2} alt="" />
                <LibraryDetails title={"Periodicals"} details={lib} />
              </div>
              <div className="col-lg-6 lib_img mt-5">
                <img src={libImg2} alt="" />
                <LibraryDetails title={"Services"} details={lib} />
              </div>
              <div className="col-lg-6 lib_img mt-5">
                <img src={libImg2} alt="" />
                <LibraryDetails
                  title={"Library Staff strength"}
                  details={lib}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function LibraryPage() {
  return (
    <div>
      <Header />
      <CommonBanner title="Central Library" />
      <LibrarySection />
      <Footer />
    </div>
  );
}

export default LibraryPage;
