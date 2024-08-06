import { Box } from "@mui/material";
import styled from "styled-components";
import { GlobalWrap } from "../../style/global.styled";

const FixeDate = () => {
  return (
    <Container>
      <GlobalWrap>
        <figure>
          <img src="/images/date.png" alt="" />
        </figure>

        <LocationText>
          <p>
            2025년 3월 15일 토요일 오후 5시 <br />
            마리아쥬 스퀘어 G층
          </p>
        </LocationText>
      </GlobalWrap>
    </Container>
  );
};

export default FixeDate;

const Container = styled(Box)`
  margin-bottom: 60px;
  figure {
    margin-bottom: 60px;
  }
`;

const LocationText = styled(Box)`
  text-align: center;
  p {
    padding: 30px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    color: #656565;
    line-height: 1.6;
  }
`;
