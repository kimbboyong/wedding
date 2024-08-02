import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  padding-top: 50px;
  margin-bottom: 60px;
`;

export const IntroHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export const DateText = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;
  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 1px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  span {
    font-family: "Crimson Pro", serif;
    font-weight: 300;
    font-size: 40px;
    color: #333;
    display: flex;
    align-items: center;
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 30px;
      background-color: #333;
      margin: 0 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

export const IntroMainImg = styled(Box)``;

export const IntroTitle = styled(Box)`
  text-align: center;
  margin-bottom: 60px;
  p {
    font-size: 14px;
    color: #656565;
    line-height: 1.6;
  }
`;

export const Name = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: #333;
  span {
    display: flex;
    align-items: center;
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 2px;
      background-color: #000;
      border-radius: 50%;
      margin: 0 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

export const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
`;
export const IntroItem = styled.li`
  text-align: center;

  figure {
    max-width: 15px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: #656565;
    line-height: 1.5;
  }
`;

export const TextRed = styled.span`
  color: #f17575;
`;

export const IntroSubImg = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  figure {
    margin-bottom: 30px;
  }
`;
export const NameWrap = styled(Box)`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  strong {
    color: #333;
  }
`;

export const NameInner = styled(Box)`
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    color: #333;
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 2px;
      background-color: #000;
      border-radius: 50%;
      margin: 0 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
  em {
    font-size: 14px;
    color: #656565;
  }
`;
