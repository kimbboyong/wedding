import { Button } from "@mui/material";
import { useState } from "react";

const TmapNavi = () => {
  const [message, setMessage] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_TMAP_KEY;

  const handleTmapNavi = async () => {
    const destination = {
      name: "마리안스퀘어",
      x: 127.03678450961253,
      y: 37.52158798397567,
    };

    const url = `https://apis.openapi.sk.com/tmap/routes?version=1&appKey=${apiKey}&startX=127.0&startY=37.0&endX=${destination.x}&endY=${destination.y}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const tmapUrl = `tmap://route?ep=${destination.x},${
          destination.y
        }&name=${encodeURIComponent(destination.name)}`;
        window.location.href = tmapUrl;
      } else {
        setMessage("경로를 찾을 수 없습니다.");
      }
    } catch (error: any) {
      setMessage(`오류 발생: ${error.message}`);
    }
  };

  console.log(message);

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
    >
      <figure>
        <img src="/images/ico-tmap.png" alt="" />
      </figure>
      <span>티맵</span>
    </Button>
  );
};

export default TmapNavi;
