import React from "react";
import MyackgroundBannerImage from "../../../src/gradient_background.png";
import Banner from "../../Components/Banner/Banner";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import EventBody from "../../Components/EventBody/EventBody";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { EventOverlayContext } from "../../Context/EventOverlayContext";
import { departmentStore } from "../../Store/DepartmentStore";

function EventPage() {
    let departments = departmentStore((state) => state.departments);
    console.log(departments);
    return (
        <div className="event-page">
            <Header isDepartment={false}/>
            <CommonBanner
                backgroundImage={MyackgroundBannerImage}
                commonBannerHeading="Events"
            />
            <EventBody />
            <Footer />
        </div>
    );
}

export default EventPage;
