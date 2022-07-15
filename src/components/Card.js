import React from 'react';

const Card = ({ name, race, classs }) => {
    return (
        <div className='ba b--silver bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div className='br2' style={{backgroundImage: `url('./img/${name}.jpg')`, backgroundSize: 'cover', width: '260px', height: '260px'}}></div>
            <div>
                <h2 className='f3 tc'>{name}</h2>
                <p className='f4 tc'>{race} {classs}</p>
            </div>
        </div>
    );
}

export default Card;