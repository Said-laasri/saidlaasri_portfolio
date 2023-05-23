import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Container } from "react-bootstrap";
const Testimonies = () => {
  return (
    <Container id="testemony">
      <h1  className="section text-center mt-4 p-2">Testimonies</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:'auto'}}>
          <h5>name</h5> 
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="green beans" />
          <p>i worked with said on a big project wdwfpj eeefpjq qwqpqwp wqworqmmd qwpq wopdmqw wqpdmq dmqwqww qwo mdwqpo qodkqopqokd qokdqo kdqdodkpewooffqdqodkqpoqowpd qodkqwopdk </p>
        </SwiperSlide>
        <SwiperSlide>
        <h5>name</h5> 
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="green beans" />
          <p>i worked with said on a big project wdwfpj eeefpjq qwqpqwp wqworqmmd qwpq wopdmqw wqpdmq dmqwqww qwo mdwqpo qodkqopqokd qokdqo kdqdodkpewooffqdqodkqpoqowpd qodkqwopdk </p>
        </SwiperSlide>
        <SwiperSlide>
        <h5>name</h5> 
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="green beans" />
          <p>i worked with said on a big project wdwfpj eeefpjq qwqpqwp wqworqmmd qwpq wopdmqw wqpdmq dmqwqww qwo mdwqpo qodkqopqokd qokdqo kdqdodkpewooffqdqodkqpoqowpd qodkqwopdk </p>
        </SwiperSlide>
    
      </Swiper>
    </Container>
  );
};

export default Testimonies;
