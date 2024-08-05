import React from "react";
import { GlobalWrap } from "../../style/global.styled";
import AccountAccodion from "./AccountAccodion";
import styled from "styled-components";
import { Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

const Account = () => {
  return (
    <Container>
      <GlobalWrap>
        <SectionTitle Entitle="Account" KoTitle="마음 전하실 곳" />
        <AccountAccodion />
      </GlobalWrap>
    </Container>
  );
};

export default Account;

const Container = styled(Box)`
  position: relative;
  z-index: 3;
  margin-bottom: 60px;
`;
