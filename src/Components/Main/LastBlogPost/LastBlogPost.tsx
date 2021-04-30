import { Box, Grid, Typography } from "@material-ui/core";
import CardList from "./CardList/CardList";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const LastBlogPostC = styled.div`
  & p > span {
    font-size: 16px;
    a,
    i {
      transition: color 0.2s linear;
    }
    a {
      color: #222;
    }
    i {
      margin-top: 3px;
      float: left;
      margin-right: 7px;
    }
    &:hover a,
    &:hover i {
      color: var(--color_five);
    }
  }
`;
const LastBlogPost = () => {
  return (
    <LastBlogPostC>
      <Box mb="3rem">
        <Typography component="p" variant="h5" className="title">
          آخرین پست های بلاگ
          <Typography component="span" className="left">
            <Link to="/posts">همه ی پست ها</Link>
            <i className="fi-rr-arrow-left"></i>
          </Typography>
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <CardList />
      </Grid>
    </LastBlogPostC>
  );
};

export default LastBlogPost;
