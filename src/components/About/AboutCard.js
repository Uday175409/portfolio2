import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Uday Ramkyash Chauhan</span>{" "}
            from <span className="purple">Gujarat, India</span>.
            <br />
            I'm currently a{" "}
            <span className="purple">Computer Engineering Student</span> at{" "}
            <span className="purple">LJIET (L.J. Institute of Engineering and Technology)</span>.
            <br />I'm passionate about{" "}
            <span className="purple">Full Stack Development</span> with expertise in{" "}
            <span className="purple">Python Frameworks and React</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Innovative Projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source �
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion, build with purpose!"{" "}
          </p>
          <footer className="blockquote-footer">Uday</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
