import { Button } from "@mui/material";

const NaverNavi = () => {
  const destinationName = encodeURIComponent("마리아쥬 스퀘어");
  const lon = 127.03678450961253;
  const lat = 37.52158798397567;

  const openNaverMap = () => {
    const naverMapUrl = `nmap://navigation?dlat=${lat}&dlng=${lon}&dname=${destinationName}&appname=com.example.myapp`;

    window.open(naverMapUrl, "_blank");
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
      onClick={openNaverMap}
    >
      <figure>
        <img src="/images/ico-navermap.png" alt="" />
      </figure>
      <span>네이버지도</span>
    </Button>
  );
};

export default NaverNavi;
