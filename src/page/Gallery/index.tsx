import { useState } from "react";
import style from "./gallery.module.css";
import { Box } from "@mui/material";
import styled from "styled-components";

import CommonModal from "../../components/CommonModal";
import GalleryDetail from "./GalleryDetail";
import SectionTitle from "../../components/SectionTitle";
import { GlobalWrap } from "../../style/global.styled";

import { imgData } from "./fakeData";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterImgId, setFilterImgId] = useState(0);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImgDetail = (id: number) => {
    setIsModalOpen(true);
    setFilterImgId(id);
  };

  return (
    <Container>
      <GlobalWrap>
        <SectionTitle Entitle="Gallery" KoTitle="갤러리" />

        <div className={style.grid}>
          {imgData.slice(0, 6).map((img) => (
            <div
              key={img.id}
              className={style.gridItem}
              onClick={() => handleImgDetail(img.id)}
            >
              <figure>
                <img src={img.imgUrl} alt="" />
              </figure>
            </div>
          ))}
        </div>

        <CommonModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          closeBtn={true}
        >
          <GalleryDetail filterImgId={filterImgId} />
        </CommonModal>
      </GlobalWrap>
    </Container>
  );
};

export default Gallery;

const Container = styled(Box)`
  position: relative;
  margin-bottom: 60px;
  z-index: 3;
`;
