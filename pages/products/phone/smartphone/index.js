import Link from 'next/link';
import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// const PhoneSectionData = require("jsonData/DB.json");
const SamrtpohoneData = require('@/JsonData/DB.json');

export default function smartphn() {
  return (
    <div>
      
      <div>
        <Row className="justify-content-md-center mt-5">
          {SamrtpohoneData.CLASSICWATCH.map((data, index) => (
            <Col
              key={data.id}
              className="d-flex justify-content-center"
              md="auto"
            >
              <a href={`smartphone/${data.slug}`}>
              <Card 
                className="productBox"
              >
                {/* <p
                  style={{
                    margin:"0px",
                    backgroundColor: "#FDF192",
                    width: "150px",
                    height: "25px",
                    // color: "white",
                    borderRadius: "15px",
                    alignSelf:"center",
                    fontSize:"12px"                    
                  }}
                >
                  <b>Get Official Product</b>
                </p> */}
                <Card.Img
                  variant="top"
                  style={{
                    height: "225px",
                    width: "225px",
                    alignSelf: "center",
                  }}
                  src={data.pImage}
                />
                <div className="imgeoverly"></div>
                {/* <p
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
                </p> */}
                <Card.Body>
                {/* <div className='b-view'>
                    <Button target="_blank" href={`ipad/${data.slug}`} style={{width:'150px', fontSize:'15px'}} > View Details</Button>
                  </div> */}
                  <Card.Title style={{ fontSize: "15px" }}>
                    {data.name}
                  </Card.Title>
                  <Card.Text>
                    <b>{data.price}</b>
                    
                  </Card.Text>
                  {/* <Link href={`ipad/${data.slug}`}> View More</Link> */}
                </Card.Body>
              </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
