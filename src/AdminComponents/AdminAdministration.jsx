import React, { useState, useEffect } from "react";
import { AdminInputStyle } from "./AdminAdmission/AdminAdmission";
import { adminStyle } from "./AdminCourse/AdminCourse";
import { AdminBtnStyle } from "./AdminAdmission/AdminAdmission";
import { adminDataStyle } from "./AdminBannerImages";
import { handleDelete } from "./AdminBannerImages";
import { db } from "../firebase";
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

function AdminAdministration() {
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

  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDoc(collection(db, "administration"), {
      name,
      email,
      mobile,
      created: Timestamp.now(),
    }).catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <div style={adminStyle} className="col-lg-6">
        <h4>Admin Details</h4>
        <input
          onChange={(e) => SetName(e.target.value)}
          value={name}
          style={AdminInputStyle}
          type="text"
          placeholder="Admin Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={AdminInputStyle}
          type="text"
          placeholder="Admin Email"
        />
        <input
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          style={AdminInputStyle}
          type="text"
          placeholder="Admin Mobile Number"
        />
        <br />
        <button onClick={handleSubmit} style={AdminBtnStyle}>
          Upload
        </button>
      </div>
      <div className="col-lg-6">
        <h4>Admin Details</h4>
        {admin.map((admin) => {
          return (
            <>
              <div style={adminDataStyle}>
                <h3>{admin.data.name}</h3>
                <button
                  onClick={() => handleDelete("administration", admin.id)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AdminAdministration;
