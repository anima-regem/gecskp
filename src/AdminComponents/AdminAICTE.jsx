import React from "react";
import { useState, useEffect } from "react";
import { AdminLine } from "./AdminCourse/AdminCourse";
import { adminStyle } from "./AdminCourse/AdminCourse";
import { storage, db } from "../firebase";
import { collection,doc, addDoc, Timestamp, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const AdminInputStyle = {
  width: "60%",
  marginTop: "15px",
  padding: "8px",
};
export const AdminBtnStyle = {
  marginTop: "15px",
  padding: "8px,",
};

function AdminAICTE() {
  const [file, setFileUpload] = useState(null);
  const [link, setLink] = useState("");

  useEffect(() => {
    const linkRef = doc(db, "AICTE", "first");
    getDoc(linkRef).then((doc) => {
      if (doc.exists()) {
        setLink(doc.data().link);
      } else {
        console.log("No such document!");
      }
    });
  });


    

  const setFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileUpload(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `AICTE/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setDoc(doc(db, "AICTE","first"), {
          link: downloadURL,
          created: Timestamp.now(),
        });
        setLink(downloadURL);
      });
    });
  };

  return (
    <>
      <div style={adminStyle} className="row">
        <div className="col-lg-6">
          <h3>AICTE Disclosure</h3>
          <AdminLine />
          <input style={AdminInputStyle} type="file" onChange={setFile} />
          <button style={AdminBtnStyle} onClick={handleSubmit}>
            Upload
          </button>
        </div>
        <div className="col-lg-6">
          <h3>AICTE Mandatory Disclosure</h3>
          <a href={link}>File</a>
        </div>
      </div>
    </>
  );
}

export default AdminAICTE;
