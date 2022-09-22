import React from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const AdminLine = () => {
  return (
    <div
      style={{
        width:'600px',
        height:'.5px',
        marginTop: "15px",
      }}
      className="admin_line"
    ></div>
  );
};
export const adminStyle = {
  backgroundColor:"#F2F2F2",
  padding:'20px',
}
function AdminCourse() {

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div style={adminStyle} className="row">
      <div className="col-lg-6">
        <h3>B.tech courses</h3>
        <input
          style={{ width: "60%" }}
          type="text"
          placeholder="Department Name"
        />
        <div className="mt-3">
          <textarea
            name=""
            id=""
            cols="42"
            rows="4"
            placeholder="department description"
          ></textarea>
        </div>
        <button>Add Course</button>
        <AdminLine />

        <h3 className="mt-5">M.tech courses</h3>
        <input
          style={{ width: "60%" }}
          type="text"
          placeholder="Department Name"
        />
        <div className="mt-3">
          <textarea
            name=""
            id=""
            cols="42"
            rows="4"
            placeholder="department description"
          ></textarea>
        </div>
        <button>Add Course</button>
        <AdminLine/>

        <h3 className="mt-5">Phd courses</h3>
        <input
          style={{ width: "60%" }}
          type="text"
          placeholder="Department Name"
        />
        <div className="mt-3">
          <textarea
            name=""
            id=""
            cols="42"
            rows="4"
            placeholder="department description"
          ></textarea>
        </div>
        <button onClick={handleSubmit}>Add Course</button>
        <AdminLine/>
      </div>

      <div className="col-lg-6">
        <h3>B.tech courses</h3>

        <p style={{ fontSize: "22px", margin: "0" }}>
          <b>computer science</b>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ex, sed
          animi possimus, modi excepturi dicta sapiente inventore illo ipsam
          cupiditate quod aspernatur accusantium eius obcaecati rerum quis,
          molestias iste.
        </p>
      </div>
    </div>
  );
}

export default AdminCourse;
