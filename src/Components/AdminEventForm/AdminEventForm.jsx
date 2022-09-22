import React from "react";
import "../AdminEventForm/AdminEventForm.css";

function AdminEventForm() {
  return (
    <div className="admin_event_form_section pb-5">
        <div className="row">
          <div className="col-lg-12 news_form">
            <div className="event_form_div">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Events</h1>
                </div>
                <div className="col-lg-12 mt-3">
                  <input
                    className="event_heading_form"
                    type="text"
                    placeholder="Event Heading"
                  />
                </div>
                <div className="col-lg-12 mt-3">
                  <input
                    className="event_heading_form"
                    type="text"
                    placeholder="Event Time (09:00 AM | JUN 13, 2022)"
                  />
                </div>
                <div className="col-lg-12 mt-3 cover_img_upload_section">
                  <div className="cover_img_upload">
                    <label className="event_cover_label" htmlFor="file">
                      Upload a Cover Image
                    </label>
                    <input
                      className="announcement_heading_form"
                      type="file"
                      placeholder="Event Time (09:00 AM | JUN 13, 2022)"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="About the Event"
                  ></textarea>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="images_upload_section">
                    <label className="events_images_label" htmlFor="images">
                      Upload some images of the Event
                    </label>
                    <div className="upload_section">
                      <input type="file" />
                      <input type="file" />
                      <input type="file" />
                      <input type="file" />
                    </div>
                  </div>
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

export default AdminEventForm;
