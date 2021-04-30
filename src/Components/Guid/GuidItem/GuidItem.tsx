import { Grid, GridSize } from "@material-ui/core";
import React from "react";
interface Props {
  xl?: GridSize;
  lg?: GridSize;
  md?: GridSize;
  sm?: GridSize;
  xs?: GridSize;
}
const GuidItem: React.FC<Props> = (props) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

export default GuidItem;
