import React, { useEffect, useState } from "react";
import "../AdmissionPage/AdmissionPage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AdmissionHelp from "../../jsonFiles/admissionHelp.json";
import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../firebase";

const AdmissionLine = () => {
  return (
    <>
      <div className="admission_line_section">
        <div className="admission_line"></div>
      </div>
    </>
  );
};

const AdmissionHelpStaff = () => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "admission"), orderBy("created", "desc"));
    onSnapshot(q, (QuerySnapshot) => {
      setStaffs(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  // staffs.map(staff => {
  //   console.log(staff.data.phone)
  // })
  //console.log(staffs);
  return (
    <>
      {staffs.map((staff) => (
        <div key={staff.id} className="admission_help_staff">
          <p>{staff.data.Facultyquery}</p>
          <p>{staff.data.name}</p>
          <p>{staff.data.position}</p>
          <p>{staff.data.mail}</p>
          <p>{staff.data.phone}</p>
          <AdmissionLine />
        </div>
      ))}
    </>
  );
};

const AddmisionHelp = () => {
  return (
    <>
      <div className="admission_help_section">
        <h3 className="admission_heading">For Help</h3>
        <div className="admisson_help_details text-center">
          <AdmissionLine />
          <p>Help documents and Notifications</p>
          <AdmissionLine />
          <div className="admission_notifications">
            <p>LET Spot Notification</p>
            <p>Proxy Format</p>
            <p>Hostel Facility</p>
            <p>College Bus Facility</p>
            <p>Fee Structure Certificate</p>
          </div>
          <AdmissionLine />
          <div>
            <AdmissionHelpStaff />
          </div>
        </div>
      </div>
    </>
  );
};

const AddmisionBody = () => {
  return (
    <>
      <div className="admission_body pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AddmisionHelp />
            </div>
            <div className="col-lg-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis suscipit pariatur placeat rem numquam tempora nisi
              fugit eaque deserunt, rerum recusandae magnam delectus nesciunt
              voluptatum quae temporibus quo, consectetur distinctio dolorum
              consequuntur. Optio sequi dolore dolor alias amet architecto
              placeat eum quibusdam, numquam temporibus. Praesentium minus omnis
              magni quisquam adipisci.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AdmissionPage = () => {
  return (
    <div>
      <Header isDepartment={false} />
      <CommonBanner title={"Admission 2022-23"} />
      <AddmisionBody />
      <Footer />
    </div>
  );
};

export default AdmissionPage;
