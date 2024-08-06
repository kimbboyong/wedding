import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

const GuestCreate = () => {
  const GuestSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={GuestSubmit} sx={{ marginBottom: "30px" }}>
      <GuestDivider>
        <InputTextField
          id="demo-helper-text-aligned"
          label="이름을 작성해주세요."
          multiline
          maxRows={12}
        />
        <InputTextField
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호를 입력해주세요."
          type="password"
          id="password"
          sx={{ marginTop: 0 }}
        />
        <InputTextField
          id="outlined-multiline-static"
          label="축하의 말을 작성해주세요."
          multiline
          rows={4}
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
