import { Paper, Typography, ButtonGroup } from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Style/Matrial/Button/MyButton";
import styled from "styled-components";
interface Props {
  logo?: string;
  followers?: number;
  id?: number;
  title?: string;
  numberOfPost?: number;
}
const PageS = styled.div`
  width: 100%;
  height: auto;
  padding-top: 3rem;
  background: transparent;
  position: relative;
  img {
    position: absolute;
    top: 5%;
    right: 33%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0px 6px 20px 2px #7d7d7d85;
    object-fit: cover;
  }
  .contentPage {
    padding: 55px 10px 15px;
    background: white;
    & p:first-child {
      font-size: 17px;
      font-weight: bold;
    }
    & p:nth-child(2) {
      color: #333;
      line-height: 35px;
      margin-top: 10px;
      font-size: 14px;
    }
    & > div {
      margin: 10px auto 0 !important;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        box-shadow: none !important;
        &:hover {
          box-shadow: 0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024,
            0px 1px 10px 0px #0000001f !important;
        }
      }
      & button:first-child {
        border-radius: 0 5px 5px 0;
        border-left: 1px solid #00545d;
      }
      & button:last-child {
        border-radius: 5px 0 0 5px;
      }
      & a {
        color: white !important;
      }
    }
  }
`;
const Page: FC<Props> = (props) => {
  return (
    <PageS>
      <img src={props.logo} alt="" />
      <Paper>
        <div className="contentPage">
          <Typography component="p">نام صفه : {props.title}</Typography>
          <Typography component="p">
            دنبال کننده : {props.followers} <br /> پست : {props.numberOfPost}
          </Typography>
          <ButtonGroup>
            <MyButton type="Green" isSmall>
              <Link to={`/Page/${props.id}`}>صفه</Link>
            </MyButton>
            <MyButton type="Green" isSmall>
              دنبال کردن
            </MyButton>
          </ButtonGroup>
        </div>
      </Paper>
    </PageS>
  );
};

export default Page;
