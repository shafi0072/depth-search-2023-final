import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonialsData } from "@/src/constant/testimonial";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Testimonial = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
        <h2 class="mb-12 text-4xl text-gray-300 font-semibold">Testimonials</h2>
      </div>
      <Swiper
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}

        {testimonialsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div>
              <FormatQuoteIcon sx={{ fontSize: "70px" }} />
              <p className="text-4xl font-semibold max-w-[700px] mx-auto">
                {review?.reviewDescription}
              </p>
              <div className="flex items-center gap-3 justify-center my-6">
                <img
                  className="w-8 h-8 rounded-full"
                  src={review?.image}
                  alt=""
                />
                <h4>{review?.name} |</h4>
                <p>{review?.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
