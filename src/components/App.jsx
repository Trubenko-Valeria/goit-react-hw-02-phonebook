import { Component } from 'react';
import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmit = data => {
    console.log('DDDDDDDDDDD', data.name)
    const dat = this.state.contacts.includes(data.name);
    console.log('DDDDDDDDDDD', dat);
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  deleteContact = idCont => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !==idCont)
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleFilter = contacts.filter(filt =>
      filt.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className={css.main_wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContact} />
        <ContactList contacts={visibleFilter} onDeleteCont={this.deleteContact} />
      </div>
    );
  }
}

export default App;
