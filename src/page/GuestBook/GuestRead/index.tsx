import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import CommonModal from "../../../components/CommonModal";

import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";

interface Items {
  id: string;
  name: string;
  password: string;
  content: string;
  date: string;
  sortDate: {
    seconds: number;
    nanoseconds: number;
  };
}

const GuestRead = () => {
  const [data, setData] = useState<Items[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePw, setDeletePw] = useState<string>("");
  const [dataId, setDataId] = useState<string>("");
  const [alertModal, setAlertModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Items[];

      const sortData = dataList.sort((a, b) => {
        return (
          b.sortDate.seconds - a.sortDate.seconds ||
          b.sortDate.nanoseconds - a.sortDate.nanoseconds
        );
      });

      setData(sortData);
    });

    return () => unsubscribe();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setAlertModal(false);
  };

  const handleDelete = (id: string) => {
    setIsModalOpen(true);
    setDataId(id);
    const filterDate = data.map((item) => console.log(item.id === id));
    console.log(filterDate);
  };

  const handlePostDelete = async () => {
    const docRef = doc(db, "posts", dataId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const itemData = docSnap.data() as Items;

      if (itemData.password === deletePw) {
        await deleteDoc(docRef);
        setIsModalOpen(false);
      } else {
        setAlertModal(true);
      }
    }
  };

  const handleAlertModal = () => {
    setAlertModal(false);
  };

  return (
    <Container>
      <ReadList>
        {data?.map((item) => (
          <ReadItem key={item.id}>
            <ReadInfo>
              <strong>{item.name}</strong>
              <ClearIcon
                onClick={() => handleDelete(item.id)}
                sx={{ color: "#333" }}
              />
            </ReadInfo>
            <ReadText>{item.content}</ReadText>
            <ReadDate>
              <span>{item.date}</span>
            </ReadDate>
          </ReadItem>
        ))}
      </ReadList>

      <CommonModal isOpen={isModalOpen} closeModal={closeModal}>
        <InputTextField
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호를 입력해주세요."
          type="password"
          id="password"
          sx={{ marginTop: 0 }}
          onChange={(e) => setDeletePw(e.target.value)}
        />
        <InputButton
          type="button"
          variant="contained"
          sx={{ backgroundColor: "#000", marginBottom: "5px" }}
          onClick={handlePostDelete}
        >
          삭제
        </InputButton>
        <InputButton
          type="button"
          sx={{ backgroundColor: "#000" }}
          variant="contained"
          onClick={closeModal}
        >
          취소
        </InputButton>
        {alertModal && (
          <AlertBg>
            <AlertModal>
              <p>비밀번호가 일치하지 않습니다!</p>
              <InputButton
                type="button"
                sx={{ width: "100%", backgroundColor: "#000" }}
                variant="contained"
                onClick={handleAlertModal}
              >
                확인
              </InputButton>
            </AlertModal>
          </AlertBg>
        )}
      </CommonModal>
    </Container>
  );
};

export default GuestRead;

const Container = styled(Box)``;
const ReadList = styled(Box)``;
const ReadItem = styled(Box)`
  background: #f3f3f3;
  min-height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ReadInfo = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong,
  span {
    font-size: 12px;
    color: #333;
  }
  strong {
    font-weight: bold;
    color: #000;
  }
`;

const ReadText = styled(Typography)`
  font-size: 14px;
  color: #333;
  word-break: keep-all;
  line-height: 1.3;
`;

const ReadDate = styled(Box)`
  display: flex;
  justify-content: end;
  gap: 5px;
  span {
    font-size: 14px;
    color: #333;
  }
`;

const InputTextField = styled(TextField)({
  " &.MuiFormControl-root": {
    marginBottom: "10px",
  },
  "& label.Mui-focused": {
    color: "#89757a",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#89757a",
    },
  },
});

const InputButton = styled(Button)`
  width: 100%;
  background-color: #000;
  &:hover {
    background-color: #000 !important;
    opacity: 0.8;
  }
`;

const AlertBg = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const AlertModal = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 16px;
  z-index: 2;
  width: 100%;
  max-width: 300px;
  z-index: 2;
  p {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
`;
