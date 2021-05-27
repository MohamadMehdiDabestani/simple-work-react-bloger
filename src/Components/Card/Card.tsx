import { FC, memo } from "react";
import {
  Card as CardM,
  CardHeader,
  Typography,
  Avatar,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MyButton from "../Style/Matrial/Button/MyButton";
import styled from "styled-components";

import Share from "../Icon/Share";
import Like from "../Icon/Like";
export interface Props {
  postDescription: string;
  createDate: string;
  postTitle: string;
  imageName: string;
  postId: number;
  avatarName: string;
  altImage: string;
  userName: string;
}
const CardS = styled.div`
  .imgaCard {
    height: 250px;
  }
  .headerCard {
    & > div {
      margin-right: 0;
    }
    .logoCrad {
      margin-left: 1rem;
    }
    & > :last-child {
      & > :first-child {
        margin-bottom: 5px;
        font-size: 18px;
      }
    }
  }
  .cardText {
    text-align: justify;
    margin-bottom: 15px !important;
    color: var(--color_text) !important;
    line-height: 25px !important;
  }
  .likeAndShare {
    button {
      margin-left: 10px;
    }
  }
`;
const Card: FC<Props> = (props) => {
  console.log("render card");
  return (
    <CardS as={CardM}>
      <CardHeader
        className="headerCard"
        avatar={
          <Avatar className="logoCrad" aria-label="recipe">
            <img src={props.imageName} />
          </Avatar>
        }
        title={props.postTitle}
        subheader={props.createDate}
      />
      <CardMedia
        image={props.imageName}
        title={props.altImage}
        className="imgaCard"
      />
      <CardContent>
        <Typography
          className="cardText"
          variant="body2"
          color="textSecondary"
          component="p"
          noWrap
        >
          {props.postDescription}
        </Typography>
        <Box
          textAlign="left"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to={`/post/${props.postId}`}>
            <MyButton isSmall type="BlueLight" className="right">
              ادامه
            </MyButton>
          </Link>
          <Box display="inline" className="likeAndShare">
            <Share
              items={[
                { title: "Google+", link: "#" },
                { title: "Telegram", link: "#" },
              ]}
            />
            <Like />
          </Box>
        </Box>
      </CardContent>
    </CardS>
  );
};

export default memo(Card);
