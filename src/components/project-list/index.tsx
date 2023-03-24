import './projects.css';
import ProjectCard from './project-card';
import { Container, Row, Col } from 'react-bootstrap';
import gotype from '../../assets/gotypejs-image.png';
import mysocial from '../../assets/mysocial-image.png';
// import netfliximage from '../../Assets/React-App-netflix-clone.png'
// import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
// import charlespizza from '../../Assets/Charlestown-Pizza.png'
// import todolist from '../../assets/todolist.png';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4} className="project-card">
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

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mysocial}
                isBlog={false}
                title="my-social"
                description="this is my small version of a social media app i made. this app is mobile responsive and have variety of social media features, including socket.io for message delivery"
                ghLink="https://tommys-social.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={netfliximage}
                isBlog={false}
                title="city-hero"
                description="City-Hero is a full-stack project consisting of two React Native apps and a React website. The apps allow citizens to report municipal issues, with an easy-to-use interface for submitting photos and comments. The website provides real-time data on reports made by citizens, with their location and status.

                The project's key feature is a map that displays the location of all inspectors, allowing officials to assign the closest inspector to the site for quick resolution. City-Hero has successfully improved communication between citizens and officials, creating a more efficient and effective system for problem-solving in the city."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
                gtLink="https://github.com/tommy2804/city-hero"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
