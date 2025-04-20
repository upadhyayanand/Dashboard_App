import React from 'react';
import Modal from './Modal';
import { removeWidget } from '../redux/dashboard/widgetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDeleteWidgetAlertModalVisibility } from '../redux/dashboard/modalVisibilitySlice';

const DeleteWidgetAlert = ( { categoryId } ) => {
  const widgetId = useSelector( state => state.categories.widgetIdToDelete );
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch( toggleDeleteWidgetAlertModalVisibility() );
  };

  const handleRemoveWidget = () => {
    console.log( 'Widget Id => ', widgetId, '    Category Id => ', categoryId );
    dispatch( removeWidget( { categoryId, widgetId } ) );
    onClose();
  };

  return (
    <Modal onClose={ onClose }>
      <div className='flex flex-col p-2'>
        <p className='sm:text-2xl text-lg mb-8'>
          Are you sure you want to delete the Widget?
        </p>
        <div className='flex items-center justify-end gap-4'>
          <button
            onClick={ onClose }
            className='ring-2 ring-blue-300 hover:bg-blue-500 hover:text-white font-bold py-1 px-3 rounded-md active:scale-110'>
            Cancel
          </button>
          <button
            onClick={ handleRemoveWidget }
            className='ring-2 ring-blue-300 hover:bg-blue-500 hover:text-white font-bold py-1 px-3 rounded-md active:scale-110'
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWidgetAlert;