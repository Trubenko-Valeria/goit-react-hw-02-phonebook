import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactListElement from './ContactListElement';
export default function ContactList({ contacts, onDeleteCont }) {
  return (
    <ul className={css.list_contacts}>
      {contacts.map(contact => (
        <ContactListElement key={ contact.id } contact={contact} onDeleteCont={onDeleteCont} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteCont: PropTypes.func.isRequired,
};
