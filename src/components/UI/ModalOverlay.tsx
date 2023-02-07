import ReactDOM from 'react-dom';
import ModalBackdrop from './ModalBackdrop';
import { Close, Logo } from '../Icons/icons';

interface modalOverlayProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalOverlay = ({ children, onClick: closeModal }: modalOverlayProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop closeModal={closeModal} />,
        document.querySelector('#react-backdrop-container') as HTMLDivElement
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
        document.querySelector('#react-overlay-container') as HTMLDivElement
      )}
    </>
  );
};

export default ModalOverlay;
