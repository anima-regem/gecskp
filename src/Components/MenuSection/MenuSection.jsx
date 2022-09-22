import React, { useContext } from "react";
import Line from "../Line/Line";
import "../MenuSection/MenuSection.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export const LinkLine = () => {
  return (
    <>
      <div className="link_line"></div>
    </>
  );
};
function MenuSection() {
  const { language } = useContext(LanguageContext);

  const Navigate = useNavigate();

  const MenuLink = {
    textDecoration: "none",
    color: "black",
  };

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
                {language ? "പൂമുഖം" : "Home"}
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
                {language ? "പാഠ്യപദ്ധതി" : "Academics"}
              </p>

              <ul className="dropdown academics_dropdown dropdown_animation">
                <Link style={MenuLink} to={"/courses"}>
                  <li className={language ? "malayalam_link" : ""}>
                    {language ? "കോഴ്‌സുകൾ" : "Courses"}
                  </li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/admission"}>
                  <li>{language ? "പ്രവേശനം" : "Admission"}</li>
                </Link>
                <LinkLine />
                <li>{language ? "നിയമാവലി" : "Rules & Regulations"}</li>
                <LinkLine />
                <Link style={MenuLink} to={"/syllabus"}>
                  <li>{language ? "പാഠ്യപദ്ധതി" : "Syllabus"}</li>
                </Link>
                <LinkLine />
                <li>
                  {language
                    ? "നിർബന്ധിത വെളിപ്പെടുത്തൽ"
                    : "AICTE Mandatory Disclosure"}
                </li>
                <LinkLine />
                <li>
                  {language ? "NIRF 2020 അപേക്ഷ" : "NIRF 2020 Application"}
                </li>
                <LinkLine />
                <Link style={MenuLink} to={"/affliations"}>
                  <li>
                    {language ? "അംഗീകാരങ്ങൾ" : "Affilations & Approvals"}
                  </li>
                </Link>
                <LinkLine />
                <li>IQAC</li>
                <LinkLine />
                <li>{language ? "മുൻനിരക്കാർ" : "KTU Toppers"}</li>
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
                {language ? "ഭരണനിർവഹണം" : "Administrarion"}
              </p>
              <ul className="administration_dropdown dropdown dropdown_animation">
                <li>BoG</li>
                <LinkLine />
                <Link style={MenuLink} to={"/organisational_chart"}>
                  <li>Organizational Chart</li>
                </Link>

                <LinkLine />
                <li>Heads Of Departments</li>
                <LinkLine />
                <Link style={MenuLink} to={"/admin"}>
                  <li>Administrative Offiice</li>
                </Link>
                <LinkLine />
                <li>Complaint Committee</li>
                <LinkLine />
                <li>Continuing Education Cell</li>
                <LinkLine />
                <li>Counselling And Guidance</li>
                <LinkLine />
                <li>Anti Ragging Committee</li>
                <LinkLine />
                <li>Women's Cell</li>
                <LinkLine />
                <li>Grievance Cell</li>
                <LinkLine />
                <li>RTI Act</li>
                <LinkLine />
                <li>Tenders & Quotation</li>
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
                {language ? "വിഭാഗങ്ങൾ" : "Departments"}
              </p>
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
                {language ? "TEQIP" : "TEQIP"}
              </p>
              <ul className="administration_dropdown teqip_dropdown dropdown dropdown_animation">
                <li>BoG</li>
                <LinkLine />
                <li>IDP & GDP</li>
                <LinkLine />
                <li>Academics</li>
                <LinkLine />
                <li>Finance</li>
                <LinkLine />
                <li>Procurement</li>
                <LinkLine />
                <li>Executive</li>
                <LinkLine />
                <li>IIIC</li>
                <LinkLine />
                <li>EAP</li>
                <LinkLine />
                <li>R&D</li>
                <LinkLine />
                <li>Guidelines For Funds</li>
              </ul>
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
                {language ? "പ്രവർത്തനങ്ങൾ" : "Activities"}
              </p>
              <div className="activity_dropdown">
                <ul className="activity_links dropdown_animation">
                  <li>Swachh Bharat Internship</li>
                  <LinkLine />
                  <Link style={MenuLink} to={"/alumini"}>
                    <li>Alumni</li>
                  </Link>
                  <LinkLine />
                  <li>PTA</li>
                  <LinkLine />
                  <li>Students Union</li>
                  <LinkLine />
                  <li>National Service Scheme</li>
                  <LinkLine />
                  <Link style={MenuLink} to={"/ieee"}>
                    <li>IEEE</li>
                  </Link>
                  <LinkLine />
                  <li>TBI Report In VYAVASAYA KERALAM</li>
                </ul>
                <ul className="activity_links dropdown_animation">
                  <li>College Magazine</li>
                  <LinkLine />
                  <li>GECPKD In Media</li>
                  <LinkLine />
                  <li>GECPKD Achievements</li>
                  <LinkLine />
                  <li>Activity Reports</li>
                  <LinkLine />
                  <li>Sports Activity Reports</li>
                  <LinkLine />
                  <li>Gallery</li>
                  <LinkLine />
                  <li>M.Tech Blog</li>
                </ul>
              </div>

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
                {language ? "സൗകര്യങ്ങൾ" : "Facilities"}
              </p>
              <ul className="facilities_dropdown dropdown dropdown_animation">
                <Link style={MenuLink} to={"/datacenter"}>
                  <li>Data Centre</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/library"}>
                  <li>Central Library</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/ccf"}>
                  <li>CCF</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/cce"}>
                  <li>CCE</li>
                </Link>
                <LinkLine />
                <li>IEDC</li>
                <LinkLine />
                <Link style={MenuLink} to={"/tbi"}>
                  <li>TBI</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/bus"}>
                  <li>Transportation Facility</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/smartclass"}>
                  <li>Smart Class Room With WiFi</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/edusat"}>
                  <li>Edusat</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/hostel"}>
                  <li>Hostel</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={"/insurance"}>
                  <li>Insurance Coverage</li>
                </Link>
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
              <ul className="more_dropdown dropdown_animation">
                <Link style={MenuLink} to={"/downloads"}>
                  <li className="more_li">Downloads</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={""}>
                  <li className="more_li">News Letter</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={""}>
                  <li className="more_li">Public Outreach</li>
                </Link>
                <LinkLine />
                <Link style={MenuLink} to={""}>
                  <li className="more_li">Bhoomithra Sena</li>
                </Link>
              </ul>
              <div className="nav_underline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
