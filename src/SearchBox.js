import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p2 mb3'>
            <input type='search' placeholder='search character' className='pa3 ba b--green bg-lightest-blue' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;