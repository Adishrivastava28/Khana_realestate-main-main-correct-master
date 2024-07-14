import React, { useEffect, useState } from "react";
import "./FeaturedProjects.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const ProjectCard = ({
  _id,
  image,
  buildingName,
  price,
  location,
  area,
  bedroom,
}) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/project/${_id}`);
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={buildingName}
        />
        <span className="featured-tag">FEATURED</span>
      </div>
      <div className="project-price">{price}</div>
      <h3 className="project-title">{buildingName}</h3>
      <p className="project-location">{location}</p>
      <div className="project-details">
        <span>AREA</span>
        <span>BEDROOM</span>
        <span>{area}</span>
        <span>{bedroom}</span>
      </div>
      <button className="see-details-btn" onClick={handleSeeDetails}>
        SEE DETAILS
      </button>
    </div>
  );
};

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate the current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getProperty");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the projects", error);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProperty = () => {
    navigate("/addproperty");
  };

  return (
    <div className="featured-projects">
      <h1 className="heading-featured">FEATURED PROJECTS</h1>
      <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="page-btn"
          >
            {number}
          </button>
        ))}
      </div>
      <div className="add-property-btn-container">
        <button className="add-property-btn" onClick={handleAddProperty}>
          Add Property
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
