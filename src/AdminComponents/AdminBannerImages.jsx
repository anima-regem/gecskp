import React, { useEffect, useState } from "react";
import { adminStyle } from "./AdminCourse/AdminCourse";
import { AdminInputStyle } from "./AdminAdmission/AdminAdmission";
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

export const handleDelete = async (collection, id) => {
  const taskDocRef = doc(db, collection, id);
  try {
    await deleteDoc(taskDocRef);
  } catch (err) {
    alert(err);
  }
};

export const adminDataStyle = {
  display: "flex",
  gap: "20px",
  backgroundColor: "#d3d3d3",
  padding: "20px",
  marginTop: "15px",
};

function AdminBannerImages() {
  const [adminBannerImg, setAdminBannerImg] = useState([]);
  useEffect(() => {
    const img = query(
      collection(db, "bannerImages"),
      orderBy("created", "desc")
    );
    onSnapshot(img, (QuerySnapshot) => {
      setAdminBannerImg(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //console.log(adminBannerImg);

  const types = ["image/jpeg", "image/png"];
  const setFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setBannerImg(selectedFile);
      setError("");
    } else {
      setBannerImg(null);
      setError("Please choose a png or jpg file");
    }
    console.log(bannerImg.name);
  };
  const [bannerHeading, setBannerHeading] = useState("");
  const [error, setError] = useState("");
  const [bannerImg, setBannerImg] = useState("");
  const [progresspercent,setProgresspercent] = useState(0)
  console.log(progresspercent)

  const handleSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `bannerImg/${bannerImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, bannerImg);
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
          addDoc(collection(db, "bannerImages"), {
            bannerHeading,
            imgUrl: downloadURL,
            created: Timestamp.now(),
          });
        });
      }
    );
  };

  const adminBtnStyle = {
    marginLeft: "10px",
    padding: "5px",
  };
  return (
    <div className="row" style={adminStyle}>
      <div
        className="col-lg-6"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h3>Banner Images</h3>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            padding: "10px",
          }}
        >
          <input
            onChange={(e) => setBannerHeading(e.target.value)}
            value={bannerHeading}
            style={AdminInputStyle}
            type="text"
            placeholder="Banner Heading"
          />
          <input
            onChange={setFile}
            style={AdminInputStyle}
            type="file"
            name="img"
          />
          <p
            style={{
              color: "red",
              marginLeft: "15px",
              marginBottom: "0",
            }}
          >
            {error}
          </p>
          <div style={{
            height:'3px',
            width:{progresspercent},
            background:'red',
            borderRadius:'10px'
          }} className="progress_line"></div>
          <br />
          <button onClick={handleSubmit} style={adminBtnStyle}>
            Upload
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <h2>Images</h2>
        {adminBannerImg.map((img) => {
          return (
            <>
              <div
                style={adminDataStyle}
              >
                <h3>{img.data.bannerHeading}</h3>
                <button onClick={() => handleDelete("bannerImages", img.id)}>
                  delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AdminBannerImages;
