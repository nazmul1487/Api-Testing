import Link from 'next/link';
import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from 'axios';

import Carousel from "react-bootstrap/Carousel";
// const PhoneSectionData = require("jsonData/DB.json");
const ChargerbasicData = require('@/JsonData/DB.json');

export default function Chargerbasic({pdata}) {
  return (
    <div>
      {/* <div>
        <Row className=" justify-content-center">
          <Col className="d-flex justify-content-center">
            <div className="phonesection-banner"></div>
          </Col>
        </Row>
      </div> */}
      <div>
        <Row className="justify-content-md-center mt-5">
          {pdata.data.map((data, index) => (
            <Col
              key={data.index}
              className="d-flex justify-content-center"
              md="auto"
            >
              <a href={`charger/${data.id}`} >
              <Card 
                className="productBox"
                // style={{
                //   backgroundColor: "#CDCACA",
                //   width: "16rem",
                //   textAlign: "center",
                //   color: "black",
                //   margin: "0px 10px 20px 10px",
                //   borderRadius: "10px",
                //   border: 0,
                // }}
              >
                <p
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
                </p>
                <Card.Img
                  variant="top"
                  style={{
                    height: "220px",
                    width: "220px",
                    alignSelf: "center",
                  }}
                  src={data.defaultPictureModel.imageUrl}
                />
                
                <div className="imgeoverly"></div>
                <hr />
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
                  {/* <b>{data.emiOffer}</b> */}
                </p>
                <Card.Body style={{padding:0}}>
                {/* <div className='b-view'>
                    <Button target="_blank" href={`ipad/${data.slug}`} style={{width:'150px', fontSize:'15px'}} > View Details</Button>
                  </div> */}
                  <Card.Title style={{ fontSize: "15px" }}>
                    {data.name}
                  </Card.Title>
                  <Card.Text>
                    <b>{data.productPrice.price}</b>
                    
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

Chargerbasic.getInitialProps = async function() {

  const url = "https://www.salextra.com.bd/api/product/getallproducts";
    let options = {
      method: "POST",
      headers: { 
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Token": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFeHRlcm5hbFN0b3JlSWQiOjMsImV4cCI6MTYzMzY5MzIxMy4wfQ.NH2zUNLXc4g7gz6prFNtJ3GrECyGSXGDjppyiDdjbos",
      "NST": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJOU1RfS0VZIjoiR1FEc3RjS3N4ME5IalBPdVhPWWc1TWJlSjFYVDB1Rml3RFZ2VkJyayIsImlhdCI6MTYxODE0MTIxMy4wfQ.sC2ST9KavvQvaO_abJFKFgmTHUFVRrTJqqq-Jdr9kuTL6b-ab5M5p-bv_sNw1ZQyu8iQhV5T86pEC0vxA07YYw",
      "brandid": "353" },
      data: JSON.stringify({BrandId: 353, CategoryIds:[53]}),
      url
    };

	const response = await axios( options
    // 'https://www.salextra.com.bd/api/product/getallproducts',
	)
	return {
		pdata: response.data
	}
}