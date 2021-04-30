import { useEffect, useState } from "react";
import List from "./HeaderElement/List/List";
import styled from "styled-components";
import Login from "./HeaderElement/Login/Login";
const HeaderS = styled.div`
  .header {
    width: 100%;
    height: auto;
    background: transparent;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    i {
      cursor: pointer;
    }
  }
  .activeSmallHeader {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.2);
    right: 0;
    z-index: 4;
  }
`;
const Header = () => {
  console.log("render header");
  const [smallHeader, setSmallHeader] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 760) {
      setSmallHeader(true);
    }
  }, []);
  const clickHeader = () => {
    setShowHeader(true);
  };
  const clickCloseHeader = () => {
    setShowHeader(false);
  };
  return (
    <HeaderS>
      {showHeader && (
        <div className="activeSmallHeader" onClick={clickCloseHeader}></div>
      )}
      <div className="header">
        {smallHeader && (
          <i className="fi-rr-menu-burger" onClick={clickHeader}></i>
        )}
        <List
          isSmall={smallHeader}
          showHeader={showHeader}
          clickCloseHeader={clickCloseHeader}
        />
        <Login />
      </div>
    </HeaderS>
  );
};

export default Header;
