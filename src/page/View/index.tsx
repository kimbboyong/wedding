import Gallery from "../Gallery";
import Location from "../Location";
import FixeDate from "../FixeDate";
import Intro from "../Intro";
import Account from "../Account";
import GuestBook from "../GuestBook";

const View = () => {
  return (
    <>
      <Intro />
      <FixeDate />
      <Gallery />
      <Location />
      <Account />
      <GuestBook />
    </>
  );
};

export default View;
