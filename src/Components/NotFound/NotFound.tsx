import { Helmet } from "react-helmet";
import Image from "../../Assets/NotFound.svg";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Button from "../Style/Matrial/Button/MyButton";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
const NotFoundS = styled.div`
  text-align: center;
  h4 {
    color: #131313;
  }
  button {
    margin-top: 40px;
    font-size: 17px;
    font-weight: 600;
  }
`;
const NotFound = () => {
  return (
    <NotFoundS>
          <Breadcrumb
          link={[
            { title: "خانه", to: "/" },
            { title: "صفه ای یافت نشد", to: "/notfound", isActive: true },
          ]}
        />
      <Helmet>
        <title>بلاگر - صفه ای یافت نشد</title>
      </Helmet>
      <img src={Image} alt="Not found page" />
      <Typography variant="h4">صفه ای یافت نشد !</Typography>
      <Link to="/">
        <Button type="Blue">بازگشت به صفه ی اصلی</Button>
      </Link>
    </NotFoundS>
  );
};
export default NotFound;
