import React, { useRef, useState } from 'react';
import SearchBar from './SearchBar';
import { TbBellRinging } from 'react-icons/tb';
import { FaSearch, FaSearchMinus, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/dashboard/widgetsSlice';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState( false );
  const searchInputRef = useRef( null );
  const dispatch = useDispatch();

  const toggleSearchVisibility = () => {
    setIsSearchVisible( prev => !prev );
    dispatch( setSearchTerm( '' ) );   // clear search text when SearchBar is closed to unfilter the categories list in Dashboard
    // Focus the input after the state update and only on small devices
    if ( !isSearchVisible ) {
      // ensure that the input is focused reliably after the state update and the component re-renders
      setTimeout( () => {
        searchInputRef.current.focus();
      }, 0 );
    }
  };

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-4'>
      <div className='flex items-center justify-between gap-x-10 text-gray-500'>
        <a href='#' className='text-black font-bold md:text-2xl text-xl hover:bg-opacity-75'>
          Dashboard V2
        </a>
        <div className='flex items-center md:gap-x-6 gap-x-4'>
          <div className='sm:block hidden'>
            <SearchBar />
          </div>
          { !isSearchVisible
            ? <FaSearch size={ 22 } onClick={ toggleSearchVisibility } className='sm:hidden' />
            : <FaSearchMinus size={ 24 } onClick={ toggleSearchVisibility } className='text-blue-500 sm:hidden text-xl' />
          }
          <button>
            <TbBellRinging size={ 24 } className='hover:text-gray-700 active:scale-110' />
          </button>
          <button>
            <FaUserCircle size={ 24 } className='hover:text-gray-800 active:scale-110' />
          </button>
        </div>
      </div>
      { isSearchVisible && <div className='sm:hidden block mt-2'>
        <SearchBar searchInputRef={ searchInputRef } />
      </div> }
    </div>
  );
};

export default Header;