import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header isDepartment={false}/>
      <Banner />
      <Body />
      <Footer/>
    </div>
  );
}

export default HomePage;
