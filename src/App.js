import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import contacts from './contacts.json';

class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  getRandomContact = () => {
    const random = Math.floor(Math.random()*contacts.length)
    this.setState({
      contacts: this.state.contacts.concat(contacts[random])
    })  
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        return b.popularity - a.popularity;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          <Table contacts = {this.state.contacts}/>
      </div>
    );
  }
}

export default App;
