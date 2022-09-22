import React from "react";
import { useState, useEffect } from "react";
import "../AnnouncementPage/AnnouncementPage.css";
import Header from "../../Components/Header/Header";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import Footer from "../../Components/Footer/Footer";
import newsBannerImage from "../../../src/gradient_background.png";
import PdfView from "../../Components/PdfView/PdfView";

function AnnouncementPage() {
  const [pdf,setPdf] = useState(false)
  const[pdfUrl,setPdfUrl] = useState('')
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>
    {/* {pdf && <PdfView />} */}
      
      <div className="announcement_page">
        <Header isDepartment={false}/>
        <CommonBanner
          commonBannerHeading="Announcement"
          backgroundImage={newsBannerImage}
        />
        <div className="announcementPage_heading_section">
          {/* <AnnouncementHeading pdf={pdf} setPdf={setPdf} /> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AnnouncementPage;
