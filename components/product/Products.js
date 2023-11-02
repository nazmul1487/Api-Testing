import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Form from "react-bootstrap/Form";
import ProductDes from "./ProductDes";

export default function Products({ pdata }) {
    // console.log(pdata)
  const base_url = "https://www.salextra.com.bd/";
  return (
    <>
      <Container >
      {pdata.data.map((post, index) => {
				return (
				<div key={index}>
					<div>
						{/* <h4>{post.name}</h4>
						<p>{post.id}</p>
                        <p>{post.productPrice.price}</p> */}
                        <img src={post.defaultPictureModel.imageUrl} />
                        <p>Name: {post.name}</p>
						<p>ID: {post.id}</p>
                        <p>Price: {post.productPrice.price}</p>
                        <p>web_link: {base_url}{post.seName} </p>
                        <ProductDes pid={post.id} />
                        {/* <p>
                        {post.productPrice.map((pp, ind) => {
                        return <span key={ind}>{pp.price}</span>
                    })}
                        </p> */}
					</div>
                    <hr />
				</div>
				)
			})}
        {/* hello products page. */}
      </Container>
    </>
  );
}
