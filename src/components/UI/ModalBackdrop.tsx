interface ModalBackdropProps {
  closeModal: () => void;
}

const ModalBackdrop = ({ closeModal }: ModalBackdropProps) => {
  return (
    <div className="fixed inset-0 bg-black/50" onClick={closeModal} ></div>
  );
};

export default ModalBackdrop;