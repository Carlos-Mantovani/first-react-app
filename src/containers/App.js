import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import FilterButtons from '../components/FilterButtons';
import ErrorBoundry from '../components/ErrorBoundry';
import { characters } from '../characters';
import { npcs } from '../npcs';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ characters: characters });
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    filterPCs = () => {
        this.setState({ characters: characters });
    }

    filterNPCs = () => {
        this.setState({ characters: npcs });
    }

    render() {
        const { characters, searchfield } = this.state;
        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !characters.length ? <h1 className='f2 tc'>Loading...</h1> : (
            <div className='tc'>
                <h1 className='f1 dark-red'>D&D Characters</h1>
                <FilterButtons filterPCs={this.filterPCs} filterNPCs={this.filterNPCs}/>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList characters={filteredCharacters} />
                    </ErrorBoundry >
                </Scroll>
            </div>
        );
    }
}

export default App;