import React from "react";
import "../AdminNewsForm/AdminNewsForm.css";
import { useState } from "react";
import AdminProgressBar from "../AdminProgressBar/AdminProgressBar";
import { db, storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { async } from "@firebase/util";
import { CalendarToday } from "@mui/icons-material";

function AdminNewsForm() {
  const [progresspercent, setProgresspercent] = useState(0);

  const types = ["application/pdf"];
  const setFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setNewsPdfFile(selectedFile);
      setError("");
    } else {
      setNewsPdfFile(null);
      setError("Please choose a Pdf file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `newsPdf/${newsPdfFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, newsPdfFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "news"), {
            englishNews,
            malayalamNews,
            newsFrom,
            pdfURL: downloadURL,
            created: Timestamp.now(),
          });
        });
      }
    );
  };

  const [englishNews, setEnglishNews] = useState("");
  const [malayalamNews, setMalayalamNews] = useState("");
  const [newsFrom, setNewsFrom] = useState("");
  const [newsPdfFile, setNewsPdfFile] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="admin_event_form_section pb-5">
      <div className="row">
        <div className="col-lg-12 news_form">
          <div className="event_form_div">
            <div className="row">
              <div className="col-lg-12">
                <h1>News</h1>
              </div>
              <label className="mt-3" htmlFor="englishHeading">
                News From
              </label>
              <div className="col-lg-12">
                <input
                  value={newsFrom}
                  onChange={(e) => setNewsFrom(e.target.value)}
                  className="news_input"
                  type="text"
                  placeholder="eg: C4"
                />
              </div>
              <label className="mt-3" htmlFor="englishHeading">
                English News
              </label>
              <div className="col-lg-12">
                <textarea
                  onChange={(e) => {
                    setEnglishNews(e.target.value);
                  }}
                  value={englishNews}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Please enter the news in English"
                ></textarea>
              </div>
              <label className="mt-3" htmlFor="englishHeading">
                Malayalam News
              </label>
              <div className="col-lg-12">
                <textarea
                  onChange={(e) => {
                    setMalayalamNews(e.target.value);
                  }}
                  value={malayalamNews}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Please enter the news in Malayalam"
                ></textarea>
              </div>

              <div className="file_upload_section">
                <div className="progressbar_section">
                  <div className="file">
                    <input
                      onChange={(e) => {
                        setFile(e);
                      }}
                      className="upload_input"
                      type="file"
                      placeholder="PDF File"
                    />
                    <p className="news_error mt-2">{error}</p>
                  </div>
                  <div className="news_progress_bar mt-2">
                    {newsPdfFile && (
                      <AdminProgressBar
                        width={progresspercent}
                        newsPdfFile={newsPdfFile}
                        setNewsPdfFile={setNewsPdfFile}
                      />
                    )}
                  </div>
                </div>

                <div className="submit_btn_div">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNewsForm;
