import { Box, Grid, Typography, Container } from "@material-ui/core";
import styled from "styled-components";
import Image from "../../Assets/email-pattern.png"
const FooterS = styled.footer`
  width: 100%;
  height: auto;
  background-image: url(${Image});
  color: black;
  margin-top: 50px;
  background-attachment: fixed;
  .textFooter {
    line-height: 33px;
  }
`;
const Footer = () => {
  console.log("render footer");
  return (
    <FooterS>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Box p="15px">
              <Typography component="p" variant="h5">
                درباره ی من
              </Typography>
              <Box mt="15px">
                <Typography component="p" align="center" className="textFooter">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  لورم ایپسوم
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Box p="15px">
              <Typography component="p" variant="h5">
                ارتباط با من
              </Typography>
              <Box mt="15px">
                <Typography
                  component="p"
                  align="center"
                  className="textFooter"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  لورم ایپسوم
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Box p="15px">
              <Typography component="p" variant="h5">
                لینک های مفید
              </Typography>
              <Box mt="15px">
                <Typography
                  component="p"
                  align="center"
                  className="textFooter"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  لورم ایپسوم
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  );
};

export default Footer;
