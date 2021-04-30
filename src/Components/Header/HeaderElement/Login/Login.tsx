import { useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../../Context/Context";
import Share from "../../../Icon/Share";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
const textBtn = (
  <Fragment>
    <Typography component="span">نام کاربری</Typography>
    <i className="fi-rr-angle-small-down"></i>
  </Fragment>
);
const LoginS = styled.span`
  &,
  a {
    color: #505050;
    font-size: 14px;
    margin: 0 5px;
  }
  a:hover {
    color: var(--color_two);
  }
  a.active {
    color: var(--color_one);
  }
  .btnAccount {
    border-radius: 10px !important;
    width: auto !important;

    & > :first-child {
      margin: 0 20px 7px 15px !important;
      color: #222;
      span {
        margin-left: 7px;
      }
    }
  }
`;
const Login = () => {
  const { isLogin } = useContext(Context);
  return (
    <LoginS>
      {isLogin ? (
        <Share
          items={[
            { title: "پست های من", link: "#" },
            { title: "ساخت پست", link: "#" },
            { title: "خروج از حساب کاربری", link: "#" },
          ]}
          iconBtn={textBtn}
          className="btnAccount"
        />
      ) : (
        <Fragment>
          <NavLink to="/Register" activeClassName="active">
            ثبت نام
          </NavLink>
          /
          <NavLink to="/Login" activeClassName="active">
            ورود
          </NavLink>
        </Fragment>
      )}
    </LoginS>
  );
};

export default Login;