import { FC } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const ListS = styled.ul`
  li {
    display: inline;
    margin: 0 10px;
    span {
      color: #505050;
    }
    .active {
      button {
        background: #0000000a;
      }
      span {
        color: #000;
      }
    }
  }
  &.small {
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 150px;
    background: white;
    z-index: 5;
    padding: 25px 0;
    box-shadow: 0px 8px 10px -5px #00000033, 0px 16px 24px 2px #00000024,
      0px 6px 30px 5px #0000001f;
    transition: all 0.3s ease-in-out;
    li {
      display: block;
      margin: 10px 0;
      * {
        display: block;
        width: 100%;
      }
    }
    &.active {
      right: 0;
    }
  }
`;
interface Props {
  isSmall: boolean;
  showHeader: boolean;
  clickCloseHeader: () => void;
}

const List: FC<Props> = (props) => {
  const ListLi = [
    {
      title: "بلاگر شو",
      url: "/guid",
    },
    {
      title: "بهترین ها",
      url: "/best",
    },
    {
      title: "جستجو",
      url: "/search",
    },
    {
      title: "پشتیبانی",
      url: "/support",
    },
  ];
  return (
    <ListS
      className={`${props.isSmall && "small"} ${props.showHeader && "active"}`}
    >
      {ListLi.map((li, id: number) => (
        <li key={id} onClick={props.clickCloseHeader}>
          <NavLink to={li.url} activeClassName="active">
            <Button>{li.title}</Button>
          </NavLink>
        </li>
      ))}
    </ListS>
  );
};

export default List;
