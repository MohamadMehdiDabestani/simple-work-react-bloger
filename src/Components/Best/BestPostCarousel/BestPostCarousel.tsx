import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Card from "../../Card/Card";
import Logo from "../../../Assets/3424974.jpg";
import styled from "styled-components";
const PropsCard = {
  cardText: "Text",
  cardDate: "1400/1/1",
  cardTitle: "Title",
  cardImage: Logo,
  link: "Post/id",
  logo: Logo,
  imageTitle: "alt image",
};
const BestPostCarouselS = styled.div`
  height: 465px;
`;
const BestPostCarousel = () => {
  return (
    <BestPostCarouselS as={Carousel}>
      <SwiperSlide>
        <Card {...PropsCard} />
      </SwiperSlide>
      <SwiperSlide>
        <Card {...PropsCard} />
      </SwiperSlide>
      <SwiperSlide>
        <Card {...PropsCard} />
      </SwiperSlide>
      <SwiperSlide>
        <Card {...PropsCard} />
      </SwiperSlide>
      <SwiperSlide>
        <Card {...PropsCard} />
      </SwiperSlide>
    </BestPostCarouselS>
  );
};

export default BestPostCarousel;
