import React from 'react'
import { Col, Card, Row, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
        <Row className="justify-content-md-center my-5" >
            <Col className="d-flex justify-content-center px-1" md="auto">
              <Card
                style={{
                  width: "27rem",
                  height:'25rem',
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px",
                }}
              >
                <iframe style={{height:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1122371826264!2d90.41963599772593!3d23.814607608083666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7dea0ae1ac7%3A0xaaf04d5276e0752a!2sSalextra%20Limited!5e0!3m2!1sen!2sbd!4v1665461465363!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               {/* <iframe style={{height:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.089256982085!2d90.41928741543232!3d23.815424892205005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaf04d5276e0752a!2sSalextra%20Limited!5e0!3m2!1sbn!2sbd!4v1649174036713!5m2!1sbn!2sbd"></iframe>    */}
              </Card>
            </Col>
            <Col className="d-flex justify-content-center px-0" md="auto">
              <Card
                style={{
                  width: "21rem",
                  height:'25rem',
                  backgroundColor: "black",
                  color:'white',
                }}
              >
                <Card.Body className='my-5'>
                  <Card.Title style={{textAlign: "center"}}>Contact Info</Card.Title>
                  {/* <Card.Text>Salextra Limited, Ranks Business Center Level 7 Ka 218/1-2 Pragati Sarani Dhaka 1229</Card.Text> */}
                  
                  <p className='mb-0'>
                Salextra Limited
              </p>
              <p  className='m-0'>
                Noboshristo Plot No. 9 Ka/kha, Level-6
              </p>
              <p  className='m-0'>
                Tejgaon Industrial Area, Tejgaon 
              </p>
              <p>
              Dhaka-1215
              </p><Card.Text>09638776600</Card.Text>
                  <Card.Text className='mb-5'>Email: info@salextrabd.com</Card.Text>
                  <p style={{textAlign:"center"}}>
                <a href="#" className="text-reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#106ADE" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                </a>
                <a href="#" className="text-reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#106ADE" className="bi bi-linkedin mx-4" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                  </a>
                <a href="#" className="text-reset">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
                  </a>
              </p>
                </Card.Body> 
              </Card>
            </Col>
         
          </Row>
    </div>
  )
}