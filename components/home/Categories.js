import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
const CategoryData = require("../../JsonData/DB.json");

export default function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });
  return (
    <div>
        <Row className="d-flex justify-content-center mx-0 mt-5">
          {CategoryData.CategoryData.map((data, index) => (
            <Col
              key={data.index}
              className="d-flex justify-content-center"
              // data-aos="zoom-in-up"
              xs="auto"
              md="auto"
              width="auto"
            >
              <Card
                className="categoryCard"
              >
                <Card.Link href={data.redirect_link} >
                  <Card.Img variant="center" src={data.image} alt="brand image" style={{width:"100%"}} />
                </Card.Link>
                <Card.Text style={{textAlign:"center"}}>{data.name}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  );
}