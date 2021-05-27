import { Fragment, useState, useEffect, useContext } from "react";
import Card from "../../../Card/Card";
import { Props } from "../../../Card/Card";
import { Grid } from "@material-ui/core";
import axios from "../../../../Axios/";
import AxiosRequestError from "../../../../Container/Error/AxiosRequestError";
import { Context } from "../../../../Context/Context";
import { CustomAxiosError } from "../../../../util/Util";
const CardList = () => {
  const { setOpenModal, setIsRequestError } = useContext(Context);
  const [list, setList] = useState<Props | null>(null);
  useEffect(() => {
    if (!list) {
      axios
        .get("/GetAllPost")
        .then((res) => {
          let result : Props = res.data;
          setList(result);
        })
        .catch((err: CustomAxiosError) => {
          setIsRequestError(err);
        });
      }
    }, []);
    console.log('list' , list);
  return (
    <Fragment>
      {/* {CardsList.map((c: Props, idx: number) => (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={idx}>
          <Card {...c} />
        </Grid>
      ))} */}
      <p>last post</p>
    </Fragment>
  );
};

export default AxiosRequestError(CardList);
