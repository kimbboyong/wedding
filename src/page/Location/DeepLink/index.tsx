import React from "react";
import { GlobalWrap } from "../../../style/global.styled";
import styled from "styled-components";
import { Box, Button } from "@mui/material";

const DeepLink = () => {
  const handleDeepLink = (url: string, downloadUrl: string) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes("android");
    const isIOS = userAgent.includes("iphone") || userAgent.includes("ipad");

    window.location.href = url;

    setTimeout(() => {
      if (isAndroid) {
        window.location.href = downloadUrl;
      } else if (isIOS) {
        window.location.href = downloadUrl;
      }
    }, 2000);
  };

  return (
    <Container>
      <DeepLinkTitle>
        <strong>내비게이션</strong>
        <p>원하시는 앱을 선택하시면 길안내가 시작됩니다.</p>
      </DeepLinkTitle>

      <DeepLinkList>
        <DeepLinkItem>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              display: "flex",
              gap: "5px",
              paddingX: 0,
              border: "1px solid #ccc",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleDeepLink(
                "tmap://",
                "https://play.google.com/store/apps/details?id=com.skt.tmap.ku"
              );
            }}
          >
            <figure>
              <img src="/images/ico-tmap.png" alt="" />
            </figure>
            <span>티맵</span>
          </Button>
        </DeepLinkItem>
        <DeepLinkItem>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              display: "flex",
              gap: "5px",
              paddingX: 0,
              border: "1px solid #ccc",
            }}
          >
            <figure>
              <img src="/images/ico-kakaonavi.png" alt="" />
            </figure>
            <span>카카오내비</span>
          </Button>
        </DeepLinkItem>
        <DeepLinkItem>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              display: "flex",
              gap: "5px",
              paddingX: 0,
              border: "1px solid #ccc",
            }}
          >
            <figure>
              <img src="/images/ico-navermap.png" alt="" />
            </figure>
            <span>네이버지도</span>
          </Button>
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
