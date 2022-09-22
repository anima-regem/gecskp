import React from "react";
import "../AdminAnnouncementForm/AdminAnnouncementForm.css";

function AdminAnnouncementForm() {
  return (
    <div className="admin_event_form_section pb-5">
      <div className="row">
        <div className="col-lg-12 news_form">
          <div className="event_form_div">
            <div className="row">
              <div className="col-lg-12">
                <h1>Announcements</h1>
              </div>

              <div className="col-lg-7 mt-3">
                <input
                  className="event_heading_form"
                  type="text"
                  placeholder="English Heading"
                />
              </div>

              <div className="col-lg-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="English Paragraph"
                ></textarea>
              </div>

              <div className="col-lg-7 mt-5">
                <input
                  className="event_heading_form"
                  type="text"
                  placeholder="Malayalam Heading"
                />
              </div>

              <div className="col-lg-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Malayalam Paragraph"
                ></textarea>
              </div>

              <div className="submit_btn_div mt-3">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnnouncementForm;
