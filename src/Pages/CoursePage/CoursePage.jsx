import React from "react";
import "../CoursePage/CoursePage.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";
import courses from "../../jsonFiles/courses.json";
import { useNavigate } from "react-router";

const CourseSection = ({ title, details }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="course__wrapper">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-12 course__heading">
              <h1>{title}</h1>
            </div>
            {details.map((course) => {
              return (
                <div
                  key={course.url}
                  className="col-lg-6 col-md-6 col-12 course__card__section"
                >
                  <div
                    onClick={() => navigate(course.url)}
                    className="course__card"
                  >
                    <div className="course__card__details">
                      <h1>{course.title}</h1>
                      <div className="course_line_section">
                        <div className="course_line"></div>
                      </div>
                      <p>{course.description}</p>
                      <p
                        onClick={() => navigate(course.url)}
                        className="more_link"
                      >
                        more
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

function CoursePage() {
  return (
    <div>
      <Header isDepartment={false}/>
      <CommonBanner title={"Courses"} />
      <CourseSection title={courses.ugtitle} details={courses.ug} />
      <CourseSection title={courses.pgtitle} details={courses.pg} />
      <CourseSection title={courses.phdtitle} details={courses.phd} />
      <Footer />
    </div>
  );
}

export default CoursePage;
