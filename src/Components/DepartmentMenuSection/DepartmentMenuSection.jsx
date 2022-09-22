import React from "react";
import { useNavigate } from "react-router";
import "../DepartmentMenuSection/DepartmentMenuSection.css";
import { LinkLine } from "../MenuSection/MenuSection";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

function DepartmentMenuSection() {
  const Navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  return (
    <div className="menu_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 navigation_menu">
            <div className="menu_para_div">
              <p
                onClick={() => {
                  Navigate("/");
                }}
                className={
                  language
                    ? "menu-para-link home_link malayalam_link"
                    : "menu-para-link home_link"
                }
              >
                {language ? "Objectives" : "Objectives"}
              </p>
              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link academics_link malayalam_link"
                    : "menu-para-link academics_link"
                }
              >
                {language ? "Faculty" : "Faculty"}
              </p>

              <ul className="dropdown faculty_dropdown dropdown_animation">
                <li className={language ? "malayalam_link" : ""}>
                  {language ? "Teaching Staff" : "Teaching Staff"}
                </li>
                <LinkLine />
                <li>{language ? "Technical Staff" : "Technical Staff"}</li>
              </ul>

              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link administration_links malayalam_link"
                    : "menu-para-link administration_links"
                }
              >
                {language ? "Links" : "Links"}
              </p>
              <ul className="administration_dropdown links_dropdown dropdown dropdown_animation">
                <li>Advisory Board</li>
                <LinkLine />
                <li>Research</li>
                <LinkLine />
                <li>Publications</li>
                <LinkLine />
                <li>Activities</li>
                <LinkLine />
                <li>Achievements</li>
                <LinkLine />
                <li>Placement</li>
                <LinkLine />
                <li>Eminent Alumni</li>
              </ul>
              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link departments_link malayalam_link"
                    : "menu-para-link departments_link"
                }
              >
                {language ? "Facilities" : "Facilities"}
              </p>

              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link activities_link malayalam_link"
                    : "menu-para-link activities_link"
                }
              >
                {language ? "Gallery" : "Gallery"}
              </p>

              <ul className="facilities_dropdown dep_facilities dropdown dropdown_animation">
                <li>Lab</li>
              </ul>
              

              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link facilities_links malayalam_link"
                    : "menu-para-link facilities_links"
                }
              >
                {language ? "Downloads" : "Downloads"}
              </p>
              <ul className="facilities_dropdown dep_downloads dropdown dropdown_animation">
                <li>Downloads</li>
                <LinkLine />
                <li>News Letter</li>
              </ul>
              <div className="nav_underline"></div>
            </div>
            <div className="menu_para_div">
              <p
                className={
                  language
                    ? "menu-para-link more_link malayalam_link"
                    : "menu-para-link more_link"
                }
              >
                {language ? "കൂടുതൽ " : "More"}
                <i className="fa-solid fa-chevron-right nav_link_icon"></i>
              </p>
              <div className="nav_underline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentMenuSection;
