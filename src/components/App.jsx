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
  };

  createContact = ev => {
    const { contacts } = this.state;
    const { name, number } = ev.target.elements;
    const USERNAME = name.value;
    const USER_NUMBER = number.value;

    const CONTACTS_NAMES = contacts.map(contact => {
      return contact.name;
    });

    if (!CONTACTS_NAMES.includes(USERNAME)) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: USERNAME,
              number: USER_NUMBER,
              id: nanoid(),
            },
          ],
        };
      });
    } else {
      alert(`${USERNAME} is already in contacts.`);
    }
  };

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.createContact(ev);
  };

  handleSearchInputChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  handleDeleteBtnClick = ev => {
    const CONTACTS = this.state.contacts;
    const CONTACT_ID = ev.target.getAttribute('id');

    const CONTACTS_TO_SHOW = CONTACTS.filter(contact => {
      return contact.id !== CONTACT_ID;
    });

    this.setState({
      contacts: CONTACTS_TO_SHOW,
    });
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
          handleDeleteBtnClick={this.handleDeleteBtnClick}
        />
      </>
    );
  }
}
