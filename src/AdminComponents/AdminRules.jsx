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
  return <></>
//   return (
//     <>
//       <div style={adminStyle} className="row">
//         <div className="col-lg-6">
//           <h3>Admission Help</h3>
//           <input style={AdminInputStyle} type="text" placeholder="what Query" />
//           <input
//             style={AdminInputStyle}
//             type="text"
//             placeholder="Name of Faculty"
//           />
//           <input
//             style={AdminInputStyle}
//             type="text"
//             placeholder="Position odf the faculty"
//           />
//           <input
//             style={AdminInputStyle}
//             type="text"
//             placeholder="mail id of the faculty"
//           />
//           <input
//             style={AdminInputStyle}
//             type="text"
//             placeholder="phone number of the faculty"
//           />
//           <br />
//           <button style={AdminBtnStyle}>Add Faculty </button>
//           <AdminLine />
//         </div>

//         <div className="col-lg-6">
//           <h3>Faculties for admission help</h3>

//           <p style={{ fontSize: "22px", margin: "0" }}>
//             <b>KTU - B.Tech Regulation 2019 Revision</b>
//           </p>
//           <p>
//             <ul>
//               <li>BTech 2019 Regulation</li>
//               <li>S1S2 B.Tech (2019) curriculum</li>
//               <li>Detailed Syllabus S1-S2 2019 Revision</li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </>
//   );
}

export default AdminRules;
