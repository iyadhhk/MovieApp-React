import React from 'react';
import './Spinner.css';

const Spinner = Mycomponent => ({ loading, ...props }) => {
  console.log(props);
  return loading ? <div className='loader'></div> : <Mycomponent {...props} />;
};

export default Spinner;
