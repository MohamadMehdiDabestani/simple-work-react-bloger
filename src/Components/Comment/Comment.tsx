import { FC } from "react";
import { Box, Paper } from "@material-ui/core";
import Items from "./Items";
import Img from "../../Assets/3424974.jpg";
import TextEditor from "../TextEditor/TextEditor";
interface Props {
  className?: string;
}
const comments = [
  {
    userName: "UserName",
    text: "It`s just for test",
    createDate: "1400/1/1",
    logo: Img,
    answer: "It`s a answer",
    id: 1,
  },
  {
    userName: "UserName",
    text: "It`s just for test",
    createDate: "1400/1/1",
    id: 1,
    logo: Img,
  },
  {
    id: 1,
    userName: "UserName",
    text: "It`s just for test",
    createDate: "1400/1/1",
    logo: Img,
    answer: "It`s a answer",
  },
];
const Comment: FC<Props> = (props) => {
  return (
    <Box mt="2rem" padding="1rem" component={Paper} className={props.className}>
      <TextEditor />
      <Items Items={comments} />
    </Box>
  );
};

export default Comment;
