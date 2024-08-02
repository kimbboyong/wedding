import Account from "../../components/Account";
import Gallery from "../../components/Gallery";
import Location from "../../components/Location";
import FixeDate from "../FixeDate";
import Intro from "../Intro";

const View = () => {
  const test = navigator.userAgent;

  console.log("구분", test);
  return (
    <>
      <Intro />
      <FixeDate />
      <Gallery />
      <Location />
      <Account />
    </>
  );
};

export default View;
