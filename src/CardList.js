import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
    const cardList = characters.map((e, i) => {
        return (
            <Card
                key={characters[i].id}
                id={characters[i].id}
                name={characters[i].name}
                race={characters[i].race}
                classs={characters[i].class}
            />
        );
    });

    return cardList;
}

export default CardList;