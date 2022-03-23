import React, {Component} from 'react'
import {CardList} from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {


    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
    }

    handleChange = (event) => { this.setState({searchField: event.target.value}) }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        console.log(filteredMonsters)
        return (
            <div className='App'>
                <SearchBox
                    handleChange={this.handleChange}
                    placeholder="search monsters"/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

}

export default App;
