import React from "react";
import "../PdfView/PdfView.css";
import pdf from "../../pdf_files/Circular.pdf";

function PdfView() {
    
  return (
    <div className="pdf_view">
      <div className="pdf_view_section">
        <embed width='100%' className="pdf_frame" src={pdf} type="application/pdf" />
      </div>
    </div>
  );
}

export default PdfView;
