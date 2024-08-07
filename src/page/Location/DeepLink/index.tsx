import styled from "styled-components";
import { Box } from "@mui/material";
import KaKaoNavi from "./components/KaKaoNavi";
import TmapNavi from "./components/TmapNavi";
import NaverNavi from "./components/NaverNavi";

const DeepLink = () => {
  return (
    <Container>
      <DeepLinkTitle>
        <strong>내비게이션</strong>
        <p>원하시는 앱을 선택하시면 길안내가 시작됩니다.</p>
      </DeepLinkTitle>

      <DeepLinkList>
        <DeepLinkItem>
          <TmapNavi />
        </DeepLinkItem>
        <DeepLinkItem>
          <KaKaoNavi />
        </DeepLinkItem>
        <DeepLinkItem>
          <NaverNavi />
        </DeepLinkItem>
      </DeepLinkList>
    </Container>
  );
};

export default DeepLink;

const Container = styled(Box)`
  position: relative;
  z-index: 3;
  margin-bottom: 30px;
`;
const DeepLinkTitle = styled(Box)`
  margin: 30px 0;
  strong {
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #333;
    word-break: keep-all;
    line-height: 1.5;
  }
`;

const DeepLinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;
const DeepLinkItem = styled.li`
  height: 45px;

  figure {
    max-width: 15px;
    height: 15px;
  }
  span {
    font-size: 14px;
    color: #333;
  }
  button {
    &:hover {
      border: 1px solid #ccc;
    }
  }
`;
