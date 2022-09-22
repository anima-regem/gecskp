import React,{useState,useEffect} from "react";
import { AdminInputStyle } from "./AdminAdmission/AdminAdmission";
import { AdminBtnStyle } from "./AdminAdmission/AdminAdmission";
import { adminStyle } from "./AdminCourse/AdminCourse";
import { adminDataStyle } from "./AdminBannerImages";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { db,storage } from "../firebase";
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

function AdminGallery() {

    const [data, setData] = useState([]);
    useEffect(() => {
      const q = query(
        collection(db, "Gallery"),
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
    // console.log(data)

    const [heading,setHeading] = useState('')
    const[img,setImg] = useState('')
    const [error,setError] = useState('')
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
        e.preventDefault();
        const storageRef = ref(storage, `Gallery/${img.name}`);
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
              addDoc(collection(db, "Gallery"), {
                imgUrl: downloadURL,
                created: Timestamp.now(),
                heading
              });
            });
          }
        );
      };

  return (
    <div className="row">
      <div style={adminStyle} className="col-lg-6">
        <h3>Gallery</h3>
        <input
          style={AdminInputStyle}
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
          type="text"
          placeholder="Image heading"
        />
        <input onChange={setImgFile} style={AdminInputStyle} type="file" />
        <p style={{
            color:'red'
        }}>{error}</p>
        <br />
        <button onClick={handleSubmit} style={AdminBtnStyle}>Upload</button>
      </div>
      <div className="col-lg-6">
        <h3>Gallery Images</h3>
        {data.map(img => {
            return(
                <>
                
        <div style={adminDataStyle}>
          <h4>{img.data.heading}</h4>
          <button onClick={() => handleDelete('Gallery',img.id)}>Delete</button>
        </div>
                </>
            )
        })}
      </div>
    </div>
  );
}

export default AdminGallery;
