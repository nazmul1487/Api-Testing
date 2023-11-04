import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Form from "react-bootstrap/Form";

export default function ProductDetailPage(data ) {
  // console.log("pDP", data);
  function createMarkup(c) {
    return {__html: c};
  }
  const seName =JSON.stringify(data.data.seName) ;
  // console.log("New Sename",data.data);
  return (
    <>
      <Container >
        {/* <Row className="text-center mt-2"><h3>{data.data.name}</h3>
        <hr className="mb-0" />
        </Row> */}
        <Row className="justify-content-center mt-0">
          <Col xl="6" className="mt-2 p-0">
            <Carousel className="productSlider" showArrows={false} showStatus={false} thumbWidth={60}>
              {data.data && data.data.pictureModels ? data.data.pictureModels?.map((itm, index) => (
                <div key={index}>
                  <img alt="" src={itm.imageUrl}  />
                </div>
              )): ""}
            </Carousel>
          </Col>
          <Col sm={5} className=" m-0 p-0 mt-5">
            <div className="justify-content-center mt-3" style={{marginLeft:"10px"}}>
              {/* <p >Storage Capacity</p>
              <Card style={{ width: "12rem"}}>
                <Card.Body style={{ alignSelf: "center", fontWeight:"bold", fontSize:"20px" }}>{data.data.storage}</Card.Body>
              </Card> */}
              <h3>{data.data.name}</h3>
            </div>
            <div className="justify-content-center mt-3" style={{marginLeft:"10px"}} >

               {/* Color Section  */}
              <h4 >Color</h4>
              {data.data.seName}
              <Col>
              <Card style={{width:"50%"}}>

              <div  className="colorSection">
              {data.data && data.data.productAttributes ? data.data.productAttributes[0]?.values.map((itm, index) => (
                  // <Card key={tmp.id} className="colorCard justify-content-center text-center  mt-2"><svg className="productColor" fill={tmp.colorCode}><circle cx="16" cy="16" r="16"/></svg>{tmp.color}</Card>
                  <div key={index} className=" justify-content-center text-center mx-4  mt-2"><svg className="productColor " fill={itm.colorSquaresRgb}><circle cx="16" cy="16" r="16"/></svg><span>{itm.name}</span></div>

              )): ""}  
                  {/* // <Card className="colorCard justify-content-center text-center  mt-0"><svg className="productColor" fill="#171E27"><circle cx="16" cy="16" r="16"/></svg>Midnight</Card>
                  // <Card className="colorCard justify-content-center text-center  mt-0"><svg className="productColor" fill="#574F6F"><circle cx="16" cy="16" r="16"/></svg>Purple</Card>
                  // <Card className="colorCard justify-content-center text-center  mt-2"><svg className="productColor" fill="#D7D7D9"><circle cx="16" cy="16" r="16"/></svg>Starlight</Card>
                  // <Card className="colorCard justify-content-center text-center  mt-2"><svg className="productColor" fill="#B00D23"><circle cx="16" cy="16" r="16"/></svg>Red</Card> */}

              </div>    
              </Card>    
              </Col> 
 
              {/* Stock Availabile section  */}
                {/* <div className="justify-content-center mt-4" style={{marginLeft:"10px"}}>
                  <p>Availability : Out of Stock</p>
                </div> */}

                {/* price section  */}
                <div className="justify-content-center mt-4" style={{marginLeft:"10px"}}>
                  
                  <Card.Title><b>{data.data.productPrice ? data.data.productPrice.price : "" }</b></Card.Title>
                </div>
                  {/* oneline, outline store  */}
                <div className="justify-content-center mt-4" style={{marginLeft:"10px"}}>
                  <p style={{fontSize:"16px", marginBottom:"25px"}}>Availabile Emi : <a style={{color:"blue"}} href="/product/iphone"> read the policy</a></p>

                  <p style={{fontSize:"16px"}}>Want doorstep Delivery ? <a href={"https://www.salextra.com.bd/"+ data.data.seName} target="_blank" > <button style={{ marginLeft:"30px", fontWeight:"bold", fontSize:"15px", width:"120px", borderRadius:"15px", backgroundColor:"#0071e3", border:0, color:"white" }}>Order  Now </button>  </a></p>
                  <p style={{fontSize:"16px"}}>Want doorstep Delivery ? <a href={data.store_link} target="_blank" > <button style={{ marginLeft:"30px", fontWeight:"bold", fontSize:"15px", width:"120px", borderRadius:"15px", backgroundColor:"#0071e3", border:0, color:"white" }}>Visit Store </button>  </a></p>
                </div>

            </div>

          </Col>
        </Row>
        <h3 className="mt-5 mb-5">Specifications</h3>
        <hr className="mb-3" />
        <Row style={{marginLeft:"0px"}} dangerouslySetInnerHTML={createMarkup(data.data.fullDescription)}>
        </Row>
        <img src={data.overview} width="90%" />
      </Container>
    </>
  );
}
