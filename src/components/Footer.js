import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillHome,
  AiFillProject,
  AiFillInfoCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaCertificate, FaGraduationCap, FaFileAlt } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="8" className="footer-navigation">
          <h4 style={{ color: "white", marginBottom: "20px", fontSize: "1.3em", textAlign: "left" }}>Quick Navigation</h4>
          <Row>
            <Col md="4">
              <ul className="footer-nav-links">
                <li>
                  <Link to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <AiFillHome style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <AiFillInfoCircle style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    About
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="4">
              <ul className="footer-nav-links">
                <li>
                  <Link to="/project" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <AiFillProject style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/certificates" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <FaCertificate style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    Certificates
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="4">
              <ul className="footer-nav-links">
                <li>
                  <Link to="/academic" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <FaGraduationCap style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    Academic
                  </Link>
                </li>
                <li>
                  <Link to="/resume" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                    <FaFileAlt style={{ marginRight: "10px", fontSize: "1.2em" }} />
                    Resume
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md="4" className="footer-body">
        </Col>
      </Row>
      <Row style={{ marginTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
        <Col md="6" className="footer-copywright">
          <h3 style={{ fontSize: "1.1em", margin: "0" }}>Designed and Developed by Uday Chauhan</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/uday-0408"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/new244466666"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/uday-chauhan-866669311"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/uday_chauhan0408"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
