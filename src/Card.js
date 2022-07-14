import React from 'react';

const Card = ({ name, race, classs }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={name} src={`/img/${name}.jpg`} width='250px' height='250px' />
            <div>
                <h2 className='f3 tc'>{name}</h2>
                <p className='f4 tc'>{race} {classs}</p>
            </div>
        </div>
    );
}

export default Card;