import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoriesWithSelectedWidgets } from '../redux/dashboard/widgetsSlice';
import { toggleAddWidgetSidebarModalVisibility } from '../redux/dashboard/modalVisibilitySlice';
import { CgClose } from 'react-icons/cg';
import Modal from './Modal';

const AddWidgetSidebar = ( { isOpen } ) => {
  const dispatch = useDispatch();
  const categories = useSelector( state => state.categories.categories );
  const categoriesWithSelectedWidgets = useSelector( state => state.categories.categoriesWithSelectedWidgets );
  const [activeTab, setActiveTab] = useState( String( categories[0].name ).split( ' ' )[0] );
  const [categoriesWithWidgetsSelected, setCategoriesWithWidgetsSelected] = useState( structuredClone( categoriesWithSelectedWidgets ) );

  const onClose = () => {
    dispatch( toggleAddWidgetSidebarModalVisibility() );
  };

  const isChecked = ( categoryId, widgetId ) => {
    return categoriesWithWidgetsSelected.find( category => category.id === categoryId ).widgets.some( widget => widget.id === widgetId );
  };

  const toggleWidgetSelectCheckbox = ( categoryId, widget, checked ) => {
    setCategoriesWithWidgetsSelected( prevState => {
      const newCategories = prevState.map( category => {
        if ( category.id === categoryId ) {
          const newWidgets = checked
            ? [...category.widgets, widget]
            : category.widgets.filter( w => w.id !== widget.id );
          return { ...category, widgets: newWidgets };
        }
        return category;
      } );
      return newCategories;
    } );
  };

  const handleConfirmAddWidgets = () => {
    dispatch( updateCategoriesWithSelectedWidgets( categoriesWithWidgetsSelected ) );
    onClose();
  };

  return (
    <Modal onClose={ onClose } className={ `fixed inset-y-0 right-0 lg:w-[45%] md:w-[60%] w-[70%] bg-white flex flex-col shadow-lg transform ${ isOpen ? 'translate-x-0' : 'translate-x-full' } transition-transform duration-300 ease-in-out` }>
      <div className='p-4 flex flex-col flex-1 relative sm:text-base text-sm overflow-y-scroll scrollbar-hidden mb-12'>
        <div className='flex justify-between items-center mb-4 -mx-4 -mt-4 p-2 bg-blue-900'>
          <h2 className='md:text-lg text-base text-white'>Add Widget</h2>
          <button onClick={ onClose } className='text-white hover:text-red-400'>
            <CgClose size={ 25 } className='active:scale-125' />
          </button>
        </div>
        <p className='mb-4'>Personalise your dashboard by adding the following widget</p>
        <div className='flex mb-4'>
          { categories.map( category => (
            <button
              key={ category.id }
              onClick={ () => setActiveTab( String( category.name ).split( ' ' )[0] ) }
              className={ `px-3 py-1 border-b-2 ${ activeTab === String( category.name ).split( ' ' )[0] ? 'border-blue-900 text-blue-900 font-medium' : 'text-gray-400 border-gray-200' }` }
            >
              { String( category.name ).split( ' ' )[0] }
            </button>
          ) ) }
        </div>
        <div className='overflow-y-scroll scrollbar-hidden'>
          { categories.map( category => (
            <div key={ category.id } className={ activeTab === String( category.name ).split( ' ' )[0] ? '' : 'hidden' }>
              { category.widgets.map( widget => (
                <div key={ widget.id } className='flex items-center mb-2 border-2 border-gray-200 p-2 rounded'>
                  <input
                    type='checkbox'
                    id={ `widget-${ category.id }-${ widget.id }` }
                    checked={ isChecked( category.id, widget.id ) }
                    onChange={ ( e ) => toggleWidgetSelectCheckbox( category.id, widget, e.target.checked ) }
                    className='mr-2 accent-blue-900'
                  />
                  <label className={ `flex-1 text-balance sm:text-base text-sm ${ isChecked( category.id, widget.id ) ? 'text-blue-900 font-medium' : 'text-gray-400' }` } htmlFor={ `widget-${ category.id }-${ widget.id }` }>{ widget.name }</label>
                </div>
              ) ) }
            </div>
          ) ) }
        </div>

        <div className='fixed bottom-0 right-0 flex w-full p-2 justify-end items-center gap-4'>
          <button
            onClick={ onClose }
            className='ring-inset ring-2 ring-blue-900 text-blue-950 font-semibold py-1 px-5 rounded-md hover:opacity-65 active:scale-110'
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmAddWidgets}
            className='bg-blue-900 text-white font-semibold py-1 px-5 rounded-md hover:opacity-75 active:scale-110'
          >
            Confirm
          </button>
        </div>

      </div>
    </Modal>
  );
};

export default AddWidgetSidebar;