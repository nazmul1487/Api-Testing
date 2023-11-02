import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
const PhoneSectionData = require("../../JsonData/DB.json");

export default function PhoneSection() {
  return (
    <div>
      <div>
        <Row className=" justify-content-center">
          <Col className="d-flex justify-content-center">
            <div className="phonesection-banner"></div>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="justify-content-md-center">
          {PhoneSectionData.PhoneSectionData.map((data, index) => (
            <Col
              key={data.id}
              className="d-flex justify-content-center"
              md="auto"
            ><a href={`products/iphone/${data.slug}`}>
              <Card 
                className="productBox"
              >
                <p
                  style={{
                    margin:"0px",
                    backgroundColor: "#FDF192",
                    width: "80px",
                    height: "30px",
                    // color: "white",
                    borderRadius: "10px",
                    alignSelf:"self-end"
                    
                  }}
                >
                  <b>- 20%</b>
                </p>
                
                <Card.Img 
                  variant="top"
                  style={{
                    height: "260px",
                    width: "260px",
                    alignSelf: "center",
                  }}
                  src={data.pImage}
                />
                <div className="imgeoverly"></div>
                <p
                  style={{
                    margin:"0px",
                    backgroundColor: "black",
                    width: "120px",
                    color: "white",
                    borderRadius: "10px",
                    placeSelf: "center",
                  }}
                >
                  
                  <b>{data.emiOffer}</b>
                </p>
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    {data.name}
                  </Card.Title>
                  <Card.Text>
                    <b>{data.price}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
              </a >
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
