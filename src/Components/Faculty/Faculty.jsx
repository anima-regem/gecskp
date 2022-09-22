import React from "react";
import "../Faculty/Faculty.css";
import HODdetails from "../../jsonFiles/HOD.json";
import { useNavigate } from "react-router";
import { DepartmentContext } from "../../Context/DepartmentContext";
import DepartmentPage from "../../Pages/DepartmentPage/DepartmentPage";
import { useState } from "react";
import Department from "../Department/Department";
import { Link } from "react-router-dom";
import { departmentStore } from "../../Store/DepartmentStore";

function Faculty() {
    const departments = departmentStore((state) => state.departments);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`department/${id}`);
    };
    return (
        <>
            <div className="faculty_section">
                {/* <Link to={"department"}> */}
                <div className="hod_card">
                    {departments.map((details) => (
                        <div
                            key={details.id}
                            onClick={() => handleClick(details.id)}
                            className="hod_box"
                        >
                            <img src={details.image} alt="" />
                            <div className="hod_details">
                                <h3>{details.name}</h3>
                                <h4>HOD</h4>
                                <p>{details.department}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* </Link> */}
            </div>
        </>
    );
}

export default Faculty;
