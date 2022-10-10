import ReactDOM from 'react-dom';
import ModalBackdrop from './ModalBackdrop';
import { Close, Logo } from '../Icons/icons';

const ModalOverlay = ({ children, onClick: closeModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop closeModal={closeModal} />,
        document.querySelector('#react-backdrop-container')
      )}
      {ReactDOM.createPortal(
        <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[450px] md:w-[600px] p-3 rounded-2xl z-10 bg-white">
          <div className="flex text-xl items-center">
            <button type="button" onClick={closeModal}>
              <Close />
            </button>
            <i className="text-sky-500 mx-auto text-3xl">
              <Logo />
            </i>
          </div>
          {children}
        </article>,
        document.querySelector('#react-overlay-container')
      )}
    </>
  );
};

export default ModalOverlay;
