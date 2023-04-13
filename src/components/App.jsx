import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    if (localStorage.getItem('contacts') != null) {
      try {
        this.setState({
          contacts: JSON.parse(localStorage.getItem('contacts')),
        });
      } catch (e) {
        console.error('Wrong JSON format of contacts');
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
    console.log(newContact);
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  onFilterChange = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filterValue = this.state.filter;

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addNewContact={this.addNewContact}
        />
        <h2>Contacts</h2>
        <Filter filterValue={filterValue} onChange={this.onFilterChange} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
