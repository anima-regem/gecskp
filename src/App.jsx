import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import HomePage from "./Pages/HomePage/HomePage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import NotFoundPage from "./Pages/NotFoundPage.jsx/NotFoundPage";
import AnnouncementPage from "./Pages/AnnouncementPage/AnnouncementPage";
import { LanguageContext } from "./Context/LanguageContext";
import { useState } from "react";
import AdminPage from "./Pages/AdminPage/AdminPage";
import PdfView from "./Components/PdfView/PdfView";
import pdf from "../src/pdf_files/Circular.pdf";
import DepartmentPage from "./Pages/DepartmentPage/DepartmentPage";
import { departmentStore } from "./Store/DepartmentStore";
import DeptData from "./jsonFiles/HOD.json";
import CoursePage from "../src/Pages/CoursePage/CoursePage";
import SyllabusPage from "../src/Pages/SyllabusPage/SyllabusPage";
import AffliationsAndApprovals from "../src/Pages/AffliationsAndApprovalsPage/AffliationsAndApprovalsPage";
import OrganisationalChartPage from "../src/Pages/OrganisationalChartPage/OrganisationalChartPage";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";
import { PdfContext } from "./Context/PdfContext";
import Gallery from "./Pages/Gallery/Gallery";
import AddImg from "./Components/AddImg/AddImg";
import AdministrativePage from "./Pages/AdministrativePage/AdministrativePage";
import DataCenterPage from "./Pages/DataCenterPage/DataCenterPage";
import AdminContainer from "./Pages/AdminContainer/AdminContainer";
import LibraryPage from "./Pages/LibraryPage/LibraryPage";
import CcfPage from "./Pages/CcfPage/CcfPage";
import CeePage from "./Pages/CeePage/CeePage";
import TbiPage from "./Pages/TbiPage/TbiPage";
import SmartClass from "./Pages/SmartClass/SmartClass";
import Edusat from "./Pages/Edusat/Edusat";
import InsurancePage from "./Pages/InsurancePage/InsurancePage";
import Hostel from "./Pages/Hostel/Hostel";
import BusFacility from "./Pages/BusFacility/BusFacility";
import AluminiPage from "./Pages/AluminiPage/AluminiPage";
import NssPage from "./Pages/NssPage/NssPage";
import IeeePage from "./Pages/IeeePage/IeeePage";
import { Download } from "@mui/icons-material";
import DownloadPage from "./Pages/DownloadPage/DownloadPage";


function App() {
  const [language, setLanguage] = useState(false);
  const setDepartments = departmentStore((state) => state.setDepartments);
  setDepartments(DeptData);

  return (
    <div>
      
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="events" element={<EventPage />} />
              <Route path="announcement" element={<AnnouncementPage />} />
              <Route path="adminpage" element={<AdminContainer />} />
              <Route path={pdf} element={<PdfView />} />
              <Route path={"department/:id"} element={<DepartmentPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path={"organisational_chart"}
                element={<OrganisationalChartPage />}
              />
              <Route path={"/syllabus"} element={<SyllabusPage />} />
              <Route
                path={"/affliations"}
                element={<AffliationsAndApprovals />}
              />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/admin" element={<AdministrativePage/>} />
              <Route path="/datacenter" element={<DataCenterPage/>} />
              <Route path="/library" element={<LibraryPage/>} />
              <Route path="/ccf" element={<CcfPage/>} />
              <Route path="/cce" element={<CeePage/>} />
              <Route path="/tbi" element={<TbiPage/>} />
              <Route path="/smartclass" element={<SmartClass/>} />
              <Route path="/edusat" element={<Edusat/>} />
              <Route path="/insurance" element={<InsurancePage/>} />
              <Route path="/hostel" element={<Hostel/>} />
              <Route path="/bus" element={<BusFacility/>} />
              <Route path="/alumini" element={<AluminiPage/>} />
              <Route path="/nss" element={<NssPage/>} />
              <Route path="/ieee" element={<IeeePage/>} />
              <Route path="/downloads" element={<DownloadPage/>} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      
    </div>
  );
}

export default App;
