import React from "react";
import '../OrganisationalChartPage/OrganisationalChartPage.css'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";


export const CommonBanner = ({title}) => {
  return(
    <>
    <div className="commonBanner">
      <div className="container commonBanner_heading">
        <h1>{title}</h1>
      </div>
    </div>
    </>
  )
}

function OrganisationalChartPage() {
  return (
    <div className="OrganisationalChartPage_container">
      <Header isDepartment={false}/>
      <CommonBanner title='Organisational Chart'/>
      <div className="container chart_img pb-3">
        <img src="/images/orgchart.jpg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default OrganisationalChartPage;
