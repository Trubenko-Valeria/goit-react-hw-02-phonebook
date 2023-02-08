import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {

  return (
    <ul className={css.list_contacts}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}   
          <button className={css.list_button } type="button" onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
