
import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, img, index, isWide }) => {
  return (
    <li className={`project ${isWide ? 'project--wide' : ''}`}>
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;