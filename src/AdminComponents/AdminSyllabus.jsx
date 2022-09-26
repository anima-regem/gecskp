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
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { AdminInputStyle } from "./AdminAdmission/AdminAdmission";

export const adminStyle = {
  backgroundColor: "#F2F2F2",
  padding: "20px",
};

const Syllabus = (prop) => {
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, "syllabus", id);
    console.log(doc(db, "syllabus", id));
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
  const syllabusData = prop.syllabusData;
  return (
    <div className="syllabus_details">
      <h1>{syllabusData.head}</h1>
      <ul>
        <li>
          <a href={syllabusData.link}>{syllabusData.data}</a>
        </li>
      </ul>
      <button onClick={() => handleDelete(prop.syllabusData.id)}>Delete</button>
    </div>
  );
};

const AdminSyllabus = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [link, setLink] = useState("");
  const [head, setHead] = useState("");
  const [data, setData] = useState("");

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
  }, []);

  // const selectFile = (e) => {
  //   let selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const storageRef = ref(storage, `syllabus/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     console.log(progress);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    addDoc(collection(db, "syllabus"), {
      head,
      data,
      link,
      createdAt: Timestamp.now(),
    });
    //     });
    //   }
    // );
  };

  return (
    <div style={adminStyle} className="row">
      <div className="col-lg-5">
        <input
          type="text"
          placeholder="Syllabus Heading"
          id="head"
          onChange={(e) => setHead(e.target.value)}
        />
        <input
          type="text"
          placeholder="Syllabus Data"
          id="data"
          onChange={(e) => setData(e.target.value)}
        />
        <input
          onChange={(e) => setLink(e.target.value)}
          placeholder="Syllabus Link"
          type="text"
          name="link"
        />
        <button onClick={handleSubmit}>Upload</button>
      </div>

      <div className="col-lg-5">
        {syllabus.map((syllabusData) => (
          <Syllabus syllabusData={syllabusData} />
        ))}
      </div>
    </div>
  );
};

export default AdminSyllabus;
