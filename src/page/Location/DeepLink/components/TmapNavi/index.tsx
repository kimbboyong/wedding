import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const TmapNavi = () => {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("위치 정보를 가져오는 데 실패했습니다:", error);
          }
        );
      } else {
        console.error("Geolocation API를 지원하지 않는 브라우저입니다.");
      }
    };
    getCurrentLocation();
  }, []);

  const handleTmapNavi = async () => {
    const appKey = import.meta.env.VITE_TMAP_KEY;
    const destinationX = 127.03678450961253;
    const destinationY = 37.52158798397567;

    const url = "https://apis.openapi.sk.com/tmap/routes?version=1";

    const data = {
      startX: currentLocation ? currentLocation.longitude : 127.10323758,
      startY: currentLocation ? currentLocation.latitude : 37.36520202,
      endX: destinationX,
      endY: destinationY,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          appKey: appKey,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("네트워크 응답에 문제가 있습니다.");
      }

      const result = await response.json();
      console.log("result?", result);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  console.log(currentLocation);

  return (
    <Button
      variant="outlined"
      sx={{
        width: "100%",
        display: "flex",
        gap: "5px",
        paddingX: 0,
        border: "1px solid #ccc",
      }}
      onClick={handleTmapNavi}
      disabled={!currentLocation}
    >
      <figure>
        <img src="/images/ico-tmap.png" alt="" />
      </figure>
      <span>티맵</span>
    </Button>
  );
};

export default TmapNavi;
