
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import MyButton from "../Style/Matrial/Button/MyButton";

import TextField from "@material-ui/core/TextField";

import {Helmet} from 'react-helmet'
const RegisterS = styled.div`
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
      margin-top: 15px;
    }
  }
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("یک ایمیل معتبر وارد کنید")
    .required("یک ایمیل وارد کنید"),
  userName: yup.string().required("یک نام کاربری وارد کنید"),
  password: yup
    .string()
    .min(8, "رمز عبور باید بیشتر از 8 رقم باشد")
    .required("رمز عبور را وراد کنید"),
  rePassword: yup
    .string()
    .min(8, "تکرار رمز عبور باید بیشتر از 8 رقم باشد")
    .required("تکرار رمز عبور را وراد کنید")
    .oneOf(
      [yup.ref("password"), null],
      "تکرار رمز عبور با رمز عبور مغایرت دارد"
    ),
});
const Register = () => {
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rePassword: "",
      userName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <RegisterS>
      <Helmet>
        <title>بلاگر - ثبت نام در سایت</title>
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
          id="email"
          name="email"
          label="ایمیل"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="userName"
          name="userName"
          label="نام کاربری"
          variant="filled"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          fullWidth
          variant="filled"
          id="password"
          name="password"
          label="رمز عبور"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          variant="filled"
          id="rePassword"
          name="rePassword"
          label="تکرار رمز عبور"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
          type="password"
          helperText={formik.touched.rePassword && formik.errors.rePassword}
        />
        <MyButton type="BlueLight" btnType="submit">
          ثبت نام
        </MyButton>
      </form>
    </RegisterS>
  );
};
export default Register;
