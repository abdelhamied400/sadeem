"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
      name: "Asmaa Jarrar",
      role: "Crystel company",
    },
    {
      id: 2,
      text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
      name: "Asmaa Jarrar",
      role: "Crystel company",
    },
    {
      id: 3,
      text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
      name: "Asmaa Jarrar",
      role: "Crystel company",
    },
  ];

  const goToPrev = () => {
    // sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    // sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="feedback_slider_two">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {testimonials.map((testimonial) => (
            <div className="item" key={testimonial.id}>
              <div className="feedback-block-two text-center">
                <p
                  className="mb-80 lg-mb-40"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {testimonial.text}
                </p>
                <h4 className="m0">{testimonial.name}</h4>
                <span className="opacity-75">{testimonial.role}</span>
              </div>
              {/* /.feedback-block-two */}
            </div>
          ))}
        </Slider>
      </div>
      {/* /.feedback_slider_two */}

      <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none mt-35">
        <li className="prev_f2 slick-arrow tran3s" onClick={goToPrev}>
          <i className="bi bi-arrow-left" />
        </li>
        {/* End slick prev arrow end */}

        <li className="next_f2 slick-arrow tran3s" onClick={goToNext}>
          <i className="bi bi-arrow-right" />
        </li>
        {/* End slick next arrow end */}
      </ul>
    </>
  );
};

export default Testimonial;
