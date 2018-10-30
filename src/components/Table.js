import React, { Component } from 'react';
import Contact from './Contact.js'

class Table extends Component {

  renderList() {
    return this.props.contacts.map((contact, index) => {
      return <Contact 
        key = {index}
        picture = {contact.pictureUrl}
        name = {contact.name}
        popularity = {contact.popularity}
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
