import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { ImBooks } from "react-icons/im";
import { BsEye } from "react-icons/bs";

function AcademicCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="academic-card-view">
        <div className="academic-image-container" onClick={handleShow}>
          <img 
            src={props.image} 
            alt={props.title}
            className="academic-result-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="academic-placeholder" style={{display: 'none'}}>
            <ImBooks style={{ fontSize: "3em", color: "#c770f0", marginBottom: "10px" }} />
            <p>Result Image</p>
            <small>Click to view</small>
          </div>
          <div className="academic-overlay">
            <BsEye style={{ fontSize: "2em" }} />
            <span>View Result</span>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="purple">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.year}</Card.Subtitle>
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
          <div className="academic-score">
            <span className="score-label">{props.scoreType}:</span>
            <span className="score-value">{props.score}</span>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img 
            src={props.image} 
            alt={props.title}
            className="modal-result-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}}>
            <ImBooks style={{ fontSize: "4em", color: "#c770f0", marginBottom: "20px" }} />
            <p>Result image not available</p>
            <small>Please add your result image to: src/Assets/Academic/</small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AcademicCard;