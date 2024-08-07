import { Button } from "@mui/material";
import { useEffect } from "react";

const KaKaoNavi = () => {
  useEffect(() => {
    const { Kakao } = window as any;
    Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  }, []);

  const openKakaoNavi = () => {
    const { Kakao } = window as any;

    Kakao.Navi.start({
      name: "마리아쥬스퀘어",
      x: 127.03678450961253,
      y: 37.52158798397567,
      coordType: "wgs84",
    });
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
      onClick={openKakaoNavi}
    >
      <figure>
        <img src="/images/ico-kakaonavi.png" alt="" />
      </figure>
      <span>카카오내비</span>
    </Button>
  );
};

export default KaKaoNavi;
