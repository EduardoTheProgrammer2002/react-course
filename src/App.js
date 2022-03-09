/* eslint-disable array-callback-return */
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // Using the user API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    //this stands for the string that the user puts on the search box
    let searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => { // that way we update the searchfield to basicly pass it into the filter function of the monsters.
      return { searchField };
    })
  }

  render() {
    //Ec2016 optimitation for confortable reable for us.
    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;

    //this is the array of monsters already filtered
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className = "monsters-search-box" 
        placeholder = "Search monsters" 
        onChangeHandler = {onSearchChange}/> 
        <CardList monsters={filteredMonsters} />
      </div>
    );  
  }  
}

export default App;
