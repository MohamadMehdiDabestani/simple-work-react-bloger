import { FC } from "react";
import { Box, Paper, Divider } from "@material-ui/core";
import MyButton from "../Style/Matrial/Button/MyButton";
interface Props {
  userName: string;
  createDate: string;
  logo: string;
  text: string;
  answer?: string;
  id: number;
}
const Item: FC<Props> = (props) => {
  const isAnswer = props.answer ? true : false;
  return (
    <Box component={Paper} padding="1rem" marginBottom="35px">
      <Box mb="15px">
        <Box display="inline-block" width="40px" height="40px" mr="20px">
          <img alt={props.userName} src={props.logo} />
        </Box>
        <Box display="inline-block">
          <Box fontSize="18px">{props.userName}</Box>
          <Box fontSize="0.875rem" color="#0000008a">
            {props.createDate}
          </Box>
        </Box>
        <Box display="inline-block" className="left">
          <MyButton className="mr-2" type="Red" isSmall>
            حذف
          </MyButton>
          {!isAnswer && (
            <MyButton className="mr-2" type="Green" isSmall>
              پاسخ
            </MyButton>
          )}
        </Box>
      </Box>
      <Divider />
      <Box mt="15px">
        <p>{props.text}</p>
        {isAnswer && (
          <Box component="section">
            <Box component={Paper} margin="10px" padding="0.5rem">
              <p>{props.answer}</p>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Item;
