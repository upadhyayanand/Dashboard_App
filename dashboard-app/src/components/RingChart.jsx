import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, } from 'chart.js';

// Register ChartJS components
ChartJS.register( ArcElement, Tooltip );

const RingChart = React.memo( ( { widget } ) => {
  return (
    <div className='relative max-h-44'>
      <Doughnut data={ widget.data } className='max-w-full' options={ widget.options } />
      <div className='absolute inset-0 flex flex-col items-center flex-1 m-auto bg-transparent size-fit'>
        <div className='text-2xl font-bold'>{ widget.total }</div>
        <div className='text-sm'>Total</div>
      </div>
    </div>
  );
} );

export default RingChart;