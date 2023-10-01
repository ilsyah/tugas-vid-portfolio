import React from "react";
import "./skills.css";
import uiDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import appDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesk">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laborum
        distinctio, odio amet accusamus consequatur!
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              illo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
