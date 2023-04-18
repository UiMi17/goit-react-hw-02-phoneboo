import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createContact = ev => {
    this.setState(
      {
        name: ev.currentTarget.elements.name.value,
        number: ev.currentTarget.elements.number.value,
      },
      () => {
        this.setState(prevState => {
          return {
            contacts: [
              ...prevState.contacts,
              {
                name: this.state.name,
                number: this.state.number,
                id: nanoid(),
              },
            ],
          };
        });
      }
    );
  };

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.createContact(ev);
  };

  handleSearchInputChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return (
      <>
        <ContactsForm handleFormSubmit={this.handleFormSubmit} />
        <Filter handleSearchInputChange={this.handleSearchInputChange} />
        <ContactsList
          contacts={filteredContacts}
          handleSearchInputChange={this.handleSearchInputChange}
        />
      </>
    );
  }
}
