import React from 'react';

const FilterButtons = ({ filterPCs, filterNPCs }) => {
    return (
        <div style={{width: '150px', margin: '0 auto', marginBottom: '2em'}} className='flex flex-row justify-between'>
            <button style={{border: 'none'}} className='white-90 b br2 f3 bg-red pa2 grow' onPointerDown={filterPCs}>PCs</button>
            <button style={{border: 'none'}} className='white-90 b br2 f3 bg-blue pa2 grow' onPointerDown={filterNPCs}>NPCs</button>
        </div>
    );
}

export default FilterButtons;