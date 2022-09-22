import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonHeading } from "../CeePage/CeePage";
import "../Hostel/Hostel.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const HostelBody = () => {
  return (
    <>
      <div className="hostel_body mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hostel_details">
              <CommonHeading
                heading={"Hostel Admission Select list 2022-23"}
                size="28"
              />
              <p className="m-4">The final allotment list of MH </p>
              <p className="m-4">The final allotment list of LH </p>
            </div>
            <div className="col-lg-12">
              <p className="hostel_para">
                The college have one boys and one ladies hostel with capacity
                120 and 200 nos repectively. These hostels are headed by the
                warden assisted by Resident Tutors. They are the admitting
                authority. Prof. Sindhu Mathew,A P Mathematics is in charge of
                ladies hostel.Messes are run on dividing system and there is
                provision for vegetarian and non- vegetarian messes. The hostel
                inmates are expected to follow the hostel rules strictly and as
                directed by warden and resident tutors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Hostel() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Boys & Ladies Hostel"} />
      <HostelBody />
      <Footer />
    </div>
  );
}

export default Hostel;
