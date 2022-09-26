import React from "react";
import { AdminLine } from "./AdminCourse/AdminCourse";
import { adminStyle } from "./AdminCourse/AdminCourse";

export const AdminInputStyle = {
  width: "60%",
  marginTop: "15px",
  padding: "8px",
};
export const AdminBtnStyle = {
  marginTop: "15px",
  padding: "8px,",
};

function AdminRules() {
  return (
    <>
      <div style={adminStyle} className="row">
        <div className="col-lg-5">
          <h3>Rules</h3>
          <AdminLine />
          <input style={AdminInputStyle} type="text" placeholder="Head" />
          <button style={AdminBtnStyle}>Upload</button>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </>
  );
}

export default AdminRules;
