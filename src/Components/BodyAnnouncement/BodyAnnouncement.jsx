import React from "react";
import "../BodyAnnouncement/BodyAnnouncement.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function BodyAnnouncement() {
  const BodyAnnouncementLine = () => {
    return (
      <div className="announcementLine">
        <div className="BodyAnnouncementLine"></div>
      </div>
    );
  };
  return (
    <div className="body__announcement">
      <div className="announcement__heading">
        <h2>Announcements</h2>
        <p>
          View all <KeyboardArrowRightIcon className="faculty__icon" />
        </p>
      </div>
      <BodyAnnouncementLine />
      <div className="announcements">
        <div className="announcement">
          <h3>Staff Recruitment | Registrar and Assistant Registrars</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum fermentum urna. Cras tincidunt sodales metus. Vivamus
            condimentum sit amet elit nec lobortis.
          </p>
          <BodyAnnouncementLine />
        </div>
        <div className="announcement">
          <h3>Staff Recruitment | Registrar and Assistant Registrars</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum fermentum urna. Cras tincidunt sodales metus. Vivamus
            condimentum sit amet elit nec lobortis.
          </p>
          <BodyAnnouncementLine />
        </div>
        <div className="announcement">
          <h3>Staff Recruitment | Registrar and Assistant Registrars</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum fermentum urna. Cras tincidunt sodales metus. Vivamus
            condimentum sit amet elit nec lobortis.
          </p>
          <BodyAnnouncementLine />
        </div>
      </div>
    </div>
  );
}

export default BodyAnnouncement;
