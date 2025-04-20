import React, { useRef } from 'react';
import useClickOutsidePopupClose from '../hooks/useClickOutsidePopupClose';

const Modal = ( { onClose, children, ...props } ) => {
  const modalContentRef = useRef( null );

  // hook to to add and remove a click event listener for closing the modal when clicked outside the popup area
  useClickOutsidePopupClose( modalContentRef, onClose );

  return (
    <div className='fixed inset-0 bg-black/65 backdrop-blur-[2px] flex items-center justify-center'>
      <div ref={ modalContentRef } className='w-full m-4 md:w-auto bg-white p-4 rounded-xl' { ...props }>
        { children }
      </div>
    </div>
  );
};

export default Modal;