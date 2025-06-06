import Project from "../components/project/Project-footer";
import { projects } from "./../helpers/ProjectsList";
import "./style.css";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Pet-Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              index={index}
              isWide={index === 2} 
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;