import React from "react";
// import AdminAnnouncementForm from "../../Components/AdminAnnouncementForm/AdminAnnouncementForm";
// import AdminNewsForm from "../../Components/AdminNewsForm/AdminNewsForm";
import "../AdminPage/AdminPage.css";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import AdminEventForm from "../../Components/AdminEventForm/AdminEventForm";
// import AdminData from "../../Components/AdminData/AdminData";
import AdminCourse from "../../AdminComponents/AdminCourse/AdminCourse";
import AdminAdmission from "../../AdminComponents/AdminAdmission/AdminAdmission";
import AdminBannerImages from "../../AdminComponents/AdminBannerImages";
import AdminUpcommingEvents from "../../AdminComponents/AdminUpcommingEvents";
import AdminAdministration from "../../AdminComponents/AdminAdministration";
import AdminGallery from "../../AdminComponents/AdminGallery";
import AdminRules from "../../AdminComponents/AdminRules"
import AdminAff from "../../AdminComponents/AdminAff"
import AdminIQAC from "../../AdminComponents/AdminIQAC"
import AdminNIRF from "../../AdminComponents/AdminNIRF"
import AdminToppers from "../../AdminComponents/AdminToppers"
import AdminSyllabus from "../../AdminComponents/AdminSyllabus"
import AdminAICTE from "../../AdminComponents/AdminAICTE"


function AdminPage() {
  const [adminFormStatus, setAdminFormStatus] = useState("banner");

  return (
    <>
      <div className="admin_page_body">
        <div className="row">
          <div className="col-lg-3">
            <p
              className={
                adminFormStatus === "banner" ? "adminParaBold" : "normal"
              }
              onClick={() => setAdminFormStatus("banner")}
            >
              Banner Images
            </p>
            <p
              className={
                adminFormStatus === "upcomming" ? "adminParaBold" : "normal"
              }
              onClick={() => setAdminFormStatus("upcomming")}
            >
              Upcomming Events
            </p>
            <p
              className={
                adminFormStatus === "gallery" ? "adminParaBold" : "normal"
              }
              onClick={() => setAdminFormStatus("gallery")}
            >
              Gallery
            </p>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Academics</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="admin_accor_para">
                  <p
                    className={adminFormStatus === "course" ? "bold" : "normal"}
                    onClick={() => setAdminFormStatus("course")}
                  >
                    Courses
                  </p>
                  <p
                    className={
                      adminFormStatus === "admission" ? "bold" : "normal"
                    }
                    onClick={() => setAdminFormStatus("admission")}
                  >
                    Admission
                  </p>
                  <p
                    className={adminFormStatus === "rules" ? "bold" : "normal"}
                    onClick={() => setAdminFormStatus("rules")}
                  >
                    Rules & Regulation
                  </p>
                  <p
                    className={
                      adminFormStatus === "syllabus" ? "bold" : "normal"
                    }
                    onClick={() => setAdminFormStatus("syllabus")}
                  >
                    Syllabus
                  </p>
                  <p
                    className={adminFormStatus === "aicte" ? "bold" : "normal"}
                    onClick={() => setAdminFormStatus("aicte")}
                  >
                    AICTE Mandatory Disclosure
                  </p>
                  <p
                    className={
                      adminFormStatus === "affliation" ? "bold" : "normal"
                    }
                    onClick={() => setAdminFormStatus("affliation")}
                  >
                    Affilations & Approvals
                  </p>
                  <p
                    className={adminFormStatus === "nirf" ? "bold" : "normal"}
                    onClick={() => setAdminFormStatus("nirf")}
                  >
                    NIRF 2020 Application
                  </p>
                  <p
                    className={adminFormStatus === "iqac" ? "bold" : "normal"}
                    onClick={() => setAdminFormStatus("iqac")}
                  >
                    IQAC
                  </p>
                  <p
                    className={
                      adminFormStatus === "toppers" ? "bold" : "normal"
                    }
                    onClick={() => setAdminFormStatus("toppers")}
                  >
                    KTU Toppers
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Administration</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="admin_accor_para">
                  <p>BoG</p>
                  <p>Organizational Chart</p>
                  <p>Heads Of Departments</p>
                  <p
                    className={
                      adminFormStatus === "admin" ? "bold" : "normal"
                    }
                    onClick={() => setAdminFormStatus("admin")}
                  >
                    Administrative Offiice
                  </p>
                  <p>Complaint Committee</p>
                  <p>Continuing Education Cell</p>
                  <p>Tenders & Quotations</p>
                  <p>Counselling And Guidance</p>
                  <p>Anti Ragging Committee</p>
                  <p>Women's Cell</p>
                  <p>Grievance Cell</p>
                  <p>RTI Act</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-lg-9">
            {adminFormStatus === "course" && <AdminCourse />}
            {adminFormStatus === "admission" && <AdminAdmission />}
            {adminFormStatus === "banner" && <AdminBannerImages />}
            {adminFormStatus === "upcomming" && <AdminUpcommingEvents />}
            {adminFormStatus === "admin" && <AdminAdministration/>}
            {adminFormStatus === "gallery" && <AdminGallery/>}
            {adminFormStatus === 'rules' && <AdminRules/>}
            {adminFormStatus === 'syllabus' && <AdminSyllabus/>}
            {adminFormStatus === 'aicte' && <AdminAICTE/>}
            {adminFormStatus === 'affiliations' && <AdminAff/>}
            {adminFormStatus === 'nirf' && <AdminNIRF/>}
            {adminFormStatus === 'iqac' && <AdminIQAC/>}
            {adminFormStatus === 'toppers' && <AdminToppers/>}



          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
