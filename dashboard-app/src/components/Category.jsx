import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Widget from './Widget';

const Category = React.memo( ( { category, onAddWidget } ) => {

  const handleAddWidget = ( event ) => {
    event.stopPropagation();  // prevent the event from bubbling up to the card
    onAddWidget( category.id );
  };

  return (
    <div className='bg-slate-100 shadow-md rounded-lg p-4'>
      <h2 className='text-base font-bold tracking-tight -mt-4 -translate-y-1/2'>{ category?.name }</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 place-content-between gap-4'>
        {
          category.widgets?.map( widget => (
            <Widget
              key={ widget.id }
              widget={ widget }
              categoryId={ category.id }
            />
          ) )
        }
        <div
          className='w-full min-h-56 p-4 border-[3px] border-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 group'
          onClick={ handleAddWidget }
        >
          <button
            className='flex items-center bg-white sm:px-4 px-2 py-1.5 rounded-lg ring-inset ring-2 ring-gray-300 hover:ring-blue-500 group-active:bg-blue-50 group-active:ring-blue-500 group-active:scale-105'
            onClick={ handleAddWidget }
          >
            <FaPlus className='sm:mr-2 mr-1 text-gray-500' />Add Widget
          </button>

        </div>
      </div>
    </div>
  );
} );

export default Category;