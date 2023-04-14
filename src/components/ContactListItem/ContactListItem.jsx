import css from './contactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, deleteContact }) => {
  const handleOnClick = event => {
    deleteContact(contact.id);
  };

  return (
    <li className={css.contactListItem}>
      {contact.name} : {contact.number}
      <button
        className={css.deleteButton}
        type="button"
        onClick={handleOnClick}
        data-id={contact.id}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  deleteContact: PropTypes.func,
};

export default ContactListItem;
