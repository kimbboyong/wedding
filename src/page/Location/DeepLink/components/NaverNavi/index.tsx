import { Button } from "@mui/material";

const NaverNavi = () => {
  const destinationName = encodeURIComponent("Naver 본사");
  const lon = 127.03678450961253;
  const lat = 37.52158798397567;

  const openNaverMap = () => {
    const naverMapUrl = `nmap://route/car?slat=37.4640070&slng=126.9522394&sname=${destinationName}&dlat=${lat}&dlng=${lon}&dname=%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90&appname=com.example.myapp`;

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
