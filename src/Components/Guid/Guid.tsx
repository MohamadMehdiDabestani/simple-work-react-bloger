import { Grid } from "@material-ui/core";
import { FC } from "react";

const Guid: FC = (props) => {
  console.log('render Guid');
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid container>{props.children}</Grid>
    </Grid>
  );
};

export default Guid;
