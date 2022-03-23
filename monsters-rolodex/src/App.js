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
            .then(users => console.log(this.setState({monsters: users})))
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        console.log(filteredMonsters)
        return (
            <div className='App'>
                <SearchBox
                    handleChange={e => {this.setState({searchField: e.target.value}, () => {console.log(this.state)})}}
                    placeholder="search monsters"/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

}

export default App;
