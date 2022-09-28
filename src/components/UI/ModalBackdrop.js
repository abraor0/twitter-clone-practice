const ModalBackdrop = ({ closeModal }) => {
  return (
    <div className="absolute inset-0 bg-black/50" onClick={closeModal} ></div>
  );
};

export default ModalBackdrop;