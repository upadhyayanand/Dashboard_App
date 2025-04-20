import { useEffect } from 'react';

const useClickOutsidePopupClose = ( ref, onClose ) => {

  useEffect( () => {
    const handleClickOutside = ( event ) => {
      if ( ref.current && !ref.current.contains( event.target ) ) {
        onClose(); // trigger the onClose function when clicked outside
      }
    };

    // event listener for taps/clicks/presses outside the popup area
    document.addEventListener( 'mousedown', handleClickOutside );

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener( 'mousedown', handleClickOutside );
    };
  }, [ref, onClose] );  // Run this effect whenever ref or onClose changes
};

export default useClickOutsidePopupClose;