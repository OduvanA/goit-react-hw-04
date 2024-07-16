import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";

export default function ImageModal({isOpen, onRequestClose, imageItem}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      height: '90%',
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className={css.container}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Gallery Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <button className={css.button} onClick={onRequestClose}><IoClose className={css.icon} /></button>
        <img className={css.image} src={imageItem.urls.regular} alt={imageItem.alt_description} />
      </Modal>
    </div>
  );
}
