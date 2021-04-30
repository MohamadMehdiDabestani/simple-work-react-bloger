import { TextField } from "@material-ui/core";
import { Fragment, useState, ChangeEvent, FormEvent } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MyButton from "../Style/Matrial/Button/MyButton";
import {
  Form,
  checkValue,
  checkVlidateElForError,
  checkValidateEl,
  checkMinlength,
} from "../Util/Util";
import styled from "styled-components";
interface State {
  email: Form;
  password: Form;
}
interface FormElement {
  key: string;
  el: Form;
}
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
    .error {
      font-size: 13px;
      color: var(--color_red);
      margin-bottom: 10px;
    }
  }
`;
const Login = () => {
  console.log("render login");
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
    password: {
      name: "password",
      type: "password",
      isValid: false,
      label: "رمز عبور",
      errorText: "",
      value: "",
      error: false,
      minLength: 4,
      errorMinLength: "",
    },
  });
  const [isValid, setIsValid] = useState<boolean>();
  const listOfStateEl: FormElement[] = [];
  for (let key in formState) {
    listOfStateEl.push({
      key: key,
      el: formState[key as keyof State],
    });
  }
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

    formStateUpdate[e.target.name as keyof State] = formStateEl;
    setFormState(formStateUpdate);
    let valid = true;
    for (let key in formState) {
      valid = formState[key as keyof State].isValid && valid;
    }
    setIsValid(valid);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
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
          el.errorText = checkValue(el, el.value);
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
  return (
    <LoginS>
      <Breadcrumb
        link={[
          { title: "خانه", to: "/" },
          { title: "ورود", to: "/login", isActive: true },
        ]}
      />
      <form className="form" onSubmit={submitHandler}>
        {listOfStateEl.map((input: FormElement) => (
          <Fragment key={input.key}>
            <TextField
              key={input.key}
              value={input.el.value}
              label={input.el.label}
              variant="filled"
              onChange={changeHandler}
              error={input.el.error}
              name={input.el.name}
              type={input.el.type}
            />
            <p className="error">{input.el.errorText}</p>
            <p className="error">{input.el.errorMinLength}</p>
          </Fragment>
        ))}
        <MyButton type="BlueLight" btnType="submit">
          ورود
        </MyButton>
      </form>
    </LoginS>
  );
};

export default Login;
