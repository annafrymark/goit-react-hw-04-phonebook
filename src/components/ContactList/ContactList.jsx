import { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './contactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};

export default ContactList;
