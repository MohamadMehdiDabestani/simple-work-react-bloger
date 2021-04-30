import { Fragment } from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import EnvironmentBlogSecurityImage from "../../../Assets/Security.svg";
import SpeedImage from "../../../Assets/Speed.svg";
import MyButton from "../../Style/Matrial/Button/MyButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GuidItem from "../../Guid/GuidItem/GuidItem";
import Guid from "../../Guid/Guid";
const EnvironmentBlogS = styled.div`
  .img {
    height: 420px;
    width: 100%;
  }
  .aftreOfImageSpeed {
    position: relative;
    &::after {
      content: "\f23c";
      position: absolute;
      color: var(--color_for);
      font-size: 25px;
      left: 5%;
      bottom: 50%;
      transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -webkit-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
    }
  }

  .aftreOfImageSecurity {
    position: relative;
    &::after {
      content: "\f18b";
      position: absolute;
      top: 23%;
      right: 10%;
      font-size: 25px;
      color: var(--color_six);
      transform: rotate(-45deg);
    }
  }
  *::before,
  *::after {
    font-family: uicons-regular-rounded !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  .text {
    height: auto;
    padding-top: 45px;
    position: relative;
    p:first-child {
      margin-bottom: 15px;
    }
    p:nth-child(2) {
      line-height: 33px;
      text-align: justify;
      color: var(--color_text);
    }
    &.Security {
      &::before {
        content: "\f20c";
        position: absolute;
        top: 15%;
        left: 10%;
        transform: rotate(-30deg);
        -o-transform: rotate(-30deg);
        -moz-transform: rotate(-30deg);
        -webkit-transform: rotate(-30deg);
        font-size: 25px;
        color: #e63c3c;
      }
    }
    &.Speed {
      &::before {
        content: "\f165";
        position: absolute;
        color: var(--color_one);
        font-size: 25px;
        left: 10%;
        top: 15%;
        transform: rotate(13deg);
        -moz-transform: rotate(13deg);
        -webkit-transform: rotate(13deg);
        -o-transform: rotate(13deg);
      }
      button {
        float: left;
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .Security::before,
    .Speed::before,
    .Security::after,
    .aftreOfImage::after {
      display: none;
    }
  }
`;
const Security = (
  <Fragment>
    <Hidden only={["xs"]}>
      <GuidItem xl={7} lg={7} md={7} sm={6}>
        <div className="aftreOfImageSecurity">
          <img
            src={EnvironmentBlogSecurityImage}
            className="img"
            alt="Security_Blog_Image"
          />
        </div>
      </GuidItem>
    </Hidden>
    <GuidItem xl={5} lg={5} md={5} sm={6} xs={12}>
      <div className="text Security">
        <Typography variant="h4" component="p" className="title">
          امنیت
        </Typography>
        <Typography component="p">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </Typography>
      </div>
    </GuidItem>
  </Fragment>
);
const Speed = (
  <Fragment>
    <GuidItem xl={5} lg={5} md={5} sm={6} xs={12}>
      <div className="text Speed">
        <Typography variant="h4" component="p" className="title">
          سرعت
        </Typography>
        <Typography component="p">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </Typography>
        <Box mt="30px">
          <Link to="/guid">
            <MyButton type="Blue">همین حالا شروع کن</MyButton>
          </Link>
        </Box>
      </div>
    </GuidItem>
    <Hidden only={["xs"]}>
      <GuidItem xl={7} lg={7} md={7} sm={6}>
        <div className="aftreOfImageSpeed">
          <img src={SpeedImage} className="img" alt="Security_Blog_Image" />
        </div>
      </GuidItem>
    </Hidden>
  </Fragment>
);
const EnvironmentBlog = () => {
  return (
    <EnvironmentBlogS as={Box} mb="4rem">
      <Box mb="5rem">
        <Typography component="p" variant="h4" align="center" className="title">
          دلیل استفاده از ما
        </Typography>
      </Box>
      <Grid container>
        <Guid>{Security}</Guid>
        <Guid>{Speed}</Guid>
      </Grid>
    </EnvironmentBlogS>
  );
};

export default EnvironmentBlog;
