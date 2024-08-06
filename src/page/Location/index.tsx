import { useEffect, useRef } from "react";

import style from "./location.module.css";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";
import { Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import DeepLink from "./DeepLink";
import { GlobalWrap } from "../../style/global.styled";

import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";

type ColorType = {
  color?: string;
};

const { kakao }: any = window;

const Location = () => {
  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markerPosition = new kakao.maps.LatLng(
    37.521991232737875,
    127.03662350759456
  );

  useEffect(() => {
    if (containerRef.current) {
      const options = {
        center: markerPosition,
        level: 3,
      };

      mapRef.current = new kakao.maps.Map(containerRef.current, options);
    }
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(mapRef.current);
  }, []);

  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() - 1);
    }
  };

  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(mapRef.current.getLevel() + 1);
    }
  };

  return (
    <Container>
      <SectionTitle Entitle="Location" KoTitle="오시는 길" />

      <div
        id="map"
        ref={containerRef}
        style={{ width: "100%", height: "300px" }}
      >
        <div className={style.zoomBtn}>
          <button onClick={zoomIn}>
            <AddIcon sx={BtnStyle} />
          </button>
          <button onClick={zoomOut}>
            <RemoveIcon sx={BtnStyle} />
          </button>
        </div>
      </div>

      <GlobalWrap>
        <DeepLink />

        <InfoList>
          <InfoItem>
            <InfoTitle>
              <DirectionsSubwayIcon sx={{ color: "#89757a" }} />
              <strong>지하철</strong>
            </InfoTitle>

            <InfoContent>
              <Box sx={{ marginBottom: 2 }}>
                <InfoDivider>
                  <SubwayTextPoint color="green">
                    7호선, 분당선 강남구청역
                  </SubwayTextPoint>
                  <strong>하차</strong>
                </InfoDivider>

                <InfoSubList>
                  <InfoSubItem>- 강남구청역 3-1번 출구</InfoSubItem>
                  <InfoSubItem>- [도보] 학동사거리 방면 도보 10분</InfoSubItem>
                </InfoSubList>
              </Box>
              <Box>
                <InfoDivider>
                  <SubwayTextPoint color="yellow">
                    분당선 압구정로데오역
                  </SubwayTextPoint>
                  <strong>하차</strong>
                </InfoDivider>

                <InfoSubList>
                  <InfoSubItem>- 압구정로데오역 5번 출구</InfoSubItem>
                  <InfoSubItem>
                    - [도보] 400M 도보 후 학동사거리 횡단보도 건너 우측 200M
                  </InfoSubItem>
                </InfoSubList>
              </Box>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoTitle>
              <DirectionsBusIcon sx={{ color: "#89757a" }} />
              <strong>버스</strong>
            </InfoTitle>

            <InfoContent>
              <Box>
                <InfoDivider>
                  <strong>제일은행.호림아트센터앞 [23-125]</strong>
                </InfoDivider>

                <InfoSubList>
                  <InfoSubItem>
                    <InfoDivider>
                      <BusTextPoint color="blue">간선버스</BusTextPoint>
                      <strong>145, 440</strong>
                    </InfoDivider>
                  </InfoSubItem>
                  <InfoSubItem>
                    <InfoDivider>
                      <BusTextPoint color="green">지선버스</BusTextPoint>
                      <strong>3011, 4212</strong>
                    </InfoDivider>
                  </InfoSubItem>
                </InfoSubList>
              </Box>
            </InfoContent>
          </InfoItem>
        </InfoList>
      </GlobalWrap>
    </Container>
  );
};

export default Location;

const BtnStyle = {
  color: "#555",
};

const Container = styled(Box)`
  margin-bottom: 60px;
`;

const InfoList = styled.ul``;
const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const InfoTitle = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  strong {
    color: #333;
  }
`;
const InfoContent = styled(Box)``;

const InfoDivider = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  strong {
    display: block;
    font-size: 16px;
  }
`;

const SubwayTextPoint = styled.span<ColorType>`
  font-size: 16px;
  background: ${(props) => {
    if (props.color === "green") return "#697215";
    if (props.color === "yellow") return "#f7ba21";
  }};
  color: ${(props) => {
    if (props.color) return "#fff";
  }};
  padding: 5px;
  border-radius: 10px;
`;
const BusTextPoint = styled.span<ColorType>`
  font-size: 16px;
  background: ${(props) => {
    if (props.color === "blue") return "#395cb4";
    if (props.color === "green") return "#48922d";
  }};
  color: ${(props) => {
    if (props.color) return "#fff";
  }};
  padding: 5px;
  border-radius: 10px;
`;

const InfoSubList = styled.ul`
  margin-top: 15px;
  padding-left: 10px;
`;
const InfoSubItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
  &:last-child {
    margin-bottom: 0;
  }
`;
