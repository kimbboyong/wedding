import { Button } from "@mui/material";

const TmapNavi = () => {
  const appKey = import.meta.env.VITE_TMAP_KEY;
  const handleTmapNavi = () => {
    const destinationName = encodeURIComponent("마리안스퀘어");
    const lon = 127.03678450961253;
    const lat = 37.52158798397567;

    const tmapAppUrl = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${appKey}&name=${destinationName}&lon=${lon}&lat=${lat}`;

    window.open(tmapAppUrl, "_blank");
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
