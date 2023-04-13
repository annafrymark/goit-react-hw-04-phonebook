import { Component } from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeNumber = event => {
    this.setState({
      number: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addNewContact } = this.props;
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    let contactExist = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts.`);
        contactExist = true;
      }
    });

    if (!contactExist) {
      addNewContact(newContact);
    }

    this.reset();
  };

  render() {
    const { name, number } = this.state;

    //console.log({ name, number });
    const nameInputId = nanoid();

    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          value={name}
          onChange={this.handleChangeName}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          value={number}
          onChange={this.handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="submit"
          className={css.button}
          //disabled={!isActive}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  addNewContact: PropTypes.func,
};

export default ContactForm;
