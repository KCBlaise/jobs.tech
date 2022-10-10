import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/search_icon.svg';

const FilterBar = ({ placeHolder, onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      onSearch(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(value);
    }
  
    return (
        <form onSubmit={handleSubmit} className='filters'>
            <div><SearchIcon/></div>
            <input
            value={value}
            type="search"
            onChange={handleChange}
            placeholder={placeHolder} />
        </form>
  )
}

export default FilterBar