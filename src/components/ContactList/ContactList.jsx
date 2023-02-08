import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteCont }) {
  return (
    <ul className={css.list_contacts}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}   
          <button className={css.list_button} type="button" onClick={() => onDeleteCont(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteCont: PropTypes.func.isRequired,
};
