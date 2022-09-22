import React,{useState} from "react";

function AddImg() {
    const types = ["image/jpeg"];
    const [img,setImg] = useState("")
    const setFile = (e) => {
        let selectedFile = e.target.files[0];
        // if (selectedFile && types.includes(selectedFile.type)) {
        //     setImg(selectedFile);
        // } else {
        //     setImg(null);
        // }
        console.log(selectedFile)
      };
  return (
    <div>
      <input
        onChange={(e) => {
          setFile(e);
        }}
        className="upload_input"
        type="file"
        placeholder="PDF File"
      />
    </div>
  );
}

export default AddImg;
