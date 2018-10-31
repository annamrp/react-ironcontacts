import React, { Component } from 'react';
import Contact from './Contact.js'

class Table extends Component {
  //hacemos función para renderizar la lista de contacts con las props  de cada uno. 
  //hacemos el map sobre this.props.contacts pq queremos que se renderice lo que se actualiza en el state
  renderList() {
    return this.props.contacts.map((contact, index) => {
      return <Contact 
        key = {index}
        picture = {contact.pictureUrl}
        name = {contact.name}
        popularity = {contact.popularity}
        index = {index}
        deleteContact = {this.props.deleteContact}
        
        />
    })
  }

  render() {
    return (
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {this.renderList()}
      </tbody>
    </table>
    )
  }
}

export default Table;
