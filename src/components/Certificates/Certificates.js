import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";

// Course certificates
import exploratoryDataAnalysis from "../../Assets/certificates/course/Exploratory Data Analysis for Machine Learning.pdf";
import inheritanceDataStructures from "../../Assets/certificates/course/Inheritance and Data Structures in Java.pdf";
import introHtmlCssJs from "../../Assets/certificates/course/Introduction to HTML, CSS, & JavaScript.pdf";
import introJava from "../../Assets/certificates/course/Introduction to Java.pdf";

// Participation certificates
import acmTcetCode from "../../Assets/certificates/participation/ACM TCET Code.pdf";
import algoQuiz from "../../Assets/certificates/participation/AlgoQuiz – DSA MCQ Faceoff of CodeClash 2025.pdf";
import codeClash2025 from "../../Assets/certificates/participation/codeclash 2025.pdf";
import codeft5 from "../../Assets/certificates/participation/codeft 5.0.pdf";
import nasaSpaceApps from "../../Assets/certificates/participation/NASA Space Apps Challenge.pdf";
import cssBattle from "../../Assets/certificates/participation/Online Round of CSS Battle.pdf";
import placementApti from "../../Assets/certificates/participation/Quiz Round (on Unstop) of Placement Apti.pdf";

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Simple test function
  const handleButtonClick = (filterType) => {
    console.log("Button clicked:", filterType);
    // alert(`Button clicked: ${filterType}`);
    setActiveFilter(filterType);
  };

  const courseCertificates = [
    {
      title: "Exploratory Data Analysis for Machine Learning",
      description: "Comprehensive course covering data exploration techniques, statistical analysis, and data visualization methods for machine learning projects.",
      category: "Course",
      certificatePath: exploratoryDataAnalysis
    },
    {
      title: "Inheritance and Data Structures in Java",
      description: "Advanced Java programming course focusing on object-oriented programming concepts, inheritance principles, and data structure implementations.",
      category: "Course",
      certificatePath: inheritanceDataStructures
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      description: "Foundational web development course covering frontend technologies including HTML markup, CSS styling, and JavaScript programming.",
      category: "Course",
      certificatePath: introHtmlCssJs
    },
    {
      title: "Introduction to Java",
      description: "Beginner-friendly Java programming course covering core concepts, syntax, and fundamental programming principles.",
      category: "Course",
      certificatePath: introJava
    }
  ];

  const participationCertificates = [
    {
      title: "ACM TCET Code",
      description: "Participated in ACM TCET coding competition, demonstrating problem-solving skills and algorithmic thinking.",
      category: "Participation",
      certificatePath: acmTcetCode
    },
    {
      title: "AlgoQuiz – DSA MCQ Faceoff of CodeClash 2025",
      description: "Participated in data structures and algorithms quiz competition, testing theoretical knowledge and problem-solving abilities.",
      category: "Participation",
      certificatePath: algoQuiz
    },
    {
      title: "CodeClash 2025",
      description: "Participated in CodeClash 2025 programming competition, showcasing coding skills and competitive programming abilities.",
      category: "Participation",
      certificatePath: codeClash2025
    },
    {
      title: "CodeFt 5.0",
      description: "Participated in CodeFt 5.0 hackathon, demonstrating teamwork, innovation, and technical skills in software development.",
      category: "Participation",
      certificatePath: codeft5
    },
    {
      title: "NASA Space Apps Challenge",
      description: "Participated in NASA Space Apps Challenge, working on space-related challenges and developing innovative solutions.",
      category: "Participation",
      certificatePath: nasaSpaceApps
    },
    {
      title: "Online Round of CSS Battle",
      description: "Participated in CSS Battle online competition, demonstrating CSS skills and creative problem-solving in web design.",
      category: "Participation",
      certificatePath: cssBattle
    },
    {
      title: "Quiz Round (on Unstop) of Placement Apti",
      description: "Participated in placement aptitude quiz on Unstop platform, testing analytical and reasoning abilities.",
      category: "Participation",
      certificatePath: placementApti
    }
  ];

  const allCertificates = [...courseCertificates, ...participationCertificates];

  // Filter certificates based on active filter
  const filteredCertificates = () => {
    console.log("Current active filter:", activeFilter);
    if (activeFilter === "course") {
      console.log("Showing course certificates:", courseCertificates.length);
      return courseCertificates;
    } else if (activeFilter === "participation") {
      console.log("Showing participation certificates:", participationCertificates.length);
      return participationCertificates;
    }
    console.log("Showing all certificates:", allCertificates.length);
    return allCertificates;
  };

  return (
    <Container fluid className="project-section">
      {/* <Particle /> - TEMPORARILY DISABLED FOR TESTING */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my achievements and certificates from various courses and competitions.
        </p>
        
        {/* Debug State Display */}
        {/* <p style={{ color: "yellow", textAlign: "center", fontSize: "14px" }}>
          Current Filter: {activeFilter} | Showing {filteredCertificates().length} certificates
        </p> */}
        
        {/* Filter Buttons - FIXED WITH Z-INDEX */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          position: "relative",
          zIndex: 1000
        }}>
          <h3 style={{ color: "white", marginBottom: "20px" }}>Filter Certificates</h3>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "15px", 
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1001
          }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("ALL BUTTON CLICKED!");
                // alert("All button clicked!");
                handleButtonClick("all");
              }}
              style={{
                padding: "12px 24px",
                backgroundColor: activeFilter === "all" ? "#6f42c1" : "transparent",
                color: activeFilter === "all" ? "white" : "#6f42c1",
                border: "2px solid #6f42c1",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                minWidth: "200px",
                position: "relative",
                zIndex: 1002,
                pointerEvents: "auto"
              }}
            >
              All Certificates ({allCertificates.length})
            </button>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("COURSE BUTTON CLICKED!");
                // alert("Course button clicked!");
                handleButtonClick("course");
              }}
              style={{
                padding: "12px 24px",
                backgroundColor: activeFilter === "course" ? "#6f42c1" : "transparent",
                color: activeFilter === "course" ? "white" : "#6f42c1",
                border: "2px solid #6f42c1",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                minWidth: "200px",
                position: "relative",
                zIndex: 1002,
                pointerEvents: "auto"
              }}
            >
              Course Certificates ({courseCertificates.length})
            </button>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("PARTICIPATION BUTTON CLICKED!");
                // alert("Participation button clicked!");
                handleButtonClick("participation");
              }}
              style={{
                padding: "12px 24px",
                backgroundColor: activeFilter === "participation" ? "#6f42c1" : "transparent",
                color: activeFilter === "participation" ? "white" : "#6f42c1",
                border: "2px solid #6f42c1",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                minWidth: "220px",
                position: "relative",
                zIndex: 1002,
                pointerEvents: "auto"
              }}
            >
              Participation Certificates ({participationCertificates.length})
            </button>
          </div>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredCertificates().map((certificate, index) => (
            <Col md={4} className="project-card" key={`${certificate.category}-${certificate.title}-${index}`}>
              <CertificateCard
                title={certificate.title}
                description={certificate.description}
                category={certificate.category}
                certificatePath={certificate.certificatePath}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;