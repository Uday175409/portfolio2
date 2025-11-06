import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
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
          </Col>
          <Col md={4} className="myAvtar">
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
