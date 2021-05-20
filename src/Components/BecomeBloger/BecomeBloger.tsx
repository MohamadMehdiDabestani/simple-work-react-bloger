import styled from "styled-components";
import { Grid, Hidden, Box, Typography } from "@material-ui/core";
import Guid from "../Guid/Guid";
import GuidItem from "../Guid/GuidItem/GuidItem";
import Bloger from "../../Assets/Writer.svg";
import Freelancer from "../../Assets/Freelancer.svg";
import Help from "../../Assets/Help.svg";
import { Link } from "react-router-dom";
import MyButton from "../Style/Matrial/Button/MyButton";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Helmet } from 'react-helmet';
const BecomeBlogerS = styled.div`
  .text {
    p:first-child {
      margin-bottom: 15px;
    }
    p:nth-child(2) {
      line-height: 33px;
      text-align: justify;
      color: var(--color_text);
    }
  }
  .img {
    height: 420px;
    width: 100%;
  }
`;
const BecomeBloger = () => {
  console.log("render BecomeBloger");
  return (
    <BecomeBlogerS>
      <Helmet>
        <title>بلاگر - راهنمای اولیه</title>
      </Helmet>
      <Box mb="20px" mt="10px">
        <Breadcrumb
          link={[
            { title: "خانه", to: "/" },
            { title: "بلاگر شو", to: "/guid", isActive: true },
          ]}
        />
      </Box>
      <Box mb="4rem">
        <Typography component="p" variant="h4" align="center" className="title">
          مزایای بلاگر شدن
        </Typography>
      </Box>
      <Grid container>
        <Guid>
          <GuidItem xl={5} lg={5} md={6} sm={12} xs={12}>
            <div className="text">
              <Box mt="5rem">
                <Typography variant="h4" component="p" className="title">
                  بلاگر کیست ؟
                </Typography>
              </Box>
              <Typography component="p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Typography>
            </div>
          </GuidItem>
          <Hidden only={["sm", "xs"]}>
            <GuidItem xl={7} lg={7} md={6}>
              <img src={Bloger} alt="Bloger" className="img" />
            </GuidItem>
          </Hidden>
        </Guid>

        <Guid>
          <Hidden only={["sm", "xs"]}>
            <GuidItem xl={7} lg={7} md={6}>
              <img src={Freelancer} alt="Freelancer" className="img" />
            </GuidItem>
          </Hidden>
          <GuidItem xl={5} lg={5} md={6} sm={12} xs={12}>
            <div className="text">
              <Box mt="5rem">
                <Typography variant="h4" component="p" className="title">
                  کار آزاد (فریلنسر)
                </Typography>
              </Box>
              <Typography component="p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Typography>
            </div>
          </GuidItem>
        </Guid>

        <Guid>
          <GuidItem xl={5} lg={5} md={6} sm={12} xs={12}>
            <div className="text">
              <Box mt="5rem">
                <Typography variant="h4" component="p" className="title">
                  راهنمایی
                </Typography>
              </Box>
              <Typography component="p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Typography>
              <Box mt="15px">
                <Link to="/register">
                  <MyButton type="BlueLight">ثبت نام کنید</MyButton>
                </Link>
              </Box>
            </div>
          </GuidItem>
          <Hidden only={["sm", "xs"]}>
            <GuidItem xl={7} lg={7} md={6}>
              <img src={Help} alt="Help" className="img" />
            </GuidItem>
          </Hidden>
        </Guid>
      </Grid>
    </BecomeBlogerS>
  );
};

export default BecomeBloger;
