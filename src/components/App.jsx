import { Component } from 'react';

import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';

import data from '../data/data.json';
import FilterContacts from './FilterContacts/FilterContacts';


class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  addContacts = (contact) => {
    if (this.state.contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())) {
      alert (`${contact.name} is already in contacts`);
      return;
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  removeBtn = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
  };
 
  updateFilter = (event) => {
    this.setState({filter:event.target.value.toLowerCase()});
  }
  
  inputFilterContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  }

  render() {
    const filterList = this.inputFilterContacts();

    return(
      <div>
        <h2 className='mainTitle'>Phonebook</h2>
        <PhonebookForm 
          addContacts = {this.addContacts}
        />
        <h2 className='mainTitle'>Contacts</h2>
        <FilterContacts
          updateFilter = {this.updateFilter}/> 
        <ContactsList 
          contacts = {filterList}
          removeBtn = {this.removeBtn}/>
      </div>
    )
  }
}

export default App;