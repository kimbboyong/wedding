import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase/firebase";

const GuestCreate = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContent, setUserContent] = useState("");

  const GuestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName === "" || userPassword === "" || userContent === "") {
      return alert("공백");
    }
    const date = new Date();
    const formattedDate = `${date.getFullYear() % 100}.${
      date.getMonth() + 1
    }.${date.getDate()}`;

    try {
      await addDoc(collection(db, "posts"), {
        name: userName,
        password: userPassword,
        content: userContent,
        date: formattedDate,
        sortDate: new Date(),
      });

      setUserName("");
      setUserPassword("");
      setUserContent("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Box component="form" onSubmit={GuestSubmit} sx={{ marginBottom: "30px" }}>
      <GuestDivider>
        <InputTextField
          id="demo-helper-text-aligned"
          label="이름을 작성해주세요."
          multiline
          maxRows={12}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputTextField
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호를 입력해주세요."
          type="password"
          id="password"
          value={userPassword}
          sx={{ marginTop: 0 }}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <InputTextField
          id="outlined-multiline-static"
          label="축하의 말을 작성해주세요."
          multiline
          rows={4}
          value={userContent}
          onChange={(e) => setUserContent(e.target.value)}
        />
      </GuestDivider>
      <InputButton
        type="submit"
        sx={{ width: "100%", backgroundColor: "#000" }}
        variant="contained"
      >
        작성
      </InputButton>
    </Box>
  );
};

export default GuestCreate;

const GuestDivider = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const InputTextField = styled(TextField)({
  " &.MuiFormControl-root": {
    marginBottom: "10px",
  },
  "& label.Mui-focused": {
    color: "#89757a",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#89757a",
    },
  },
});

const InputButton = styled(Button)`
  background-color: #000;
  &:hover {
    background-color: #000 !important;
    opacity: 0.8;
  }
`;
