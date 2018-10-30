import React, { Component } from 'react';

class Contact extends Component {
  //cada contact se renderizará con las props que le pasamos desde el map que hacemos en Table.js
  render() {
    return (
          <tr>
            <td><img src={this.props.picture} alt="actor/actress"></img></td>
            <td>{this.props.name}</td>
            <td>{Math.round((this.props.popularity)*100)/100}</td>
          </tr>
        )
      }};
 


export default Contact;
