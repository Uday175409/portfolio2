import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AcademicCard from "./AcademicCard";
import Particle from "../Particle";
// import { ImBooks } from "react-icons/im";

function Academic() {
  const academicData = [
    {
      title: "College Semester 4",
      year: "2025",
      image: require("../../Assets/Academic/sem4.jpeg"),
      description: "Fourth Semester Results",
      score: "9.36",
      scoreType: "SPI"
    },
    {
      title: "College Semester 3",
      year: "2025",
      image: require("../../Assets/Academic/sem3.jpeg"),
      description: "Third Semester Results",
      score: "9.29",
      scoreType: "SPI"
    },
    {
      title: "College Semester 2",
      year: "2024",
      image: require("../../Assets/Academic/sem2.jpeg"),
      description: "Second Semester Results",
      score: "8.74",
      scoreType: "SPI"
    },
    {
      title: "College Semester 1",
      year: "2024",
      image: require("../../Assets/Academic/sem1.jpeg"),
      description: "First Semester Results",
      score: "8.83",
      scoreType: "SPI"
    },
    {
      title: "Class 12 Results",
      year: "2023",
      image: require("../../Assets/Academic/class12.jpeg"),
      description: "Higher Secondary Certificate",
      score: "93.42",
      scoreType: "Percentile"
    },
    {
      title: "Class 10 Results",
      year: "2021",
      image: require("../../Assets/Academic/class10.jpeg"),
      description: "Secondary School Certificate",
      score: "96.47",
      scoreType: "Percentile"
    },
  ];

  return (
    <Container fluid className="academic-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Academic Results</strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are my academic achievements and results from Class 10 to
              College.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {academicData.map((academic, index) => (
            <Col md={4} key={index} className="academic-card">
              <AcademicCard
                title={academic.title}
                year={academic.year}
                image={academic.image}
                description={academic.description}
                score={academic.score}
                scoreType={academic.scoreType}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Academic;
