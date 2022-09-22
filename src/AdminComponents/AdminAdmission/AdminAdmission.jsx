import React, { useState, useEffect } from "react";
import { AdminLine } from "../AdminCourse/AdminCourse";
import { adminStyle } from "../AdminCourse/AdminCourse";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";

export const AdminInputStyle = {
  width: "60%",
  marginTop: "15px",
  padding: "8px",
};
export const AdminBtnStyle = {
  width:'150px',
  padding:'8px',
  marginTop:'8px',
  background:'#800000',
  color:'#fff',
  border:'none',
  borderRadius:'5px'
};

function AdminAdmission() {
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

  const [Facultyquery, setQuery] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'admission', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDoc(collection(db, "admission"), {
      Facultyquery,
      name,
      position,
      mail,
      phone,
      created: Timestamp.now(),
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <div style={adminStyle} className="row">
        <div className="col-lg-6">
          <h3>Admission Help</h3>
          <input
            value={Facultyquery}
            onChange={(e) => setQuery(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="what Query"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="Name of Faculty"
          />
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="Position odf the faculty"
          />
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="mail id of the faculty"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="phone number of the faculty"
          />
          <br />
          <button onClick={handleSubmit} style={AdminBtnStyle}>
            Add Faculty{" "}
          </button>
          <AdminLine />
        </div>

        <div className="col-lg-6">
          <h3
            style={{
              marginBottom: "30px",
            }}
          >
            Faculties for admission help
          </h3>

          {/* <p style={{ fontSize: "22px", margin: "0" }}>
            <b>Admission 2022-23</b>
          </p> */}

          {staffs.map((staff) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  background: "#d3d3d3",
                  padding: "10px",
                  borderRadius: "10px",
                  marginTop: "15px",
                }}
              >
                <h4>{staff.data.name}</h4>
                <button onClick={() => handleDelete(staff.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminAdmission;
