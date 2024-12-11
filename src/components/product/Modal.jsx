import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <dialog open className="modal">
        <button className="close-modal-btn" onClick={closeModal}>X</button>
        <div className="modal-content">
          <h2>Modal Title</h2>
          <p>This is a beautiful modal!</p>
        </div>
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;