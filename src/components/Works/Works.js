import React from "react";
import "./works.css";
import img1 from "../../assets/portfolio-1.png";
import img2 from "../../assets/portfolio-2.png";
import img3 from "../../assets/portfolio-3.png";
import img4 from "../../assets/portfolio-4.png";
import img5 from "../../assets/portfolio-5.png";
import img6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesk">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nam
        eum?
      </span>
      <div className="worksImgs">
        <img src={img1} alt="galeri" className="worksImg" />
        <img src={img2} alt="galeri" className="worksImg" />
        <img src={img3} alt="galeri" className="worksImg" />
        <img src={img4} alt="galeri" className="worksImg" />
        <img src={img5} alt="galeri" className="worksImg" />
        <img src={img6} alt="galeri" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
