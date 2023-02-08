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

  formSubmit = data => {
    data.name !== this.state.contacts.name
      ? this.setState({ contacts: [...this.state.contacts, data] })
      : alert(data.name, ' is already in contacts');
  };

  // function deleteItem(id) { 
    
  // }
  // deleteItem = id => {
  //   console.log('ID',id.id)
  //   this.setState(({ contacts }) => {
  //     const index = contacts.indexOf(id);
  //     console.log("index", index);
  //     const before = contacts.slice(0, index);
  //     console.log('before', before);
  //     const after = contacts.slice(index + 1);
  //     console.log('after', after);

  //     console.log(before, after);
  //     const newArray = [...before, ...after];
  //     return {
  //       contacts: newArray,
  //     };
  //   });
  // };

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
        <ContactList contacts={visibleFilter} />
      </div>
    );
  }
}

export default App;
