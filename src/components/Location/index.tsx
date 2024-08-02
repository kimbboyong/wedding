import { useEffect, useRef } from "react";

import style from "./location.module.css";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";
import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";

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
