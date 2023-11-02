import Link from 'next/link';
import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// const PhoneSectionData = require("jsonData/DB.json");
const sportswatchData = require('@/JsonData/DB.json');

export default function sportswatch() {
  return (
    <div>
      {/* <div>
        <Row className=" justify-content-center">
          <Col className="d-flex justify-content-center">
            <div className="phonesection-banner"></div>
          </Col>
        </Row>
      </div> */}
      This is sport watch page.
    </div>
  )
}
