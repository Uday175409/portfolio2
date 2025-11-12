import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsDownload } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      {/* Show preview for course certificates */}
      {props.category === "Course" && (
        <div 
          className="certificate-preview"
          onClick={() => window.open(props.certificatePath, '_blank')}
        >
          <iframe
            src={props.certificatePath}
            title={props.title}
            style={{
              width: "100%",
              height: "200px",
              border: "none",
              borderRadius: "10px 10px 0 0",
              pointerEvents: "none"
            }}
          />
          <div className="preview-overlay">
            <AiOutlineEye size={24} color="white" />
            <span>Click to view full certificate</span>
          </div>
        </div>
      )}
      
      {/* Show preview for participation certificates */}
      {props.category === "Participation" && (
        <div 
          className="certificate-preview"
          onClick={() => window.open(props.certificatePath, '_blank')}
        >
          <iframe
            src={props.certificatePath}
            title={props.title}
            style={{
              width: "100%",
              height: "200px",
              border: "none",
              borderRadius: "10px 10px 0 0",
              pointerEvents: "none"
            }}
          />
          <div className="preview-overlay">
            <AiOutlineEye size={24} color="white" />
            <span>Click to view full certificate</span>
          </div>
        </div>
      )}
      
      <Card.Body>
        <Card.Title style={{ color: "#cd5ff8", fontSize: "1.3em" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "#b83dba", fontSize: "0.9em" }}>
          <strong>Category:</strong> {props.category}
        </Card.Text>
        
        <div className="certificate-buttons">
          <Button
            variant="primary"
            href={props.certificatePath}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px" }}
          >
            <AiOutlineEye /> &nbsp;
            View
          </Button>
          
          <Button
            variant="success"
            href={props.certificatePath}
            download={props.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDownload /> &nbsp;
            Download
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;