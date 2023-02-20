import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactListElement({ contact, onDeleteCont }) {
    return (
      <li>
        {contact.name}: {contact.number}
        <button
          className={css.list_button}
          type="button"
          onClick={() => onDeleteCont(contact.id)}
        >
          Delete
        </button>
      </li>
    );
}

ContactListElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteCont: PropTypes.func.isRequired,
};
