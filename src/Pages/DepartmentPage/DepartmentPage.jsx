import React, { useEffect } from "react";
import Department from "../../Components/Department/Department";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { departmentStore } from "../../Store/DepartmentStore";

function DepartmentPage() {
    const setCurrentDepartment = departmentStore(
        (state) => state.setCurrentDepartment
    );
    let { id } = useParams();
    setCurrentDepartment(Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header isDepartment={true}/>
            <Department />
            <Footer />
        </div>
    );
}

export default DepartmentPage;
