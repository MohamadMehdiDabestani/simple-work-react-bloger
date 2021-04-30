import { FormEvent, ChangeEvent, useContext, useState } from "react";
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
import { Context } from "../../Context/Context";
import styled from "styled-components";
interface State {
  title?: string;
  category?: string;
  errorText?: string;
}
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
  p.error {
    color: $color_red;
    font-size: 13px;
    margin-right: 2%;
  }
`;
const Search = () => {
  console.log("render Search");
  const { setIsErrorFormValidate, isErrorFormValidate } = useContext(Context);
  const [formState, setFormState] = useState<State>({
    title: "",
    category: "",
    errorText: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.category === "" && formState.title === "") {
      setFormState({
        ...formState,
        errorText: "متنی را وارد کنید",
      });
      setIsErrorFormValidate(true);
    } else {
      setFormState({
        ...formState,
        errorText: "",
      });
      setIsErrorFormValidate(false);
      console.log("request to back", formState);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 0) {
      console.log("if");
      setIsErrorFormValidate(false);
      setFormState({
        ...formState,
        errorText: "",
        [e.target.name as keyof State]: e.target.value,
      });
    }
  };
  return (
    <SearchS>
      <Breadcrumb
        link={[
          { title: "خانه", to: "/" },
          { title: "جستجو", to: "/search", isActive: true },
        ]}
      />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box mt="20px" p="1rem" component={Paper}>
              <div className="searchField">
                <TextField
                  label="عنوان پست را وارد کنید"
                  variant="filled"
                  name="title"
                  onChange={handleChange}
                  value={formState.title}
                  error={isErrorFormValidate}
                />
                <MyButton type="Green" btnType="submit">
                  جستجو
                </MyButton>
              </div>
              <p className="error">{formState.errorText}</p>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box p="1rem" component={Paper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">دسته بندی</FormLabel>
                <RadioGroup
                  aria-label="Category"
                  name="Category"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="سرگرمی"
                    control={<Radio color="primary" />}
                    label="سرگرمی"
                    name="category"
                  />
                  <FormControlLabel
                    value="ورزشی"
                    control={<Radio color="primary" />}
                    label="ورزشی"
                    name="category"
                  />
                  <FormControlLabel
                    value="خبری"
                    control={<Radio color="primary" />}
                    label="خبری"
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
                    cardText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    cardTitle="Title"
                    cardDate="1400/1/1"
                    logo={Image}
                    link="/Post/5501"
                    imageTitle="Alt Image"
                    cardImage={Image}
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Card
                    cardText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    cardTitle="Title"
                    cardDate="1400/1/1"
                    logo={Image}
                    link="/Post/5501"
                    imageTitle="Alt Image"
                    cardImage={Image}
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Card
                    cardText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    cardTitle="Title"
                    cardDate="1400/1/1"
                    logo={Image}
                    link="/Post/{id}"
                    imageTitle="Alt Image"
                    cardImage={Image}
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
