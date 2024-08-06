import { Button } from "@mui/material";

declare global {
  interface Window {
    opera: any;
    MSStream: any;
  }
}

const TmapNavi = () => {
  const destinationX = 127.03678450961253;
  const destinationY = 37.52158798397567;
  const appKey = import.meta.env.VITE_TMAP_KEY;
  const handleTmapNavi = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isAndroid = /android/i.test(userAgent);
    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    const tmapUrl = `tmap://route?ep=${destinationX},${destinationY}`;
    appKey;
    if (isAndroid) {
      window.location.href = tmapUrl;

      setTimeout(() => {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.skt.tmap.ku";
      }, 2000);
    } else if (isIOS) {
      window.location.href = tmapUrl;

      setTimeout(() => {
        window.location.href = "https://apps.apple.com/kr/app/tmap/id494202123";
      }, 2000);
    } else {
      alert("지원하지 않는 플랫폼입니다.");
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
