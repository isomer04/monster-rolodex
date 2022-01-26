import './App.css';
import { CardList} from './components/card-list/card-list.components';
import React, {Component } from 'react';
import './components/card-list/card-list.styles.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }


  render () {

    // const monsters = this.state.monsters;
    // const  searchField = this.state.searchField;
    // this shortcut and quickway writing 
    const { monsters, searchField } = this.state;


    const filteredMonsters =  monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={ e => {
          this.setState({ searchField: e.target.value }, () => console.log(this.state));
          

        }} />
        <CardList monsters={filteredMonsters} />
        
    </div>
    )
  }
}


export default App;
