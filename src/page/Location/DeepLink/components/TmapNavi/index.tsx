import { Button } from "@mui/material";

const TmapNavi = () => {
  const destination = {
    name: "마리아쥬 스퀘어",
    x: 127.03678450961253,
    y: 37.52158798397567,
  };
  const handleTmapNavi = () => {
    const tmapUrl = `tmap://route?ep=${destination.x},${
      destination.y
    }&name=${encodeURIComponent(destination.name)}`;

    window.location.href = tmapUrl;
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
