import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg?size=626&ext=jpg&ga=GA1.2.273994802.1691492350&semt=sph"
            alt=""
            className="w-full bg-black"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/beautiful-shot-different-dog-breeds-resting_181624-19887.jpg?size=626&ext=jpg&ga=GA1.2.273994802.1691492350&semt=sph"
            alt=""
            className="w-full bg-black"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/golden-retriever-sitting-front-white-wall_191971-19321.jpg?size=626&ext=jpg&ga=GA1.2.273994802.1691492350&semt=sph"
            alt=""
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/golden-retriever-sitting-front-white-wall_191971-19321.jpg?size=626&ext=jpg&ga=GA1.2.273994802.1691492350&semt=sph"
            alt=""
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
