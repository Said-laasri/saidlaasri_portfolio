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
      <h1 className="section text-center mt-4 p-2" data-aos="fade-right">
        Testimonies
      </h1>
      <Swiper
        data-aos="zoom-in-up"
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
        <SwiperSlide style={{ height: "auto" }}>
          <img
            src="https://media.licdn.com/dms/image/D5603AQEL2JUM95rxqA/profile-displayphoto-shrink_200_200/0/1670864145164?e=1691625600&v=beta&t=Cz1rCxin8STHpYjkaJFMxIW7hB9VMpj-Mlbczxd1tRk"
            alt="green beans"
          />
          <h4>Htet (Rex) Naing</h4>
          <p>
            Said is a fantastic software engineer, and his detail-oriented
            approach made him a pleasure to work with. We pair-programmed
            extensively together while enrolled in a software development
            program, and during that time his work ethic blew me away. Said
            views writing clean, accessible code as a calling, and he's great at
            identifying areas where we can improve UI. He's also super friendly;
            by the time our project was done, I felt like we'd known each other
            for years. I can't recommend him enough!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQGE6WxKg7hwBQ/profile-displayphoto-shrink_200_200/0/1646069977132?e=1691625600&v=beta&t=J-NpI5-j1IZylOJTQbXM8iHO9sMYL47XeeMXEUTpY8U"
            alt="green beans"
          />
          <h4>Piesie (Omane Kwadwo) Yeboah</h4>
          <p>
            I had the pleasure of working with Said at Microverse, and I was
            truly impressed. Said's attention to detail, advanced system
            engineering skills, and exceptional problem-solving abilities stood
            out. He effortlessly managed multiple tasks at once, showcasing
            remarkable efficiency and dedication. It was a privilege to work
            alongside someone as talented and skilled as Said{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lazy-coders.netlify.app/static/media/trainer8.3dffb89dfbea9d7201ce.png"
            alt="green beans"
          />
          <h4>Nicholas (TechieEmma) Emmanuel</h4>
          <p>
            I worked with Said while we were students at Microverse. Said is
            detailed orientated and has advanced system engineering and
            problem-solving skills. He has the ability to effectively manage
            several tasks at a time.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lazy-coders.netlify.app/static/media/trainer1.a23bb0f8ff7ec40a4916.png"
            alt="green beans"
          />
          <h4>Abdelmejid Oumer Ali</h4>
          <p>
            Said is an exceptional developer, impressing me with his technical
            prowess and deep understanding of complex programming concepts. His
            problem-solving skills and attention to detail are commendable. He
            is a valuable asset to our team, collaborating and sharing knowledge
            effortlessly.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQF1lEIVN9dlnA/profile-displayphoto-shrink_200_200/0/1678826262966?e=1691625600&v=beta&t=TJrofTqVXkeJh28TTLHpiTK3C43--pL8gsnoMko5E_g"
            alt="green beans"
          />
          <h4>Elizabeth (Oyinlade) Ojesanmi</h4>
          <p>
            Said is one of the brightest software developers I've ever met. I
            worked alongside him while working on a project at Microverse, and
            in that time he proved his commitment and determination over and
            over again. Said is the type of person who reads documentation for
            fun, is highly focused, and is always ready to go the extra mile to
            get the job done. I can recommend him without reservation.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ca.slack-edge.com/T47CT8XPG-U03CCG02V08-3d945817b633-512"
            alt="green beans"
          />
          <h4>Dorian Urem</h4>
          <p>
            Said is a great guy, he is friendly, hardworking, eager to learn new
            things and is willing to help others. This is my opinion of him from
            knowing him for a year now and collaborating in Microverse and
            outside of it. I would recommend him to any company because of his
            traits.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lazy-coders.netlify.app/static/media/trainer10.b052c87360e3794c5dde.png"
            alt="green beans"
          />
          <h4>Asim KhanAsim Khan</h4>
          <p>
            I have always enjoyed coding with Said Laasri. The energy and
            dedication he brings to the table make us a formidable team in pair
            programming and handling coding challenges. His hunger to learn more
            and understand new concepts is a refreshing session for me as well,
            as I get to learn more new things as well. He truly is a remarkable
            partner and a thorough gentleman. Anyone would appreciate having him
            on their team as he will be a very hard-working and reliable asset.
          </p>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Testimonies;
