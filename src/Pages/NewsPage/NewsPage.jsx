import React,{useEffect} from "react";
import "../NewsPage/NewsPage.css";
import Banner from "../../Components/Banner/Banner";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import newsBannerImage from "../../../src/gradient_background.png";

function NewsPage() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="news_page">
      <Header isDepartment={false}/>
      <CommonBanner commonBannerHeading="News" backgroundImage={newsBannerImage} />
      <div className="newsPage_heading_section">
        {/* <NewsHeading /> */}
      </div>
      
      <Footer />
    </div>
  );
}

export default NewsPage;
