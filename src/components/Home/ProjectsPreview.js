import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../Projects/ProjectCards";
import { BsArrowRight } from "react-icons/bs";

// Import project images
import browsercompiler from "../../Assets/Projects/browsercompiler.png";
import newsWebsite from "../../Assets/Projects/newsWebsite.png";
import jobPortal from "../../Assets/Projects/jobPortal.png";

function ProjectsPreview() {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      imgPath: newsWebsite,
      isBlog: false,
      title: "News Website",
      description: "Full-stack MERN news platform with React + Node.js, featuring JWT authentication, role-based protected routes, nested comments, reading analytics dashboard, gamification with badges and streaks.",
      ghLink: "https://github.com/uday-0408/newswebsite",
      demoLink: "https://news-app-front-end-delta.vercel.app/"
    },
    {
      imgPath: browsercompiler,
      isBlog: false,
      title: "BrowserCompiler",
      description: "Multi-language online code execution platform with Monaco editor, supporting Python, C, C++, and Java. Features secure sandboxed execution using Docker, FastAPI-based execution microservice.",
      ghLink: "https://github.com/Uday175409/BrowserCompiler",
      demoLink: "https://ik.imagekit.io/Uday/videos/videos/browser%20compiler%20project.mp4?tr=orig&updatedAt=1762433805444"
    },
    {
      imgPath: jobPortal,
      isBlog: false,
      title: "Job Connect - Full Stack Job Portal",
      description: "Modern MERN job portal connecting students with recruiters. Features role-based JWT authentication, company/job management, one-click applications, resume uploads via Cloudinary.",
      ghLink: "https://github.com/uday-0408/JP"
    }
  ];

  const handleViewAllProjects = () => {
    navigate('/project');
  };

  return (
    <Container fluid className="projects-preview-section" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "20px" }}>
              Featured <strong className="purple">Projects</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
              Here are some of my recent works that showcase my skills and experience.
            </p>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {featuredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleViewAllProjects}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #623686",
                color: "#623686",
                padding: "12px 30px",
                fontSize: "1.1em",
                fontWeight: "600",
                transition: "all 0.3s ease",
                borderRadius: "5px"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#623686";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#623686";
              }}
            >
              View All Projects <BsArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsPreview;