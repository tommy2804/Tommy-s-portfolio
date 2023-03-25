import './contact.css';
import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Kube from './kube';

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container style={{ position: 'relative' }}>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a full-stack/ front-end/ back-end role.
          <br /> you have any further questions or just want to say hi, <br />
        </p>

        <Kube />

        <button className="contactbtn" onClick={() => {}}>
          Say Hello
        </button>
        <div className="social-btn-row">
          <button
            onClick={() => {
              window.open('https://wa.me/+972502450899');
            }}
            className="socailmediabtn">
            <FaWhatsapp className="icon" />
          </button>
          <button
            onClick={() => {
              window.open('mailto: tommy.rozenberg6@gmail.com');
            }}
            className="socailmediabtn">
            <SiGmail className="icon" />
          </button>
          <button
            onClick={() => {
              window.open('https://www.linkedin.com/in/tommy-rozenberg/');
            }}
            className="socailmediabtn">
            <FaLinkedinIn className="icon" />
          </button>
        </div>

        <span></span>
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Designed & Built by <span>Tommy</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
