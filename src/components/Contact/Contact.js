import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import img1 from "../../assets/walmart.png";
import img2 from "../../assets/microsoft.png";
import img3 from "../../assets/adobe.png";
import img4 from "../../assets/facebook.png";
import icon1 from "../../assets/facebook-icon.png";
import icon2 from "../../assets/twitter.png";
import icon3 from "../../assets/instagram.png";
import icon4 from "../../assets/youtube.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58w4kmh",
        "template_l6irttk",
        form.current,
        "Ase0-1z19RAtp-8dD"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesk">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          aperiam quia nesciunt, sapiente sint accusantium.
        </p>
        <div className="clientImgs">
          <img src={img1} alt="client" className="clientImg" />
          <img src={img2} alt="client" className="clientImg" />
          <img src={img3} alt="client" className="clientImg" />
          <img src={img4} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesk">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          odio aperiam iusto. Adipisci cum beatae optio ipsam.
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Kirim
          </button>
          <div className="links">
            <img src={icon1} alt="icon" className="link" />
            <img src={icon2} alt="icon" className="link" />
            <img src={icon3} alt="icon" className="link" />
            <img src={icon4} alt="icon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
