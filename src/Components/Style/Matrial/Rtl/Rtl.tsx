import React, { FC } from "react";
import { createMuiTheme } from "@material-ui/core";
import rtl from "jss-rtl";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  MuiThemeProvider,
} from "@material-ui/core/styles";
const Rtl: FC = (props) => {
  const theme = createMuiTheme({
    direction: "rtl",
  });
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </StylesProvider>
  );
};

export default Rtl;
