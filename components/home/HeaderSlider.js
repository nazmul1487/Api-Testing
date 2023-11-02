import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const HeaderSliderData = [
  {
    id:1,
    img:'/images/banner/neckbandn50.png',
    link:"#"
  },
  {
    id:2,
    img:'/images/banner/watch_active_s7.png',
    link:"#"
  },
  {
    id:3,
    img:'/images/banner/powerda30.png',
    link:"#"
  }
]

export default function HeaderSlider() {
  return (  
    <Carousel controls={false} interval={2000} >
      { HeaderSliderData.map(( data, index ) => (
      <Carousel.Item key={index}>
       <a href={data.link} ><img className="d-block w-100 homeSlider" src={data.img} alt="First slide" /></a> 
      </Carousel.Item>
      ))}
    </Carousel>
  );
}
