import React, { useState } from 'react';
import { FaClock, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import AddWidgetModal from '../components/AddWidgetModal';
import AddWidgetSidebar from '../components/AddWidgetSidebar';
import { toggleAddWidgetModalVisibility, toggleAddWidgetSidebarModalVisibility } from '../redux/dashboard/modalVisibilitySlice';
import { updateCategoryId } from '../redux/dashboard/widgetsSlice';
import DeleteWidgetAlert from '../components/DeleteWidgetAlert';

const Dashboard = () => {
  const categories = useSelector( state => state.categories );
  const { categoriesWithSelectedWidgets, currentCategoryId, searchTerm } = categories;
  const [timeRange, setTimeRange] = useState( 'Last 2 days' );
  const {addWidget, deleteWidgetAlert, addWidgetSidebar } = useSelector( state => state.modalVisibility );
  const dispatch = useDispatch();

  const handleAddWidget = ( categoryId ) => {
    dispatch( updateCategoryId( categoryId ) );
    dispatch( toggleAddWidgetModalVisibility() );
  };

  // handler for filtering widgets based on searchTerm
  const filteredCategories = !searchTerm.trim() || categoriesWithSelectedWidgets.length < 1
    ? []
    : categoriesWithSelectedWidgets.map( category => (
      {
        ...category,
        widgets: category.widgets.filter( widget =>
          widget.name.toLowerCase().includes( searchTerm.trim().toLowerCase() )
        ),
      }
    ) ).filter( category => category.widgets.length > 0 );

  return (
    <div className='text-black px-4 sm:px-6 lg:px-8'>

      <div className='mx-auto py-4'>
        <div className='flex justify-between items-center gap-x-4 text-nowrap'>
          <h1 className='text-lg sm:text-xl font-bold sm:tracking-normal tracking-tighter'>
            CNAPP Dashboard
          </h1>
          <div className='flex items-center gap-x-4 sm:text-base text-sm sm:overflow-hidden overflow-x-scroll scrollbar-hidden scroll-mr-3'>
            <button
              onClick={ () => dispatch( toggleAddWidgetSidebarModalVisibility() ) }
              className='flex items-center bg-white sm:px-4 px-2 py-1.5 rounded-lg ring-inset ring-2 ring-blue-300 hover:ring-blue-500 active:scale-95 active:bg-blue-100'
            >
              Add Widget<FaPlus className='sm:ml-2 ml-1 text-gray-500' />
            </button>
            <div className='relative active:scale-95 active:bg-blue-100'>
              <select
                value={ timeRange }
                onChange={ ( e ) => setTimeRange( e.target.value ) }
                className='bg-white rounded-lg sm:pl-8 pl-6 sm:pr-4 pr-1 py-1.5 outline-none ring-inset ring-2 ring-blue-300 focus:ring-blue-500 active:bg-blue-100'
              >
                <option>Last 2 days</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
              <FaClock className='absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-10 pt-2 pb-8'>
        {
          searchTerm.trim()
            ? filteredCategories.length > 0
              ? filteredCategories.map( category => (
                <Category
                  key={ category.id }
                  category={ category }
                  onAddWidget={ handleAddWidget }
                />
              ) )
              : <p className='mt-6 sm:text-2xl text-xl'>No match found!</p>
            : categoriesWithSelectedWidgets.length > 0
              ? categoriesWithSelectedWidgets.map( category => (
                <Category
                  key={ category.id }
                  category={ category }
                  onAddWidget={ handleAddWidget }
                />
              ) )
              : <p className='mt-6 sm:text-2xl text-xl'>No data available!</p>
        }
      </div>

      { addWidget && <AddWidgetModal categoryId={ currentCategoryId } /> }

      { deleteWidgetAlert && <DeleteWidgetAlert categoryId={ currentCategoryId } /> }
      { addWidgetSidebar && <AddWidgetSidebar isOpen={ addWidgetSidebar } /> }

    </div>
  );
};

export default Dashboard;