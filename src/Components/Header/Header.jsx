import React, { useContext } from "react";
import "../Header/Header.css";
import { useState } from "react";
import Logo from "../Logo/Logo";
import MenuSection from "../MenuSection/MenuSection";
import { LanguageContext } from "../../Context/LanguageContext";
import { useSpring, animated } from "react-spring";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import MobileMenuLinks from "../MobileMenuLinks/MobileMenuLinks";
import Line from "../Line/Line";
import DepartmentMenuSection from "../DepartmentMenuSection/DepartmentMenuSection";

function Header({isDepartment}) {
  const Mobilesearch = ({ setMobilesearch, mobilesearch }) => {
    return (
      <>
        <div className="mobile_search">
          <input type="text" placeholder="Search on GEC" />
          <CloseIcon
            onClick={() => setMobilesearch(!mobilesearch)}
            style={{
              fontSize: "14px",
              position: "absolute",
              right: "5px",
              top: "10px",
              color: "black",
            }}
          />
        </div>
      </>
    );
  };
  const [mobileSearch, setMobilesearch] = useState(true);
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const MobileMenu = ({ menuState }) => {
    const mobileBackgroundAnimation = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
    const mobileMenuAnimation = useSpring({
      from: { opacity: 0, position: "absolute", right: "-75%" },
      to: { opacity: 1, right: "0" },
    });

    return (
      <>
        <animated.div
          style={mobileBackgroundAnimation}
          className="mobile_menu_section"
        >
          <div
            onClick={() => menuState.setMobileMenu(!menuState.mobileMenu)}
            className="mobile_menu_left"
          ></div>
          <animated.div style={mobileMenuAnimation} className="mobile_menu">
            <div className="mobile_menu_icons">
              <div>
                {mobileSearch ? (
                  <SearchIcon
                    style={{ marginTop: "8px" }}
                    onClick={() => setMobilesearch(!mobileSearch)}
                  />
                ) : (
                  <Mobilesearch
                    mobileSearch={mobileSearch}
                    setMobilesearch={setMobilesearch}
                  />
                )}
              </div>
              <div
                onClick={() => menuState.setMobileMenu(!menuState.mobileMenu)}
              >
                {mobileSearch ? (
                  <CloseIcon style={{ marginTop: "5px" }} />
                ) : (
                  <SearchIcon style={{ marginTop: "5px" }} />
                )}
              </div>
            </div>
            <MobileMenuLinks />
            <div className="mobile_menu_heading">
              <h2>
                Government Engineering College, Palakkad, Sreekrishnapuram
              </h2>
              <p>
                Under Section 2(f) of UGC Act 1956 (Approved by AICTE &
                Affiliated to APJ Abdul Kalam Technical University)
              </p>
            </div>
          </animated.div>
        </animated.div>
      </>
    );
  };

  const SearchInput = () => {
    return (
      <animated.div className="search_input">
        <input
          className="header_search_box"
          type="text"
          placeholder="Search on gecskp"
        />
        <i onClick={showSearchBox} id="close_btn" class="fa-solid fa-xmark"></i>
      </animated.div>
    );
  };

  const CampusLogin = () => {
    return (
      <>
        <a href="https://gecskp.etlab.in/user/login">
          <button className={language ? "malayalam_login_btn" : "login_btn"}>
            {language ? "ക്യാമ്പസ്  ലോഗിൻ" : "Campus Login"}
          </button>
        </a>
      </>
    );
  };

  const [searchBox, setSearchBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const showSearchBox = () => {
    setSearchBox(!searchBox);
  };

  return (
    <div className="header">
      <div className="header_section">
        <div className="red_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-end">
                <button
                  onClick={() => {
                    setLanguage(!language);
                  }}
                  className={
                    language ? "language_btn " : "language_btn malayalam_btn"
                  }
                >
                  {language ? "English" : "മലയാളം"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-10">
              <Logo />
              <div className="header_logo_section"></div>
            </div>
            <div className="col-lg-6 col-md-2 col-2">
              <div className="search_section text-end">
                {searchBox ? <SearchInput /> : null}

                <button onClick={showSearchBox} className="header_search_btn">
                  <img src="/images/search.svg" alt="" />
                </button>

                {searchBox ? null : <CampusLogin />}
              </div>
              <div
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
                className="menu_button_section"
              >
                <div className="header_menuButton_div">
                  <i className="fa-solid fa-bars header_menuButton"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header_line"></div>
        </div>
        {isDepartment ? <DepartmentMenuSection/> : <MenuSection /> }
      </div>

      {mobileMenu ? (
        <MobileMenu menuState={{ mobileMenu, setMobileMenu }} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
