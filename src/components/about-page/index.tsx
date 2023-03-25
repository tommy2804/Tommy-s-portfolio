import './about.css';
import { Container, Row, Col } from 'react-bootstrap';

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              <span> About Me</span>
            </h3>
            <p className="aboutdetails">
              Hello, I'm Tommy Rozenberg, a junior full-stack developer with a passion for creating
              innovative and intuitive web applications. With almost a year of experience in the
              field, I have honed my skills in a variety of tools and technologies, enabling me to
              create dynamic and responsive websites.
              <br />
              <br />
              In my portfolio, I showcase some of my recent projects, which demonstrate my ability
              to design and develop engaging web applications. Through my work, I have gained
              experience in both client-side and server-side programming, as well as in using
              various frameworks and libraries. As a fast learner and detail-oriented individual, I
              am committed to continually improving my skills and staying up-to-date with the latest
              industry trends.
              <br /> <br /> I am eager to take on new challenges and work collaboratively with
              others to produce high-quality results. If you are interested in working with me or
              have any questions, please feel free to get in touch. I would be delighted to hear
              from you and discuss how I can contribute to your next project.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Redux</li>
                  <li>React Js</li>
                  <li>React Native</li>
                  <li>Git/Github</li>
                </Col>
                <Col md={5}>
                  <li>Material-Ui,Bootsrap,Scss</li>
                  <li>Styled Components</li>
                  <li>Node JS</li>
                  <li>MongoDB</li>
                  <li>Express JS</li>
                  <li>Web Sockets</li>
                  <li>Docker</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
