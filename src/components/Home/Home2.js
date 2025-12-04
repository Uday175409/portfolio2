import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { BsArrowRight, BsPerson } from "react-icons/bs";

function Home2() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            {/* Avatar for mobile - shows above text on small screens */}
            <div className="mobile-avatar d-md-none" style={{ textAlign: "center", margin: "30px 0" }}>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "300px" }} />
              </Tilt>
            </div>
            
            <p className="home-about-body">
              I'm a passionate Computer Engineering student at LJIET who loves 
              building scalable web applications and exploring new technologies. 
              I have a strong foundation in full-stack development with a focus 
              on Python backend frameworks and modern frontend technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, Django, FastAPI, Flask, and React.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, REST APIs,{" "}
                </b>
              </i>
              and exploring new ways to create efficient and user-friendly solutions.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python frameworks </b> like{" "}
              <i>
                <b className="purple">Django</b> and{" "}
                <b className="purple">FastAPI</b>, combined with{" "}
                <b className="purple">React.js</b> on the frontend.
              </i>
            </p>
            
            <div style={{ marginTop: "30px" }}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleLearnMore}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #623686",
                  color: "#623686",
                  padding: "12px 30px",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  borderRadius: "8px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#623686";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#623686";
                  e.target.style.transform = "translateY(0px)";
                }}
              >
                <BsPerson style={{ marginRight: "8px", fontSize: "1.2em" }} />
                Learn More About Me
                <BsArrowRight style={{ marginLeft: "8px" }} />
              </Button>
            </div>
          </Col>
          <Col md={4} className="myAvtar d-none d-md-block">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
