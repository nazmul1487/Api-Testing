import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import Products from "@/components/product/Products";
import ProductDes from "@/components/product/ProductDes";

// const CategoryData = require("../../JsonData/DB.json");

// async function getData() {
//   const API_BASE_URL = 'https://www.salextra.com.bd/api'; 
//   const getHeaders=()=>{
//     return {
        // "Accept": "application/json",
        // "Content-Type": "application/json",
        // "Token": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFeHRlcm5hbFN0b3JlSWQiOjMsImV4cCI6MTYzMzY5MzIxMy4wfQ.NH2zUNLXc4g7gz6prFNtJ3GrECyGSXGDjppyiDdjbos",
        // "NST": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJOU1RfS0VZIjoiR1FEc3RjS3N4ME5IalBPdVhPWWc1TWJlSjFYVDB1Rml3RFZ2VkJyayIsImlhdCI6MTYxODE0MTIxMy4wfQ.sC2ST9KavvQvaO_abJFKFgmTHUFVRrTJqqq-Jdr9kuTL6b-ab5M5p-bv_sNw1ZQyu8iQhV5T86pEC0vxA07YYw",
        // "brandid": "353"
//       };
// }
//   const res = await fetch(API_BASE_URL+"/product/getallproducts", {
//     method: 'POST',  
//     headers: getHeaders(),
//     body: JSON.stringify({BrandId: 353, CategoryIds:[53]})
//   })
 
//   if (!res.ok) {
   
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

// export default function products() {
//   const data =  getData()
//   console.log(data)

//   return (
//     <div>
//       <Row className="d-flex justify-content-center mx-0 mt-5 mb-5">
//           {/* {data.map((itm, index) => (
//             <Col
//               key={index}
//             >
//               {data[0].name}
//             </Col>
//           ))} */}
//           ppp
//         </Row>
        
//     </div>
//   )
// }
const Index = (props) => (
    <div>
		<h1>Xtra watches</h1>
		<Products pdata={props.pdata}/>
    {/* <ProductDes pdata={props.pdata}/> */}
    </div>
);

Index.getInitialProps = async function() {

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


export default Index;