import { useState } from "react";
import style from "./gallery.module.css";
import CommonModal from "../CommonModal";
import GalleryDetail from "./GalleryDetail";
import { imgData } from "./fakeData";
import SectionTitle from "../SectionTitle";
import styled from "styled-components";
import { Box } from "@mui/material";
import { GlobalWrap } from "../../style/global.styled";

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
          {imgData.map((img) => (
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

        <CommonModal isOpen={isModalOpen} closeModal={closeModal}>
          <GalleryDetail filterImgId={filterImgId} />
        </CommonModal>
      </GlobalWrap>
    </Container>
  );
};

export default Gallery;

const Container = styled(Box)`
  margin-bottom: 60px;
`;
