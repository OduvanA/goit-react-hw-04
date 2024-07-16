import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({isOpen, onAfterOpen, onRequestClose, imageUrl}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className={css.container}>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <button onClick={onRequestClose}>close</button>
        <img src={imageUrl} alt="Large Image" />
      </Modal>
    </div>
  );
}
