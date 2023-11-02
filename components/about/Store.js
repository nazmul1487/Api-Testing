import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Store() {
  return (
    <div>
    <Carousel controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        
        <div className="store-banner"></div>

      </Carousel.Item>
    </Carousel>
    <div className="storeHead">
      <img className='storelogo' src={"/images/product/Apple-Store_1.png"}/>
    </div>
    <div className="storeBody">
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" md="auto">
          <Card className="store-body-card"
          >
            <p>
            Now a days tech lovers actually want to check the products physically before buying. Our lifestyle shop started as a platform for fulfilling this criterion. We bring Salextra Lifestyle as a solution to lifestyle change. With this, we can bring the authorized products of global brands to consumers. We are targeting to open at least 25 Salextra lifestyle retail within next 2 years of time in where all the global brand partnered with Salextra will be under one umbrella. Currently consumer will get Apple, Motorola, lenevo, Amazfit, Dizo, Xtra and ZTE brands product at our retail.
            </p>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center my-5">
          <Col className="d-flex justify-content-center"
            md="auto">
              <Card className="store-card">
                <Card.Img src={"/images/banner/shop1.jpg"}  />
                <Card.Body>
                <h6> Shop-56, Block-B, Level-6</h6>
              <h6>Bashundhara City Shopping Complex, Dhaka</h6>
                </Card.Body>
              </Card>
          </Col>
          <Col className="d-flex justify-content-center"
            md="auto">
              <Card className="store-card">
                <Card.Img src={"/images/banner/shop1.jpg"}  />
                <Card.Body>
                <h6>Shop No-405(3rd Floor)</h6>
              <h6>Singapur Bankok Market, Agrabad, Chittagong.</h6>
                </Card.Body>
              </Card>
          </Col>
    </Row>
    </div>

</div>
);
}