import { Box } from "@mui/material";
import {
  Container,
  DateText,
  IntroHeader,
  IntroItem,
  IntroList,
  IntroMainImg,
  IntroSubImg,
  IntroTitle,
  Name,
  NameInner,
  NameWrap,
  TextRed,
} from "./Intro.style";
import { GlobalWrap } from "../../style/global.styled";

const Intro = () => {
  const BoxFlex = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <Container>
      <GlobalWrap>
        <IntroHeader>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <DateText>
              <span>25</span>
              <span>03</span>
              <span>15</span>
            </DateText>
            <span>SATURDAY</span>
          </Box>
          <IntroMainImg>
            <img src="/images/img1.png" alt="" />
          </IntroMainImg>
        </IntroHeader>

        <IntroTitle>
          <Name>
            <span>홍길동</span>
            <span>홍길녀</span>
          </Name>
          <p>
            2025년 3월 15일 토요일 오후 5시 <br />
            마리아쥬 스퀘어 G층
          </p>
        </IntroTitle>

        <IntroList>
          <IntroItem>
            <figure>
              <img src="/images/ico-flower.png" alt="" />
            </figure>
          </IntroItem>
          <IntroItem>
            <p>
              저희 두 사람의 작은 만남이 <br />
              <TextRed>사랑</TextRed>의 결실을 이루어 <br />
              소중한 결혼식을 올리게 되었습니다.
            </p>
          </IntroItem>
          <IntroItem>
            <p>
              평생 서로 귀하게 여기며
              <br />첫 마음 그대로 존중하고 배려하며 살겠습니다.
            </p>
          </IntroItem>
          <IntroItem>
            <p>
              오로지 믿음과 <TextRed>사랑</TextRed>을 약속하는 날<br />
              오셔서 <TextRed>축복</TextRed>해 주시면 더 없는{" "}
              <TextRed>기쁨</TextRed>으로
              <br />
              간직하겠습니다.
            </p>
          </IntroItem>
        </IntroList>

        <IntroSubImg>
          <figure>
            <img src="./images/img2.jpg" alt="" />
          </figure>

          <NameWrap>
            <NameInner>
              <Box sx={BoxFlex}>
                <span>홍길동</span>
                <span>홍길녀</span>
              </Box>
              <em>의 차남</em>
            </NameInner>
            <strong>홍길동</strong>
          </NameWrap>
          <NameWrap>
            <NameInner>
              <Box sx={BoxFlex}>
                <span>홍길동</span>
                <span>홍길녀</span>
              </Box>
              <em>의 장녀</em>
            </NameInner>
            <strong>홍길녀</strong>
          </NameWrap>
        </IntroSubImg>
      </GlobalWrap>
    </Container>
  );
};

export default Intro;
