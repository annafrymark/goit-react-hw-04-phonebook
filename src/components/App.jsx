import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts') != null) {
      try {
        setContacts(JSON.parse(localStorage.getItem('contacts')));
      } catch (e) {
        console.error('Wrong JSON format of contacts');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onChange={onFilterChange} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
