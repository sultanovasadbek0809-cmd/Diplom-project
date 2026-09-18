import React from "react";
import { DiCode } from "react-icons/di";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./About.module.scss";

import front from "./image/front.svg";
import p1 from "./image/p1.jpg";
import p2 from "./image/p2.jpg";
import p3 from "./image/p3.jpg";

function About() {
  const data = [
    {
      id: 1,
      title: "About Me",
      text: `My name is Asadbek Sultanov. I am a frontend developer who is very interested in creating websites and developing modern user interfaces. I am continuously improving my skills in programming and try to learn something new every day.

Currently, I work with HTML, CSS, JavaScript, React, and SCSS. I focus on creating websites that are beautiful, user-friendly, and responsive on different devices. I enjoy adding different animations to websites, creating reusable components, working with data through APIs, and developing convenient interfaces for users.

I am working on various projects in frontend development to improve my practical skills and gain more experience. Every new project gives me an opportunity to learn something new, gain experience, and improve myself. I also pay great attention to writing clean, organized, and understandable code.

My future goal is not to limit myself to frontend development but also to learn backend development in depth. In the near future, I plan to study backend technologies and become a strong full-stack developer who can work with both frontend and backend development.

I see programming not only as a profession, but also as a field that I genuinely enjoy and that gives me the opportunity to constantly grow and develop. In the future, I want to create more complex projects and continue working hard to become a skilled and successful developer.`,

      image: front,
    },
  ];

  return (
    <div className={styles.about}>
      <div className="container">

        <div className={styles.about__intro}>
          <span className={styles.navbar__logo}>
            <DiCode />
          </span>

          <span className={styles.about__title}>
            Sultanov Asadbek
          </span>

          <span className={styles.about__title}>
            Front-end developer
          </span>
        </div>

        <div className={styles.about__me}>

          {data.map((item) => (
            <div
              className={styles.about__me_i}
              key={item.id}
            >
              <h2 className={styles.about__title_i}>
                {item.title}
              </h2>

              <img
                className={styles.about__img}
                src={item.image}
                alt={item.title}
              />

              <p className={styles.about__text}>
                {item.text}
              </p>
            </div>
          ))}

        </div>

        <div className={styles.about__me_i}>

          <h2 className={styles.about__title_i}>
            Education
          </h2>

          <div className={styles.about__education}>

            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              spaceBetween={20}
              className={styles.swiperSlyd}
            >

              <SwiperSlide>
                <img
                  className={styles.about__education_img}
                  src={p1}
                  alt="PROWEB 1"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className={styles.about__education_img}
                  src={p2}
                  alt="PROWEB 2"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className={styles.about__education_img}
                  src={p3}
                  alt="PROWEB 3"
                />
              </SwiperSlide>

            </Swiper>

          </div>

          <p className={styles.about__text}>
            I studied Frontend Development at PROWEB, an IT and Digital
            education center in Tashkent. During my studies, I learned how
            to create modern websites and web applications and developed
            my practical skills in frontend development.

            At PROWEB, I worked with technologies such as HTML, CSS,
            JavaScript, React, and SCSS. I practiced creating responsive
            and user-friendly interfaces, working with APIs, building
            reusable components, and adding animations to websites.

            My studies at PROWEB helped me build a strong foundation in
            frontend development and gave me valuable practical experience.
            It also motivated me to continue improving my skills and take
            the next step toward becoming a full-stack developer.
          </p>

        </div>

      </div>
    </div>
  );
}

export default About;