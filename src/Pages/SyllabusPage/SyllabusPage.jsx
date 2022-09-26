import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import "../SyllabusPage/SyllabusPage.css";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const SyllabusElement = (prop) => {
  const syllabusData = prop.syllabusData;
  return (
    <div className="syllabus_details">
      <h1>{syllabusData.head}</h1>
      <ul>
        <li>
          <a href={syllabusData.link}>{syllabusData.data}</a>
        </li>
      </ul>
    </div>
  );
};

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "syllabus"), orderBy("createdAt", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setSyllabus(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          head: doc.data().head,
          link: doc.data().link,
          data: doc.data().data,
        }))
      );
    });
  },[]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {syllabus.map((syllabusData) => (
              <SyllabusElement key={syllabusData.id} syllabusData={syllabusData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SyllabusPage = () => {
  return (
    <div>
      <Header isDepartment={false} />
      <CommonBanner title={"Syllabus"} />
      <Syllabus />
      <Footer />
    </div>
  );
};

export default SyllabusPage;
