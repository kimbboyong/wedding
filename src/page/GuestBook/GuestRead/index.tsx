import { Box } from "@mui/material";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

const GuestRead = () => {
  return (
    <Container>
      <ReadList>
        <ReadItem>
          <ReadInfo>
            <strong>작성자</strong>
            <ClearIcon sx={{ color: "#333" }} />
          </ReadInfo>
          <ReadText>
            축하합니다 축하하빈다축하합니다 축하하빈다축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
          </ReadText>
          <ReadDate>
            <span>24.10.11</span>
          </ReadDate>
        </ReadItem>
        <ReadItem>
          <ReadInfo>
            <strong>작성자</strong>
            <ClearIcon sx={{ color: "#333" }} />
          </ReadInfo>
          <ReadText>
            축하합니다 축하하빈다축하합니다 축하하빈다축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
          </ReadText>
          <ReadDate>
            <span>24.10.11</span>
          </ReadDate>
        </ReadItem>
        <ReadItem>
          <ReadInfo>
            <strong>작성자</strong>
            <ClearIcon sx={{ color: "#333" }} />
          </ReadInfo>
          <ReadText>
            축하합니다 축하하빈다축하합니다 축하하빈다축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
            축하합니다 축하하빈다 축하합니다 축하하빈다 축하합니다 축하하빈다
          </ReadText>
          <ReadDate>
            <span>24.10.11</span>
          </ReadDate>
        </ReadItem>
      </ReadList>
    </Container>
  );
};

export default GuestRead;

const Container = styled(Box)``;
const ReadList = styled.ul``;
const ReadItem = styled.li`
  background: #f3f3f3;
  min-height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ReadInfo = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  strong,
  span {
    font-size: 12px;
    color: #333;
  }
  strong {
    font-weight: bold;
    color: #000;
  }
`;

const ReadText = styled.p`
  font-size: 14px;
  color: #333;
  word-break: keep-all;
  line-height: 1.3;
`;

const ReadDate = styled(Box)`
  display: flex;
  justify-content: end;
  gap: 5px;
  span {
    font-size: 14px;
    color: #333;
  }
`;
