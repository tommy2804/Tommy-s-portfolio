import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillGithub } from 'react-icons/ai';
import './projects.css';

interface ProjectCardProps {
  imgPath?: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
  gtLink?: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" height="100%" src={props.imgPath} alt="card-img" />}
      <Card.Body style={{ position: 'relative' }}>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>

        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View
        </Button>
        {'\n'}
        {'\n'}
        <div className="github-icon">
          <button
            onClick={() => {
              window.open(props.gtLink);
            }}
            className="github-button">
            <AiFillGithub className="icon" />
          </button>
        </div>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}>
            {'Demo'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
