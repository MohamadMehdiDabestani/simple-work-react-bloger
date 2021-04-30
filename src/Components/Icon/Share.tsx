import { IconButton, Menu, MenuItem } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Style } from "./Style";
interface Item {
  title: string;
  link: string;
}
interface Props {
  items: Item[];
  iconBtn?: React.ReactNode;
  className?: string;
}
const Share: React.FC<Props> = (props) => {
  const [menu, setMenu] = useState<null | HTMLElement>();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(e.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  return (
    <Fragment>
      <Style
        as={IconButton}
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={props.className && props.className}
      >
        {props.iconBtn ? props.iconBtn : <i className="fi-rr-share"></i>}
      </Style>
      <Menu
        id="menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={handleClose}
      >
        {props.items.map((t: Item, idx: number) => (
          <MenuItem key={idx}>
            <Link to={t.link} className="likeLink">
              {t.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Share;
