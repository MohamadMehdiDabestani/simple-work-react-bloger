import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface LinkOfProps {
  title: string;
  to: string;
  isActive?: boolean;
}
interface Props {
  link: LinkOfProps[];
}
const BreadcrumbS = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  i {
    line-height: 0;
  }
  a {
    color: #707070;
    font-size: 14px;
    &.active {
      color: #222;
    }
  }
`;
const Breadcrumb: FC<Props> = (props) => {
  console.log("render Breadcrumb");
  return (
    <BreadcrumbS as={Breadcrumbs}
      separator={<i className="fi-rr-angle-small-left"></i>}
    >
      {props.link.map((l: LinkOfProps, idx: number) => (
        <Link to={l.to} className={l.isActive ? "active" : ""} key={idx}>
          {l.title}
        </Link>
      ))}
    </BreadcrumbS>
  );
};

export default Breadcrumb;
