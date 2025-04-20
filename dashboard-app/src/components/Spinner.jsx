import React from 'react';

const Spinner = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <hr className='border-[5px] size-10 animate-[spin_600ms_linear_infinite] border-gray-200 border-t-blue-700 rounded-full' />
    </div>
  );
};

export default Spinner;