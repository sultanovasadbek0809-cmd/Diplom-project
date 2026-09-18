import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './projekt.module.scss';

import sw1 from './image/sw1.png';
import sw2 from './image/sw2.png';
import sw3 from './image/sw3.png';
import sw4 from './image/sw4.png';
import sw5 from './image/sw5.png';
import sw6 from './image/sw6.png';
import sw7 from './image/project.png';

const slidesData = [
  {
    id: 1,
    bottomTitle: 'SPRIT',
    bottomText:
      'Discover the unique essence of elegance with the Spirit perfume collection. Experience subtle luxury, natural refinement, and long-lasting fragrances designed to complement your individual style every single day.',
    link: 'https://www.figma.com/design/RhxTw5EHDRddinaY0FpF80/PERFUME-LINE?node-id=0-1&p=f&t=i9A6e6aZogoRwA3B-0',
    linkText: 'To see',
    img: sw1,
  },
  {
    id: 2,
    bottomTitle: 'Project Two',
    bottomText:
      'Description for project two goes here with all necessary details.',
    link: '#',
    linkText: 'To see',
    img: sw2,
  },
  {
    id: 3,
    bottomTitle: 'Project Three',
    bottomText:
      'Description for project three goes here with all necessary details.',
    link: '#',
    linkText: 'To see',
    img: sw3,
  },
  {
    id: 4,
    bottomTitle: 'Project Four',
    bottomText:
      'Description for project four goes here with all necessary details.',
    link: '#',
    linkText: 'To see',
    img: sw4,
  },
  {
    id: 5,
    bottomTitle: 'Project Five',
    bottomText:
      'Description for project five goes here with all necessary details.',
    link: '#',
    linkText: 'To see',
    img: sw5,
  },
  {
    id: 6,
    bottomTitle: 'Project Six',
    bottomText:
      'Description for project six goes here with all necessary details.',
    link: '#',
    linkText: 'To see',
    img: sw6,
  },
];

function Projekt() {
  return (
    <div className={styles.projekt}>
      <div className={styles.projekt__main}>

        <span className={styles.projekt__title}>
          Projekt
        </span>

        <Swiper
          speed={600}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.slide}>

              <div className={styles.imageContainer}>
                <img
                  src={slide.img}
                  alt={slide.bottomTitle}
                  className={styles.slideImg}
                />
              </div>

              <div className={styles.bottomContent}>
                <h3 className={styles.bottomTitle}>
                  {slide.bottomTitle}
                </h3>

                <p className={styles.bottomText}>
                  {slide.bottomText}
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={slide.link}
                  className={styles.bottomBtn}
                >
                  {slide.linkText}
                </a>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Large project */}

        <div className={styles.projekt__big}>
          <span className={styles.projekt__title_mt}>
            Large project
          </span>

          <img className={styles.projekt__big_img} src={sw7} alt="Large project" />
          <p className={styles.projekt__big_text}>A modern and responsive portfolio website designed to showcase my skills, projects, and experience as a Front-End Developer.

This project was built using React, JavaScript, SCSS, HTML, and CSS. I focused on creating a clean and interactive design with smooth animations, responsive layouts, and reusable components.

The website includes sections for About Me, Skills, Projects, and Experience, allowing visitors to easily explore my work and learn more about my development journey.

Technologies: React, JavaScript, SCSS, HTML, CSS

View Project</p>
        </div>

      </div>
    </div>
  );
}

export default Projekt;