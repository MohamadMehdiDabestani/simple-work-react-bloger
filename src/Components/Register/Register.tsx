import { FormEvent, Fragment, useState, ChangeEvent, useContext } from "react";
import { TextField } from "@material-ui/core";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MyButton from "../Style/Matrial/Button/MyButton";
import styled from "styled-components";
import {
  Form,
  checkValidateEl,
  checkMinlength,
  checkValue,
  checkVlidateElForError,
} from "../Util/Util";
import { Context } from "../../Context/Context";

interface State {
  email: Form;
  userName: Form;
  password: Form;
  rePassword: Form;
}
interface FormElement {
  key: string;
  el: Form;
}
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
    .error {
      font-size: 13px;
      color: var(--color_red);
      margin-bottom: 10px;
    }
  }
`;
const Register = () => {
  console.log("render register");

  const [formState, setFormState] = useState<State>({
    email: {
      name: "email",
      type: "email",
      isValid: false,
      label: "ایمیل",
      errorText: "",
      value: "",
      error: false,
    },
    userName: {
      name: "userName",
      type: "text",
      isValid: false,
      label: "نام کاربری",

      errorText: "",
      value: "",
      error: false,
    },
    password: {
      name: "password",
      type: "password",
      isValid: false,
      errorText: "",
      label: "رمز عبور",
      minLength: 4,
      errorMinLength: "",
      value: "",
      error: false,
    },
    rePassword: {
      name: "rePassword",
      minLength: 4,
      type: "password",
      isValid: false,
      label: "تکرار رمز عبور",
      errorMinLength: "",
      errorText: "",
      error: false,
      value: "",
    },
  });
  const { isErrorFormValidate, setIsErrorFormValidate } = useContext(Context);
  const checkRePassword = (el: Form, formStateUpdate: State, val: string) => {
    val === formStateUpdate.password.value
      ? (el.errorText = "")
      : (el.errorText = `رمز عبور با تکرار رمز عبور مغایرت دارد`);
  };
  const changeHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let valueInput = e.target.value;

    const formStateUpdate = {
      ...formState,
    };
    const formStateEl = {
      ...formState[e.target.name as keyof State],
    };

    formStateEl.value = valueInput;
    formStateEl.errorText = checkValue(formStateEl, valueInput);
    formStateEl.error = checkVlidateElForError(formStateEl);
    formStateEl.isValid = checkValidateEl(formStateEl);
    if (formStateEl.minLength) {
      formStateEl.errorMinLength = checkMinlength(
        formStateEl,
        valueInput.length
      );
    }
    if (e.target.name === "rePassword") {
      checkRePassword(formStateEl, formStateUpdate, valueInput);
    }

    formStateUpdate[e.target.name as keyof State] = formStateEl;
    setFormState(formStateUpdate);
    let valid = true;
    for (let key in formState) {
      valid = formState[key as keyof State].isValid && valid;
    }
    setIsErrorFormValidate(valid);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isErrorFormValidate) {
      console.log("sub el => ", formState);
    } else {
      console.log("else el => ", formState);
      const formStateUpdate = {
        ...formState,
      };

      for (let key in formStateUpdate) {
        let el = {
          ...formState[key as keyof State],
        };
        if (!el.isValid) {
          el.errorText = checkValue(el, el.value.toString());
          el.error = checkVlidateElForError(el);
          if (el.minLength) {
            el.errorMinLength = checkMinlength(el, el.minLength);
          }

          formStateUpdate[key as keyof State] = el;
        }
        setFormState(formStateUpdate);
      }
    }
  };

  const formElement: FormElement[] = [];
  for (let key in formState) {
    formElement.push({
      key: key,
      el: formState[key as keyof State],
    });
  }
  return (
    <RegisterS>
      <Breadcrumb
        link={[
          { title: "خانه", to: "/" },
          { title: "ورود", to: "/login", isActive: true },
        ]}
      />
      <form onSubmit={submitHandler} className="form">
        {formElement.map((input: FormElement) => (
          <Fragment key={input.key}>
            <TextField
              value={input.el.value}
              onChange={changeHandler}
              name={input.el.name}
              type={input.el.type}
              label={input.el.label}
              variant="filled"
              error={input.el.error}
            />
            <p className="error">
              {input.el.errorText}
              <p className="error">{input.el.errorMinLength}</p>
            </p>
          </Fragment>
        ))}

        <MyButton btnType="submit" type="BlueLight">
          ثبت نام
        </MyButton>
      </form>
    </RegisterS>
  );
};

export default Register;
