import { Component } from 'react';
import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmit = nameCont => {
    function checkAvailability(arr, val) {
      return arr.some(arrVal => val === arrVal.name);
    }
    const rez = checkAvailability(this.state.contacts, nameCont.name);

    rez
      ? alert(nameCont.name + ' is already in contacts.')
      : this.setState({
          contacts: [...this.state.contacts, nameCont],
      });
    
    return rez
    
    // if (rez) {
    //   alert({ nameCont }, 'is a contact');
    // } else {
    //   this.setState({
    //     contacts: [...this.state.contacts, nameCont],
    // })
  };

  deleteContact = idCont => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== idCont),
    }));
  };

  getVisibleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(filt =>
      filt.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getVisibleFilter();
    // const rezult =;
    // console.log('REZ', rezult);

    return (
      <div className={css.main_wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContact} />
        <ContactList
          contacts={visibleFilter}
          onDeleteCont={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
