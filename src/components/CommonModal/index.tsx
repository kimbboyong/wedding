import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

const CommonModal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon sx={closeStyle} onClick={closeModal} />
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default CommonModal;

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const closeStyle = {
  position: "absolute",
  top: "5px",
  right: "5px",
  color: "#333",
  zIndex: 2,
};
