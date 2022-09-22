import React, { useState, useEffect } from "react";
import {
  DepartmentHod,
  DepartmentMissionVision,
  DepartmentQuickLinks,
} from "../../Components/Department/Department";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../AdministrativePage/AdministrativePage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AdminOfficeSection = () => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "administration"),
      orderBy("created", "desc")
    );
    onSnapshot(q, (QuerySnapshot) => {
      setAdmin(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  
  return (
    <>
      <div className="admin_office_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 admin_section mt-5">
              <h3>Sections</h3>
              <DepartmentMissionVision
                vision="Excellence through the wings of science and technology ."
                mission="To transform youth to talented engineers with creativity and integrity who can meet the technological challenges for the service of society."
              />
            </div>
            <div className="col-lg-4">
              {admin[0]?<DepartmentHod title="Administrative Assistant" hodName={admin[0].data.name} email={admin[0].data.email} mobileno={admin[0].data.mobile} />:<></>}
              <DepartmentQuickLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function AdministrativePage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Administrative Office"} />
      <AdminOfficeSection />
      <Footer />
    </div>
  );
}

export default AdministrativePage;
