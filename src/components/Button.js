import React, { Component } from 'react';

//creamos un botón totalmente reutilizable
class Button extends Component {
  render() {
    return(
      <button onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}




// En App.js

// le pongo una propiedad que es una función. El onClick es una prop en ese caso para definir qué hace
<Button onClick={this.handleAddContact}>Add contact</Button>
<Button onClick={this.handleSortContact}>Sort contacts</Button>