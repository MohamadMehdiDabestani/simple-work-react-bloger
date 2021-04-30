import { Box, Paper, Typography } from "@material-ui/core";
import Share from "../../Icon/Share";
import Like from "../../Icon/Like";
import styled from "styled-components";
interface Props {
  title: string;
  image: string;
}
const ContentSinglePostS = styled.div`
  & > div > div {
    float: left;
    margin: 10px 0 0 10px;
    button {
      margin: 0 10px;
    }
  }
`;
const ContentSinglePost: React.FC<Props> = (props) => {
  return (
    <ContentSinglePostS as={Box} component={Paper} padding="1rem">
      <Box padding="10px 0 0 10px">
        <Typography component="h1" variant="h4" className="title">
          {props.title}
        </Typography>
        <Box display="inline-block">
          <Like />
          <Share
            items={[
              { title: "Google+", link: "#" },
              { title: "Telegram", link: "#" },
            ]}
          />
        </Box>
      </Box>
      <img src={props.image} alt="" />
      {props.children}
    </ContentSinglePostS>
  );
};

export default ContentSinglePost;
