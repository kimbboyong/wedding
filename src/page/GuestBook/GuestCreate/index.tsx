import { Box, Button, CircularProgress, TextField } from "@mui/material";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../../firebase/firebase";

const GuestCreate = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContent, setUserContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const GuestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    setLoading(true);
    if (userName === "" || userPassword === "" || userContent === "") {
      setLoading(false);
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
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const BtnStyle = {
    width: "100%",
    backgroundColor: "#000",
    ...(success && {
      "&:hover": {
        bgcolor: "#000",
        backgroundColor: "#000",
      },
    }),
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

      <Box sx={{ position: "relative" }}>
        <InputButton
          type="submit"
          sx={BtnStyle}
          variant="contained"
          disabled={loading}
        >
          작성
        </InputButton>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              width: "100%",
              color: "#fff",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
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
