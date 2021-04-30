import { Box, Grid, Typography } from "@material-ui/core";
import Page from "../../Page/Page";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/3424974.jpg";
import { LastBlogPostC } from "../LastBlogPost/LastBlogPost";
const PropsTopPage = {
  id: 5,
  logo: Logo,
  followers: 250,
  title: "چغندر",
  numberOfPost: 50,
};
const TopPages = () => {
  return (
    <LastBlogPostC>
      <Box mt="5rem">
        <Typography component="p" variant="h5" className="title">
          پرطرفدار ترین صفه ها
          <Typography component="span" className="left">
            <Link to="/pages">همه ی صفه ها</Link>
            <i className="fi-rr-arrow-left"></i>
          </Typography>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
          <Page {...PropsTopPage} />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
          <Page {...PropsTopPage} />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
          <Page {...PropsTopPage} />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
          <Page {...PropsTopPage} />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
          <Page {...PropsTopPage} />
        </Grid>
      </Grid>
    </LastBlogPostC>
  );
};

export default TopPages;
