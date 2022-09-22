import { ImpDates } from "../Body/Body";
import BodyNews from "../BodyNews/BodyNews";
import "../Department/Department.css";
import { useContext } from "react";
import { DepartmentContext } from "../../Context/DepartmentContext";
import { departmentStore } from "../../Store/DepartmentStore";

export const DepartmentHod = ({  title, hodName, email, mobileno }) => {

  return (
    <>
      <div className="departmentHod_section mt-5">
        <h1>{title}</h1>
        <div className="hod_line_section">
          <div className="hod_line"></div>
        </div>
        <div className="hod_img">
          <img src="/images/principle_img.png" alt="" />
          <h3>{hodName}</h3>
          <p>e-mail : {email}</p>
          <p>Mobile : +91{mobileno}</p>
        </div>
      </div>
    </>
  );
};

export const DepartmentQuickLinks = () => {
  return (
    <>
      <div className="mission_vision_section mt-5">
        <h3>Quick Links</h3>
        <div className="mission_vision_line">
          <div className="line"></div>
        </div>
        <div className="quickLink_list">
          <ul>
            <li>AICTE Mandatory Disclosure</li>
            <li>Placements</li>
            <li>Alumni</li>
            <li>Achievements</li>
            <li>Downloads</li>
            <li>Anti ragging</li>
            <li>Department News</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const DepartmentMissionVision = ({ vision, mission }) => {
  return (
    <>
      <div className="mission_vision_section mt-5 mb-5">
        <h3>Mission</h3>
        <div className="mission_vision_line">
          <div className="line"></div>
        </div>
        <p className="m-3">"{mission}"</p>
        <h3 className="mt-5">Vision</h3>
        <div className="mission_vision_line mb-3">
          <div className="line"></div>
        </div>
        <p className="m-3">{vision}</p>
      </div>
    </>
  );
};

const DepartmentTable = ({ dept }) => {
  return (
    <>
      <div className="col-lg-12 department_table_heading">
        <h3>Courses</h3>
      </div>
      <div className="department_table">
        <table style={{ width: "100%" }}>
          {/* <thead> */}
          <tr>
            <th style={{ width: "60%" }}>Course offered</th>
            <th style={{ width: "20%" }}>Year of starting</th>
            <th style={{ width: "20%" }}>Approved Intake</th>
          </tr>
          {/* </thead> */}
          {/* <tbody> */}
          <tr>
            <td className="text-start">B.Tech in {dept}</td>
            <td>1999</td>
            <td>60 + 6 LET</td>
          </tr>
          <tr>
            <td className="text-start">M.Tech in Computational Linguistics</td>
            <td>2011</td>
            <td>18</td>
          </tr>
          <tr>
            <td className="text-start">PhD in {dept}</td>
            <td>2016</td>
            <td></td>
          </tr>
          {/* </tbody> */}
        </table>
      </div>
    </>
  );
};

function Department() {
  let currentDepartment = departmentStore((state) => state.currentDepartment);

  return (
    <div className="department pb-5">
      <div className="depertment_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 depertment_banner_heading">
              <h1>Department of {currentDepartment.heading}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="col-lg-12">
              <ImpDates />
            </div>
            <div className="col-lg-12 mt-5">
              <DepartmentTable dept={currentDepartment.heading} />
            </div>
            <div className="col-lg-12">
              <DepartmentMissionVision
                vision={currentDepartment.vision}
                mission={currentDepartment.mission1}
              />
            </div>
            <div className="col-lg-12">
              <DepartmentQuickLinks />
            </div>
          </div>
          <div className="col-lg-5 mt-4">
            <div className="col-lg-12">
              <DepartmentHod
              title={"Head of the Department"}
                email={currentDepartment.email}
                hodName={currentDepartment.HodName}
                mobileno={currentDepartment.phone}
              />
            </div>
            <div className="col-lg-12 mt-5">
              <BodyNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
