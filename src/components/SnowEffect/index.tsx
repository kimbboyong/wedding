import { Snowfall } from "react-snowfall";

const SnowEffect = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    >
      <Snowfall
        color="pink" // 눈 색상 (기본값: 흰색)
        snowflakeCount={50} // 눈송이 개수
      />
    </div>
  );
};

export default SnowEffect;
