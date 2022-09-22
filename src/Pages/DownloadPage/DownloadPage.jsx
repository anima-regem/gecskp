import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../DownloadPage/DownloadPage.css";
import { LibraryDetails } from "../LibraryPage/LibraryPage";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import downloadDetails from "../../jsonFiles/downloads.json";

const DownloadBody = () => {
  return (
    <>
      <div className="download_body mt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LibraryDetails
                title={"Forms and Formats"}
                details={downloadDetails.forms}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function DownloadPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Downloads"} />
      <DownloadBody />
      <Footer />
    </div>
  );
}

export default DownloadPage;
