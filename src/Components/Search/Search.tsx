import { useContext } from "react";
import {
  Grid,
  Paper,
  Box,
  TextField,
  FormControlLabel,
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MyButton from "../Style/Matrial/Button/MyButton";
import Card from "../Card/Card";
import Image from "../../Assets/3424974.jpg";

import styled from "styled-components";
import * as yup from "yup";
import { useFormik } from "formik";
import { SnackbarOrigin } from "@material-ui/core";
import Snackbar from "../Snackbar/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Context } from "../../Context/Context";
import { Helmet } from "react-helmet";
const SearchS = styled.div`
  .searchField {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border-radius: 5px 0 0 5px;
      padding: 28px 30px;
    }
    & > div {
      width: 85%;
    }
  }
`;
const validation = yup.object({
  title: yup.string(),
  category: yup.string(),
});
const positionSnack: SnackbarOrigin = {
  vertical: "top",
  horizontal: "center",
};
const Search = () => {
  const { setOpenModal } = useContext(Context);
  const snack = (
    <Snackbar position={positionSnack} duration={2000}>
      <Alert variant="filled" severity="error">
        یک متن وارد کنید و یا دسته بندی ای را انتخاب کنید
      </Alert>
    </Snackbar>
  );
  console.log("render Search");
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      if (values.title.trim() === "" && values.category.trim() === "") {
        setOpenModal(true);
      } else {
        alert(JSON.stringify(values));
      }
    },
  });
  return (
    <SearchS>
      <Helmet>
        <title>بلاگر - جستجو در سایت</title>
      </Helmet>
      {snack}
      <Breadcrumb
        link={[
          { title: "خانه", to: "/" },
          { title: "جستجو", to: "/search", isActive: true },
        ]}
      />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box mt="20px" p="1rem" component={Paper}>
              <div className="searchField">
                <TextField
                  label="عنوان پست را وارد کنید"
                  variant="filled"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <MyButton type="Green" btnType="submit">
                  جستجو
                </MyButton>
              </div>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box p="1rem" component={Paper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">دسته بندی</FormLabel>
                <RadioGroup aria-label="Category" name="Category">
                  <FormControlLabel
                    value="سرگرمی"
                    control={<Radio color="primary" />}
                    label="سرگرمی"
                    name="category"
                    onChange={formik.handleChange}
                  />
                  <FormControlLabel
                    value="ورزشی"
                    control={<Radio color="primary" />}
                    label="ورزشی"
                    name="category"
                    onChange={formik.handleChange}
                  />
                  <FormControlLabel
                    value="خبری"
                    control={<Radio color="primary" />}
                    label="خبری"
                    onChange={formik.handleChange}
                    name="category"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Card
                    postDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    postTitle="Title"
                    createDate="1400/1/1"
                    imageName={Image}
                    avatarName={Image}
                    postId={2}
                    altImage="Alt Image"
                    userName="User Name"
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Card
                    postDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    postTitle="Title"
                    createDate="1400/1/1"
                    imageName={Image}
                    avatarName={Image}
                    postId={2}
                    altImage="Alt Image"
                    userName="User Name"
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Card
                    postDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    postTitle="Title"
                    createDate="1400/1/1"
                    imageName={Image}
                    avatarName={Image}
                    postId={2}
                    altImage="Alt Image"
                    userName="User Name"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </SearchS>
  );
};

export default Search;
