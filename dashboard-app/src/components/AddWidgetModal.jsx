import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Modal from './Modal';
import { addWidget } from '../redux/dashboard/widgetsSlice';
import { toggleAddWidgetModalVisibility } from '../redux/dashboard/modalVisibilitySlice';

const AddWidgetModal = ( { categoryId } ) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState( '' );
  const [widgetType, setWidgetType] = useState( 'text' );
  const [widgetContent, setWidgetContent] = useState( '' );

  const uniqueId = uuid();

  const onClose = () => {
    dispatch( toggleAddWidgetModalVisibility() );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if ( !widgetName ) {
      alert( 'Please add Widget name!' );
      return;
    }
    if ( widgetName && widgetType ) {
      const newWidget = {
        id: uniqueId,
        name: widgetName,
        type: widgetType,
        content: widgetContent,
      };
      if ( widgetType !== 'text' ) {
        alert( 'Only Text Widget can be added for now!' );
        return;
      }
      dispatch( addWidget( { categoryId, widget: newWidget } ) );
      onClose();
    }
  };

  return (
    <Modal onClose={ onClose }>
      <h2 className='text-xl font-bold mb-4'>Add New Widget</h2>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          placeholder='Widget Name'
          value={ widgetName }
          onChange={ ( e ) => setWidgetName( e.target.value ) }
          className='w-full p-2 mb-2 border rounded'
        />
        <select
          value={ widgetType }
          onChange={ ( e ) => setWidgetType( e.target.value ) }
          className='w-full p-2 mb-2 border rounded'
        >
          <option value='text'>Text</option>
          <option value='doughnut'>Doughnut Chart</option>
          <option value='horizontalBar'>Horizontal Bar Chart</option>
        </select>
        { widgetType === 'text' && (
          <textarea
            placeholder='Widget Content'
            value={ widgetContent }
            onChange={ ( e ) => setWidgetContent( e.target.value ) }
            className='w-full p-2 mb-2 border rounded'
          />
        ) }

        <div className='flex justify-end items-center gap-4 mt-6'>
          <button
            type='button'
            onClick={ onClose }
            className='ring-2 ring-blue-300 hover:bg-blue-500 hover:text-white font-bold py-1 px-4 rounded-md active:scale-110'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ring-2 ring-blue-300 hover:bg-blue-500 hover:text-white font-bold py-1 px-5 rounded-md active:scale-110'
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddWidgetModal;