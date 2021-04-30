import { styled as styledMaterial } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FC } from "react";
import styled from "styled-components";
interface Props {
  type: "Blue" | "Red" | "BlueLight" | "RedLight" | "Green" | "Firoz";
  isSmall?: boolean;
  className?: string;
  btnType?: "button" | "submit";
  onClick?: any;
}
const ButtonS = styled.button`
  &.Blue {
    background: var(--color_two) !important;
    &:hover {
      background: #006de2 !important;
    }
  }
  &.Red {
    background: var(--color_red) !important;
    &:hover {
      background: #c42e2e !important;
    }
  }
  &.BlueLight {
    background: var(--color_for) !important;
    &:hover {
      background: #007ebd !important;
    }
  }
  &.RedLight {
    background: var(--color_red_light) !important;
    &:hover {
      background: #f07d7d !important;
    }
  }
  &.btnSmall {
    padding: 0 10px !important;
    height: 35px !important;
  }
  &.Green {
    background: var(--color_five) !important;
    &:hover {
      background: #008894 !important;
    }
  }
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024,
    0px 1px 5px 0px #0000001f;
  &:hover {
    box-shadow: 0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024,
      0px 1px 10px 0px #0000001f;
  }
`;
const MyButton: FC<Props> = (props) => {
  const MyButton = styledMaterial(Button)({
    border: 0,
    borderRadius: 5,
    color: "white",
    height: 45,
    padding: "0 30px",
  });
  let classNameBtn: string | null = null;
  switch (props.type) {
    case "Blue":
      classNameBtn = "Blue";
      break;
    case "Red":
      classNameBtn = "Red";
      break;
    case "BlueLight":
      classNameBtn = "BlueLight";
      break;
    case "RedLight":
      classNameBtn = "RedLight";
      break;
    case "Green":
      classNameBtn = "Green";
      break;
    case "Firoz":
      classNameBtn = "RedLight";
      break;
  }
  return (
    <ButtonS
      as={MyButton}
      type={props.btnType ? props.btnType : "button"}
      className={`${classNameBtn} ${props.isSmall && "btnSmall"} ${
        props.className && props.className
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonS>
  );
};

export default MyButton;
