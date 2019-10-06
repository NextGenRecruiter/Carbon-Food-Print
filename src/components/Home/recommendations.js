import React from 'react';
import lamb from '../../assets/lamb-svgrepo-com.svg';

export const Recommendations = () => {
  return (
    <div className="recommendations">
      <h4 className={'title'}>Recommendations for lower impact</h4>

      <button className={'button_item'}>
      	<img className={'icon'} src={lamb} alt={''}/>
      	Lamb

      </button>
      <button className={'button_item'}>
      	<img className={'icon'} src={lamb} alt={''}/>
      </button>
    </div>
  )
};

export default Recommendations;