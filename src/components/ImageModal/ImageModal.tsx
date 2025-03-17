import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import React from "react";
const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  content: {
    borderRadius: "8px",
    padding: 0,
    border: "none",
    background: "transparent",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageModalProps {
  handleCloseModal: () => void;
  modalIsOpen: boolean;
  imageInsideModal: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  handleCloseModal,
  modalIsOpen,
  imageInsideModal,
}) => {
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={250}
        style={styles}
      >
        <img className={s.image} src={imageInsideModal} alt="Current image" />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
