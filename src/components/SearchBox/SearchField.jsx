import React from 'react';
import './SearchField.css';
export default function SearchBox(props) {
  return (
    <div>
      <input
        className='search'
        placeholder='Search...'
        onChange={e => props.searchMovie(e.target.value)}
      />
    </div>
  );
}
