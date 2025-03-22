import React from "react";
import "./features.css"; // Ensure you create a corresponding CSS file for styling
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const CubeGrid = () => {
  const rows = 7;
  const cols = 11;
  let cubeIndex = 1;

  return (
    <>
      <div className="cube-grid-wrapper" style={{ "--c": cols }}>
        <div className="cube-grid-scene">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="cube-grid-container" key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => (
                <div
                  className="cube-grid-cube"
                  key={cubeIndex++}
                  style={{
                    "--i": cubeIndex,
                    "--row": rowIndex + 1,
                    "--col": colIndex + 1,
                  }}
                >
                  <div className="cube-grid-top"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Cards Section with 3D Effect */}
      <Container className="card-container mt-5">
        <Row>
          {[...Array(6)].map((_, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="card-3d">
                <Card className="custom-card">
                  <Card.Body>
                    <Card.Title>Card {index + 1}</Card.Title>
                    <Card.Text>
                      This is a sample description for card {index + 1}.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CubeGrid;
