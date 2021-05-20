import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import MyButton from "../Style/Matrial/Button/MyButton";

import TextField from "@material-ui/core/TextField";
import {Helmet} from 'react-helmet'
const LoginS = styled.div`
  .form {
    margin: 70px auto;
    width: 60%;
    & > div {
      display: flex;
      margin-top: 20px;
      margin-bottom: 5px;
    }
    button {
      font-size: 16px;
    }
   
  }
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("یک ایمیل معتبر وارد کنید")
    .required("یک ایمیل وارد کنید"),
  password: yup
    .string()
    .min(8, "رمز عبور باید بیشتر از 8 رقم باشد")
    .required("رمز عبور را وراد کنید"),
});
const Login = () => {
  console.log("render login");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <LoginS>
      <Helmet>
        <title>بلاگر - ورود به سایت</title>
      </Helmet>
      <Breadcrumb
        link={[
          { title: "خانه", to: "/" },
          { title: "ورود", to: "/login", isActive: true },
        ]}
      />
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="email"
          id="email"
          label="ایمیل"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          name="password"
          id="password"
          type="password"
          label="رمز عبور"
          variant="filled"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <MyButton type="BlueLight" btnType="submit">
        ورود
      </MyButton>
      </form>
    </LoginS>
  );
};

export default Login;
