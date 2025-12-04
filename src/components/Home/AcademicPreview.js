import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowRight, BsBook } from "react-icons/bs";

function AcademicPreview() {
  const navigate = useNavigate();

  const handleViewAllAcademic = () => {
    navigate('/academic');
  };

  return (
    <Container fluid className="academic-preview-section" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "30px" }}>
              <BsBook style={{ fontSize: "4em", color: "#623686", marginBottom: "20px" }} />
              <h2 className="project-heading" style={{ marginBottom: "15px" }}>
                <strong className="purple">Academic Results</strong>
              </h2>
              <p style={{ color: "white", fontSize: "1.1em", marginBottom: "30px" }}>
                Check out my academic journey from Class 10 to current college semesters.
              </p>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              onClick={handleViewAllAcademic}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #623686",
                color: "#623686",
                padding: "15px 40px",
                fontSize: "1.2em",
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
              View Academic Results <BsArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AcademicPreview;