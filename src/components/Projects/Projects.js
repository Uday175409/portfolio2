import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import browsercompiler from "../../Assets/Projects/browsercompiler.png";
import newsWebsite from "../../Assets/Projects/newsWebsite.png";
import jobPortal from "../../Assets/Projects/jobPortal.png";
import gadgethub from "../../Assets/Projects/gadgethub.png";
import recipyFinder from "../../Assets/Projects/recipyFinder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsWebsite}
              isBlog={false}
              title="News Website"
              description="Full-stack MERN news platform with React + Node.js, featuring JWT authentication, role-based protected routes, nested comments, reading analytics dashboard, gamification with badges and streaks, and performance optimizations with code splitting."
              ghLink="https://github.com/uday-0408/newswebsite"
              demoLink="https://news-app-front-end-delta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipyFinder}
              isBlog={false}
              title="Recipe Finder"
              description="Quick searchable recipe discovery app that helps users find recipes by ingredient, cuisine, or dietary preference. Features search functionality, dietary filters (vegetarian, vegan, gluten-free), recipe details with nutrition info, and favorite recipes management."
              ghLink="https://github.com/uday-0408/Recipe_finder"
              demoLink="https://recipe-finder-frontend-sooty.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={browsercompiler}
              isBlog={false}
              title="BrowserCompiler"
              description="Multi-language online code execution platform with Monaco editor, supporting Python, C, C++, and Java. Features secure sandboxed execution using Docker, FastAPI-based execution microservice, problem management, and automated test-case validation with submission history tracking."
              ghLink="https://github.com/Uday175409/BrowserCompiler"
              demoLink="https://ik.imagekit.io/Uday/videos/videos/browser%20compiler%20project.mp4?tr=orig&updatedAt=1762433805444"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Connect - Full Stack Job Portal"
              description="Modern MERN job portal connecting students with recruiters. Features role-based JWT authentication, company/job management, one-click applications, resume uploads via Cloudinary, Redux Toolkit state management, and recruiter dashboard for managing applicants."
              ghLink="https://github.com/uday-0408/JP"
              // demoLink="https://job-connect-uday.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gadgethub}
              isBlog={false}
              title="GadgetHub E-Commerce"
              description="Responsive static e-commerce site showcasing product listings and details with modern UI components. Features client-side filtering, interactive product cards, mobile-first design, and enhanced accessibility practices for optimal browsing experience."
              ghLink="https://github.com/uday-0408/GadgetHub"
              demoLink="https://uday-0408.github.io/GadgetHub/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Car Dealership Website"
              description="Static showroom website featuring car inventory with search/filter functionality and detailed vehicle pages. Demonstrates responsive grid systems, accessible markup, cross-device compatibility, and production-like frontend development practices."
              ghLink="https://github.com/uday-0408/Car-dealership"
              // demoLink="https://uday-0408.github.io/Car-dealership/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
