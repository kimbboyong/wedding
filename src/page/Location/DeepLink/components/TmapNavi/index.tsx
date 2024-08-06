import { Button } from "@mui/material";

const destination = {
  name: "마리안스퀘어",
  x: 127.03678450961253, // 경도
  y: 37.52158798397567, // 위도
};

const TmapNavi = () => {
  const handleTmapNavi = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const tmapUrl = `tmap://route?ep=${destination.x},${
        destination.y
      }&name=${encodeURIComponent(destination.name)}`;
      window.location.href = tmapUrl;
    } else {
      const tmapStoreUrl = `https://play.google.com/store/apps/details?id=com.skt.tmap.ku`;
      window.open(tmapStoreUrl, "_blank");
    }
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
