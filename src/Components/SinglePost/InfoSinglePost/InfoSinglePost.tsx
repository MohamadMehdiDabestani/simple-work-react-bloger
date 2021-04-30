import { useContext, FC } from "react";
import { Typography, Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Context } from "../../../Context/Context";
import styled from "styled-components";
interface Props {
  like: number;
  comment: number;
  view: number;
  createDate: string;
  smallLink: string;
}
const InfoSinglePostS = styled.div`
  position: sticky;
  top: 15px;
  transition: all 0.2s ease-in-out;
  padding: 15px;
  ul li {
    list-style: none;
    margin: 10px 0;
    i {
      margin-left: 10px;
      line-height: 0;
    }
  }
  .copyText {
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #e6e6f7;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      overflow-x: scroll;
    }
    i {
      font-size: 20px;
      cursor: pointer;
      line-height: 0;
      margin-left: 10px;
    }
  }
`;
const InfoSinglePost: FC<Props> = (props) => {
  const { setOpenModal } = useContext(Context);

  const openSnack = () => {
    setOpenModal(true);
  };
  return (
    <InfoSinglePostS>
      <ul>
        <li>
          <Button fullWidth>
            <i className="fi-rr-eye"></i>
            بازدید : {props.view}
          </Button>
        </li>
        <li>
          <Button fullWidth>
            <i className="fi-rr-calendar"></i>
            تاریخ ثبت : {props.createDate}
          </Button>
        </li>
        <li>
          <Button fullWidth>
            <i className="fi-rr-heart"></i>
            تعداد لایک : {props.like}
          </Button>
        </li>
        <li>
          <Button fullWidth>
            <i className="fi-rr-comment-alt"></i>
            تعداد بازخورد : {props.comment}
          </Button>
        </li>
      </ul>
      <Typography>لینک کوتاه :</Typography>
      <div className="copyText">
        <CopyToClipboard text={props.smallLink} onCopy={openSnack}>
          <i className="fi-rr-duplicate"></i>
        </CopyToClipboard>
        <p>{props.smallLink}</p>
      </div>
    </InfoSinglePostS>
  );
};

export default InfoSinglePost;
