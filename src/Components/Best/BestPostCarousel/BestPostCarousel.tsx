import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Card from "../../Card/Card";
import Logo from "../../../Assets/3424974.jpg";
import styled from "styled-components";
const PropsCard = {
  postDescription: "Text",
  createDate: "1400/1/1",
  postTitle: "Title",
  imageName: Logo,
  postId: 2,
  altImage: "alt image",
  userName: "User Name",
  avatarName: Logo,
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
