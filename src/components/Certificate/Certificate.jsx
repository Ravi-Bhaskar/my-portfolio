import React, { useState } from "react";
import "./Certificate.css";
import cert1 from "../../assets/certificates/cert1.jpg";
import cert2 from "../../assets/certificates/cert2.jpg";
import cert3 from "../../assets/certificates/cert3.jpg";

const certificates = [
  { title: "CIBMIT-2022", description: "Designed and developed a responsive, user-friendly website to support CIBMIT-2022, a national-level academic conference organized by college faculty.", image: cert1 },
  { title: "Entrepreneurship Summit 2022", description: "Secured 1st place in the E-Summit 2022 Web Development competition organized by Amity University, Patna.", image: cert2 },
  { title: "Techphilia 5.0", description: "Won 1st place in the Web Development event at Techphilia 5.0, a tech fest hosted by Amity University, Patna.", image: cert3 },
];

const Certificate = () => {

    const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section className="certificate-section" id="certificates">
      <div className="certificate-container">
        <h2><span>My</span> Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => setLightboxImg(cert.image)}
            >
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Certificate Full View" />
            <button onClick={() => setLightboxImg(null)} className="close-btn">✖</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
