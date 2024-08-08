import style from "../gallery.module.css";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgData } from "../fakeData";
import styled from "styled-components";
import { Box } from "@mui/material";

interface Props {
  filterImgId: number;
}

const GalleryDetail = ({ filterImgId }: Props) => {
  const activeImg = imgData[filterImgId];
  const filterData = imgData.filter((img) => img.id !== filterImgId);
  console.log(filterData);

  const resultList = [activeImg, ...filterData];

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {resultList.map((img) => (
          <SwiperSlide key={img.id}>
            <figure className={style.imgFigure}>
              <img src={img.imgUrl} alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GalleryDetail;

const Container = styled(Box)`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
