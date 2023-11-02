import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const CategorySectionData = require("../../JsonData/DB.json");

export default function CategorySection() {
  // function createMarkup(c) {
  //   return {__html: c};
  // }
  return (
      <div>
        <Row className="justify-content-center mt-5">
        {CategorySectionData.CategorySectionData.map((data, index) => (
          <Col key={data.id} md="auto" className="d-flex justify-content-center m-0 p-1">
            <Card  className=' categorySecCard text-white text-center'  >
            <Card.Link href={data.redirect_link}>
              <Card.Img className='categorySecImg' src={data.image}  />
              {/* <Card.ImgOverlay> */}
                {/* <h4 className='mt-4'>iWatch</h4>
                <h5>A healthy leap ahead</h5> */}
                 </Card.Link>
              {/* </Card.ImgOverlay> */}
            </Card>
          </Col>
          ))}
          {/* <Col md="auto" className="d-flex justify-content-center m-3">
            <Card className='bg-dark text-white text-center' style={{width:"40rem", height:"80%"}} >
              <Card.Link href='/products/ipad' style={{fontSize:20, color:'dodgerblue'}}> 
                <Card.Img src="/images/banner/iPad.jpg" />
              </Card.Link>
            </Card>
          </Col>
          <Col md="auto" className="d-flex justify-content-center m-3">
            <Card className='bg-dark text-white text-center' style={{width:"40rem", height:"80%"}} >
            <Card.Link href='/products/airpod' style={{fontSize:20, color:'dodgerblue'}}> 
                <Card.Img src="/images/banner/airPods.jpg" />
              </Card.Link>
            </Card>
          </Col>
          <Col md="auto" className="d-flex justify-content-center m-3">
            <Card className='bg-dark text-white text-center' style={{width:"40rem", height:"80%"}} >
            <Card.Link href='/products/accessories' style={{fontSize:20, color:'dodgerblue'}}> 
                <Card.Img src="/images/banner/accessories.jpg" />
              </Card.Link>
            </Card>
          </Col> */}
        </Row>
      </div>
  )
}
