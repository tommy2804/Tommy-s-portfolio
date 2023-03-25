import './projects.css';
import ProjectCard from './project-card';
import { Container, Col } from 'react-bootstrap';
import gotype from '../../assets/gotypejs-image.png';
import mysocial from '../../assets/mysocial-image.png';
import cityhero from '../../assets/cityhero-imgae.png';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container className="project-contain">
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cityhero}
              isBlog={false}
              title="city-hero"
              description={`City-Hero is a full-stack project consisting of two React Native apps and a React website. The apps allow citizens to report municipal issues, with an easy-to-use interface for submitting photos and comments. The website provides real-time data on reports made by citizens, with their location and status.
              The project's key feature is a map that displays the location of all inspectors, allowing officials to assign the closest inspector to the site for quick resolution. City-Hero has successfully improved communication between citizens and officials, creating a more efficient and effective system for problem-solving in the city.
              \n \r \b \t \v \f \0 \x0B \u000B 
              password: 123123,
              email: admin123@gmail.com`}
              ghLink="https://cityhero-muncipality.netlify.app/"
              gtLink="https://github.com/tommy2804/city-hero"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gotype}
              isBlog={false}
              title="goTypeJSX"
              description={`This is an interactive coding environment. You can write Javascript, import any NPM modules and see it executed, and write comprehensive documentation using markdown. 
             `}
              ghLink="https://moonlit-pastelito-d6b5af.netlify.app/"
              gtLink="https://github.com/tommy2804/goTypeJsx"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={mysocial}
              isBlog={false}
              title="my-social"
              description={`this is my small version of a social media app i made. this app is mobile responsive and have variety of social media features, including socket.io for message delivery \n \r \b \t \v \f \0 \x0B \u000B 
              password: 123123,
              email: admin123@gmail.com`}
              ghLink="https://tommys-social.netlify.app/"
            />
          </Col>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
