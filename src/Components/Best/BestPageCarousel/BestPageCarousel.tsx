
import {  SwiperSlide } from "swiper/react";
import Page from "../../Page/Page";
import Logo from "../../../Assets/3424974.jpg";
import Carousel from "../Carousel/Carousel";

const PropsTopPage = {
  id: 5,
  logo: Logo,
  followers: 250,
  title: "چغندر",
  numberOfPost: 50,
};

const BestPageCarousel = () => {
  return (
    <Carousel>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
      <SwiperSlide>
        <Page {...PropsTopPage} />
      </SwiperSlide>
    </Carousel>
  );
};

export default BestPageCarousel;
