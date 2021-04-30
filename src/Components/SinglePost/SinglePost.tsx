import { Box, Grid, Typography, SnackbarOrigin } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styled from "styled-components";
import Image from "../../Assets/3424974.jpg";
import InfoSinglePost from "./InfoSinglePost/InfoSinglePost";
import Snackbar from "../Snackbar/Snackbar";
import ContentSinglePost from "./ContentSinglePost/ContentSinglePost";
import Comment from "../Comment/Comment";
interface Params {
  id?: string;
}
const snackbar: SnackbarOrigin = {
  vertical: "top",
  horizontal: "right",
};
const SinglePostS = styled.div`
  .post {
    & img {
      width: 100%;
      margin-top: 2rem;
    }
    h1 {
      display: inline;
    }
    p {
      text-align: justify;
      line-height: 33px;
      color: $color_text;
    }
    h3 {
      margin: 0.5rem 0;
    }
    .comments {
      img {
        margin-top: 0 !important;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;
const SinglePost = () => {
  let { id } = useParams<Params>();
  const snack = (
    <Snackbar duration={1500} position={snackbar}>
      <Alert variant="filled" severity="success">
        متن کپی شد
      </Alert>
    </Snackbar>
  );
  return (
    <SinglePostS>
      {snack}
      <Box mb="20px" mt="10px">
        <Breadcrumb
          link={[
            { title: "خانه", to: "/" },
            { title: "پست", to: "/post" },
            { title: "عنوان پست", to: `/post/${id}`, isActive: true },
          ]}
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item xl={9} lg={9} md={7} sm={7} xs={12} className="post">
          <ContentSinglePost title="عنوان پست" image={Image}>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>
            <Typography component="h3" variant="h5">
              عنوان بخش دوم
            </Typography>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>
          </ContentSinglePost>
          <Comment className="comments" />
        </Grid>
        <Grid item xl={3} lg={3} md={5} sm={5} xs={12}>
          <InfoSinglePost
            like={15}
            comment={7}
            view={39}
            smallLink="SmallLink.com"
            createDate="1400/1/1"
          />
        </Grid>
      </Grid>
    </SinglePostS>
  );
};

export default SinglePost;
