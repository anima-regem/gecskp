import React, { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import "../MobileMenuLinks/MobileMenuLinks.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MobileMenuLinks() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading mt-5">
              Home
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              Academics <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>{language ? "കോഴ്‌സുകൾ" : "Courses"}</li>
              <li>{language ? "പ്രവേശനം" : "Admission"}</li>
              <li>{language ? "നിയമാവലി" : "Rules & Regulations"}</li>
              <li>{language ? "പാഠ്യപദ്ധതി" : "Syllabus"}</li>
              <li>
                {language
                  ? "നിർബന്ധിത വെളിപ്പെടുത്തൽ"
                  : "AICTE Mandatory Disclosure"}
              </li>
              <li>{language ? "NIRF 2020 അപേക്ഷ" : "NIRF 2020 Application"}</li>
              <li>{language ? "അംഗീകാരങ്ങൾ" : "Affilations & Approvals"}</li>
              <li>IQAC</li>
              <li>{language ? "മുൻനിരക്കാർ" : "KTU Toppers"}</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              {language ? "ഭരണനിർവഹണം" : "Administrarion"}
              <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>BoG</li>
              <li>Organizational Chart</li>
              <li>Heads Of Departments</li>
              <li>Administrative Offiice</li>
              <li>Complaint Committee</li>
              <li>Continuing Education Cell</li>
              <li>Counselling And Guidance</li>
              <li>Anti Ragging Committee</li>
              <li>Women's Cell</li>
              <li>Grievance Cell</li>
              <li>RTI Act</li>
              <li>Tenders & Quotation</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              {language ? "വിഭാഗങ്ങൾ" : "Departments"}
              <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>BoG</li>
              <li>Organizational Chart</li>
              <li>Heads Of Departments</li>
              <li>Administrative Offiice</li>
              <li>Complaint Committee</li>
              <li>Continuing Education Cell</li>
              <li>Counselling And Guidance</li>
              <li>Anti Ragging Committee</li>
              <li>Women's Cell</li>
              <li>Grievance Cell</li>
              <li>RTI Act</li>
              <li>Tenders & Quotation</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              {language ? "പ്രവർത്തനങ്ങൾ" : "Activities"}
              <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>Swachh Bharat Internship</li>
              <li>Alumni</li>
              <li>PTA</li>
              <li>Students Union</li>
              <li>National Service Scheme</li>
              <li>IEEE</li>
              <li>TBI Report In VYAVASAYA KERALAM</li>
              <li>College Magazine</li>
              <li>GECPKD In Media</li>
              <li>GECPKD Achievements</li>
              <li>Activity Reports</li>
              <li>Sports Activity Reports</li>
              <li>Gallery</li>
              <li>M.Tech Blog</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              {language ? "സൗകര്യങ്ങൾ" : "Facilities"}
              <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>Data Centre</li>
              <li>Central Library</li>
              <li>CCF</li>
              <li>CCE</li>
              <li>IEDC</li>
              <li>TBI</li>
              <li>Transportation Facility</li>
              <li>Smart Class Room With WiFi</li>
              <li>Edusat</li>
              <li>Hostel</li>
              <li>Insurance Coverage</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion_heading">
              {language ? "കൂടുതൽ " : "More"}
              <KeyboardArrowDownIcon />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="accordion_menu_list">
              <li>Downloads </li>
              <li>News Letter</li>
              <li>Public Outreach</li>
              <li>Bhoomithra Sena</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default MobileMenuLinks;
