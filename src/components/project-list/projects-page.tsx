import { AiFillGithub } from 'react-icons/ai';
import './projects.css';
import gotype from '../../assets/gotypejs-image.png';
import mysocial from '../../assets/mysocial-image.png';
import ProjectRow from './project-row';
import { Container, Row } from 'react-bootstrap';

function ProjectsPage() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <ProjectRow
              imgPath={gotype}
              isBlog={false}
              title="goTypeJSX"
              description={`This is an interactive coding environment. You can write Javascript, import any NPM modules and see it executed, and write comprehensive documentation using markdown. 
              `}
              ghLink="https://moonlit-pastelito-d6b5af.netlify.app/"
              gtLink="https://github.com/tommy2804/goTypeJsx"
            />
            <ProjectRow
              imgPath={gotype}
              isBlog={false}
              title="goTypeJSX"
              description={`This is an interactive coding environment. You can write Javascript, import any NPM modules and see it executed, and write comprehensive documentation using markdown. 
              `}
              ghLink="https://moonlit-pastelito-d6b5af.netlify.app/"
              gtLink="https://github.com/tommy2804/goTypeJsx"
            />
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ProjectsPage;
