import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/search_icon.svg';

const FilterBar = ({ placeHolderLarge, placeHolderMobile, onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      onSearch(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(value);
    };
  
    return (
        <form onSubmit={handleSubmit} className='filter'>
            <div><SearchIcon/></div>
            <input
            value={value}
            type="search"
            onChange={handleChange}
            placeholder={window.matchMedia("(min-width: 600px)") ? placeHolderLarge : placeHolderMobile} />
        </form>
  );
};

export default FilterBar