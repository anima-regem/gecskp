import React, { useEffect, useState } from "react";
import { adminStyle } from "./AdminCourse/AdminCourse";
import { AdminInputStyle } from "./AdminAdmission/AdminAdmission";
import { AdminBtnStyle } from "./AdminAdmission/AdminAdmission";
import { adminDataStyle } from "./AdminBannerImages";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { handleDelete } from "./AdminBannerImages";

function AdminUpcommingEvents() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "upcommingEvents"),
      orderBy("created", "desc")
    );
    onSnapshot(q, (QuerySnapshot) => {
      setData(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const [eventName, setEventName] = useState("");
  const [about, setAbout] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState("");

  const types = ["image/jpeg", "image/png"];
  const setImgFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImg(selectedFile);
      setError("");
    } else {
      setImg(null);
      setError("Please choose a png or jpg file");
    }
    console.log(img.name);
  };

  const handleSubmit = (e) => {
    console.log(eventName);
    e.preventDefault();
    const storageRef = ref(storage, `upcommingEvents/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        //setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "upcommingEvents"), {
            imgUrl: downloadURL,
            created: Timestamp.now(),
            eventName: eventName,
            about: about,
            month: month.toUpperCase().slice(0, 3),
            day: day,
          });
        });
      }
    );
  };

  return (
    <div className="row">
      <div style={adminStyle} className="col-lg-6">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="Upcomming Event name"
          />
          <input
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="About the upcomming event"
          />
          <input
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="Month eg:SEP,OCT"
          />
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            style={AdminInputStyle}
            type="text"
            placeholder="Day eg: 19,04 "
          />
          <input onChange={setImgFile} style={AdminInputStyle} type="file" />
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
          <button onClick={handleSubmit} style={AdminBtnStyle}>
            Upload
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <h4>Upcomming Events</h4>

        {data.map((event) => {
          console.log(event);
          return (
            <>
              <div key={event.id} style={adminDataStyle}>
                <h3>{event.data.eventName}</h3>
                <button
                  onClick={() => handleDelete("upcommingEvents", event.id)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AdminUpcommingEvents;
