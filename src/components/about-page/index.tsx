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
              Hi, I'm Tommy Rozenberg, a 23-year-old freelancer fullstack developer from Israel. I'm
              passionate about coding and creating exceptional digital experiences. With expertise
              in a range of programming languages and frameworks, I'm always seeking new challenges
              and opportunities to grow my skills. Let's work together to bring your digital ideas
              to life.
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
