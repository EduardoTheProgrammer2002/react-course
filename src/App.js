/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  const [searchField, setSearcField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => setMonsters(users));  
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    //this stands for the string that the user puts on the search box
    let searchFieldString = event.target.value.toLocaleLowerCase();
    setSearcField(searchFieldString);
  }

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
};

export default App;