import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import hire from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ilsyah</span> <br /> Website Dev
        </span>
        <p className="introPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          corrupt, <br /> ea ducimus ullam amet velit. Inventore, repellat aut?
        </p>
        <Link>
          <button className="btn">
            <img src={hire} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
