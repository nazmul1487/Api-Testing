import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

// const CategoryData = require("../../JsonData/DB.json");

export default function ProductsDes(data) {
    function createMarkup(c) {
        return {__html: c};
      }

    // const [data, setData] = useState([{}]);
    // const [error, setError] = useState(null);
    // console.log("piid",pid)

    // const getData = async () => {
    //     try {
    //         const API_BASE_URL = "https://www.salextra.com.bd/api/product/productdetails/"+pid+"/0";
    //         const getHeaders = () => {
    //             return {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //                 "Token": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFeHRlcm5hbFN0b3JlSWQiOjMsImV4cCI6MTYzMzY5MzIxMy4wfQ.NH2zUNLXc4g7gz6prFNtJ3GrECyGSXGDjppyiDdjbos",
    //                 "NST": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJOU1RfS0VZIjoiR1FEc3RjS3N4ME5IalBPdVhPWWc1TWJlSjFYVDB1Rml3RFZ2VkJyayIsImlhdCI6MTYxODE0MTIxMy4wfQ.sC2ST9KavvQvaO_abJFKFgmTHUFVRrTJqqq-Jdr9kuTL6b-ab5M5p-bv_sNw1ZQyu8iQhV5T86pEC0vxA07YYw",
                    
    //             };
    //         };
    //         const response = await fetch(API_BASE_URL, {
    //             method: "GET",
    //             headers: getHeaders(),
               
    //         });
    //         const newData = await response.json()
    //         console.log(newData);
    //         setData(newData.data);
    //     } catch (error) {
    //         setError(error);
    //         // console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div>
            <Row className="d-flex justify-content-center mx-0 mt-5 mb-5">
            <Row style={{marginLeft:"0px"}} dangerouslySetInnerHTML={createMarkup(data.data.fullDescription)}>
        </Row>
               
                <hr />
                product Image:
                {data.data && data.data.pictureModels ? data.data.pictureModels?.map((itm, index) => (
                    <Col key={index}>
                        <img src={itm.imageUrl} />
                    </Col>
                )) : ""}

                product Color: 
                {data.data && data.data.productAttributes ? data.data.productAttributes[0]?.values.map((itm, index) => (
                    <Col key={index}>
                        <p>{itm.name}</p>
                    </Col>
                )): ""}
                {/* {data} */}
                ppp
            </Row>
        </div>
    );
}
