import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { characters } from './characters';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            characters: characters,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value }); 
    }

    render() {
        const filteredCharacters = this.state.characters.filter(character => {
            return character.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1 dark-red'>D&D Characters</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList characters={filteredCharacters}/>
            </div>
        );
    }
}

export default App;