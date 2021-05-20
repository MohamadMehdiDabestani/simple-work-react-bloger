import { useState , Fragment } from "react";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";
import MyButton from "../Style/Matrial/Button/MyButton";
import { Box } from "@material-ui/core";
import styled from "styled-components";
const TextEditorS = styled.div`
  height: 350px;
  overflow: visible;
  margin-bottom: 45px;
  text-align: right;
  direction: rtl;
  & > :last-child > :first-child {
    padding-top: 20px;
    &::before {
      right: 15px;
      left: unset;
    }
  }
  & > :first-child > :first-child {
    svg {
      right: unset !important;
      left: 0 !important;
    }
  }
  ul,
  ol {
    float: right;
    display: block;
    width: 100%;
    text-align: right;
    li::before {
      margin-left: 0 !important;
    }
  }
`;
const TextEditor = () => {
  const [text, setText] = useState("");
  const change = (html: string) => {
    setText(html);
    console.log("html", html);
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  const click = () => {
    if (text.length !== 0) {
      console.log("request" , text);
    }
  };
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/style/Editor/quill.snow.css" />
      </Helmet>
      <TextEditorS
        as={ReactQuill}
        theme="snow"
        modules={modules}
        formats={formats}
        value={text}
        onChange={change}
        placeholder="نظر شما چیست؟"
      />
      <Box margin="70px 0 20px 0" textAlign="right">
        <MyButton type="Blue" onClick={click}>
          ارسال
        </MyButton>
      </Box>
    </Fragment>
  );
};

export default TextEditor;
