import { FC } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import styled from "styled-components";

SwiperCore.use([Navigation]);
interface Props {
  className?: string;
}
const CarouselS = styled.div`
  .swiperContainer {
    width: 100%;
    min-height: 350px;
    overflow: hidden;
    & > div:first-child,
    & > div:nth-child(2) {
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background: #fcfcfc;
      box-shadow: 0px 3px 6px 0px #a7a7a74a;
      outline: none;
      transition: all 0.1s ease-in-out;
      &:hover {
        box-shadow: 0px 8px 10px 0px #a7a7a74a;
      }
      &::after {
        content: "";
        padding: 7px;
        border-top: 2px solid var(--color_for);
        background: transparent;
      }
      &:active {
        box-shadow: inset 0px 3px 6px 0px #a7a7a74a;
      }
    }
    & > div:first-child {
      &::after {
        border-right: 2px solid var(--color_for);
        transform: rotate(45deg);
        margin-right: 10px;
      }
    }
    & > div:nth-child(2) {
      &::after {
        border-left: 2px solid var(--color_for);
        transform: rotate(-45deg);
        margin-left: 10px;
      }
    }
    img {
      right: 35%;
    }
  }
`;
const Carousel: FC<Props> = (props) => {
  return (
    <CarouselS>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={`swiperContainer ${props.className}`}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {props.children}
      </Swiper>
    </CarouselS>
  );
};

export default Carousel;
