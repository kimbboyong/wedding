import { Button } from "@mui/material";
import { useState } from "react";

const TmapNavi = () => {
  const appKey = import.meta.env.VITE_TMAP_KEY;
  const handleTmapNavi = () => {
    const destinationName = encodeURIComponent("마리안스퀘어");
    const lon = 127.03678450961253;
    const lat = 37.52158798397567;

    const isAndroid = /Android/i.test(navigator.userAgent);

    const tmapAppUrl = `tmap://route?name=${destinationName}&lon=${lon}&lat=${lat}`;

    const tmapDownloadUrl = isAndroid
      ? "https://play.google.com/store/apps/details?id=com.skt.tmap.ku"
      : "https://apps.apple.com/kr/app/tmap/id545373202";

    const appCheckUrl = isAndroid
      ? "intent://navigation?lat=" +
        lat +
        "&lon=" +
        lon +
        "#Intent;scheme=tmap;package=com.skt.tmap;end"
      : tmapAppUrl;

    const startTime = Date.now();
    window.location.href = appCheckUrl;

    setTimeout(() => {
      if (Date.now() - startTime < 2000) {
        window.location.href = tmapDownloadUrl;
      }
    }, 1500);
  };

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
