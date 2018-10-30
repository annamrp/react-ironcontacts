import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import contacts from './contacts.json';

class App extends Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomContact = () => {
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
    /* MÉTODO THOR
    let {contacts} = this.state;
    contacts.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toLowerCase();
      if(nameA < nameB) { return -1; }
      if(nameA > nameB) { return 1; }
      return 0;
    })
    this.setState({
      contacts: contacts;
    })
    */

  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => {
        return b.popularity - a.popularity;
      })
    })
  }
  //a <Table /> le paso como props contacts que será igual al state, por lo que renderizará el estado actual
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          <Table contacts = {this.state.contacts}/>
      </div>
    );
  }
}

export default App;
