import React from 'react';

const HorizontalLineBar = ( { widget } ) => {
  return (
    <div className='w-full'>
      <h3 className='text-sm mb-2'><span className='text-lg font-bold'>{ widget.data?.total } </span>{ widget.title }</h3>
      <div className='w-full bg-[#aaa] rounded-full h-3.5 mb-6 flex overflow-hidden'>
        { widget.data.datasets[0].data.map( ( value, index ) => (
          <div
            key={ index }
            style={ {
              width: `${ ( value / widget.data?.total ) * 100 }%`,
              backgroundColor: widget.data.datasets[0].backgroundColor[index]
            } }
            className='h-3.5 inline-block'
          ></div>
        ) ) }
      </div>
      <div className='grid grid-cols-2 gap-2'>
        { widget.data.labels.map( ( label, index ) => (
          <div key={ index } className='flex items-center'>
            <hr
              className='w-3 h-3 rounded-full mr-2'
              style={ { backgroundColor: widget.data.datasets[0].backgroundColor[index] } }
            />
            <span className='text-sm'>{ `${ label } (${ widget.data.datasets[0].data[index] })` }</span>
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default HorizontalLineBar;