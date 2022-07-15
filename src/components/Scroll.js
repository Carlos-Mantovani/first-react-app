import React from 'react';

const Scroll = (props) => {
    return(
        <div className='pv2' style={{overflowY: 'auto', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;