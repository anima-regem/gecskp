import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
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

export const adminStyle = {
  backgroundColor: "#F2F2F2",
  padding: "20px",
};

const Syllabus=(prop)=>{
    const syllabusData = prop.syllabusData
    return (<div className="syllabus_details">
    <h1>{syllabusData.head}</h1>
    <ul>
      <li>
        <a href={syllabusData.head}>{syllabusData.data}</a>
      </li>
    </ul>
  </div>)
}

const AdminSyllabus = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [file, setFile] = useState();
  const [head, setHead] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const q = query(collection(db, "syllabus"), orderBy("created"));
    onSnapshot(q, (querySnapshot) => {
      setSyllabus(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          head: doc.head,
          link: doc.link,
          data: doc.data,
        }))
      );
    });
  }, []);
  console.log(syllabus);

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = {head,data,link:file,createdAt:Timestamp.now()}
    console.log(temp)
    addDoc(collection(db, "syllabus"), {...temp});
  };

  return (
    <div style={adminStyle} className="row">
      <div className="col-lg-6">
        <input
          type="text"
          placeholder="Syllabus Heading"
          id="head"
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />
        <input
          type="text"
          placeholder="Syllabus Data"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Syllabus Heading"
          id="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <button onClick={handleSubmit}>Upload</button>
      </div>

      <div className="col-lg-6">
        {syllabus.map((syllabusData) => (
            <Syllabus syllabusData={syllabusData}/>
          
        ))}
      </div>
    </div>
  );
};

export default AdminSyllabus;
