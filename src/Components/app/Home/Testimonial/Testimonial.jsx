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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {testimonialsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div>
              <FormatQuoteIcon sx={{ fontSize: "70px" }} />
              <p className="text-xl font-semibold max-w-[800px] mx-auto text-gray-300">
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
