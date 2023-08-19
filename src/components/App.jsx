import React, { Component } from "react";
import ReactDOM from "react-dom";

import { nanoid } from "nanoid";

import { AddContact } from "./AddContact/AddContact"
import { ContactsList } from "./ContactsList/ContactsList"
import { ContactFilter } from "./ContactFilter/ContactFilter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-11'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter : '',
    
  }

  addContact = (newName, newNumber) =>{
    this.state.contacts.forEach(contact => {
      if(newName === contact.name){
        alert('Contact with this name already added');
        throw new Error("Contact with this name already added");
      }
    })

    this.setState(prevState => {
      return (
        {
          ...prevState,
          contacts : [...prevState.contacts, {id : nanoid(), name: newName, number: newNumber}]
        }
      )
    })
  }

  deleteContact = (contactId) =>{
    this.setState(prevState => {
      return {
        ...prevState,
        contacts : prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  }

  createVisibleContacts = () =>{
    const visibleContacts = this.state.filter.trim() === '' ? this.state.contacts : this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase().trim()))
    return visibleContacts
  }

  changeFilter = (filterQuery) =>{
    this.setState(prevState => {
      return{
        ...prevState,
        filter : filterQuery
      }
    })
  }


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact addContact={this.addContact}/>
        <h2>Contacts</h2>
        <ContactFilter createVisibleContacts={this.createVisibleContacts} changeFilter={this.changeFilter}/>
        <ContactsList contacts={this.createVisibleContacts()} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
