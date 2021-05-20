import { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import BestPageCarousel from "./BestPageCarousel/BestPageCarousel";
import { Helmet } from "react-helmet";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BestPostCarousel from "./BestPostCarousel/BestPostCarousel";
import "swiper/swiper-bundle.min.css";
const Best = () => {
  return (
    <Fragment>
      <Box mb="20px" mt="10px">
        <Breadcrumb
          link={[
            { title: "خانه", to: "/" },
            { title: "بهترین ها", to: "/best", isActive: true },
          ]}
        />
      </Box>
      <Helmet>
        <title>بلاگر - بهترین های سایت</title>
      </Helmet>
      <Box mb="4rem">
        <Typography align="center" variant="h4" component="p" className="title">
          برترین صفه ها
        </Typography>
      </Box>
      <BestPageCarousel />
      <Box mb="4rem">
        <Typography align="center" variant="h4" component="p" className="title">
          برترین پست ها
        </Typography>
      </Box>
      <BestPostCarousel />
    </Fragment>
  );
};

export default Best;
