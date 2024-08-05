import styled from "styled-components";

import SectionTitle from "../../components/SectionTitle";
import { GlobalWrap } from "../../style/global.styled";
import { Box } from "@mui/material";
import GuestCreate from "./GuestCreate";
import GuestRead from "./GuestRead";

const GuestBook = () => {
  return (
    <Container>
      <GlobalWrap>
        <SectionTitle Entitle="GuestBook" KoTitle="방명록" />
        <GuestCreate />
        <GuestRead />
      </GlobalWrap>
    </Container>
  );
};

export default GuestBook;

const Container = styled(Box)`
  padding-bottom: 50px;
  position: relative;
  z-index: 3;
`;
