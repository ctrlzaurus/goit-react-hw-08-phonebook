import { useEffect, useState } from 'react';

import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';

import contactsList from '../data/data.json';
import FilterContacts from './FilterContacts/FilterContacts';


function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || contactsList);
  const [filter, setFilter] = useState('');

  const addContacts = (contact) => {
    if (contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())) {
      alert (`${contact.name} is already in contacts`);
      return;
    }
    setContacts((prev) => ([...prev, contact]));
    // this.setState((prev) => ({
    //   contacts: [...prev.contacts, contact],
    // }));
  };

  const removeBtn = (id) => {
    setContacts((prev) => (prev.filter((el) => el.id !== id)));
  };
 
  const updateFilter = (event) => {
    setFilter(event.target.value.toLowerCase())
    // this.setState({filter:event.target.value.toLowerCase()});
  };
  
  const inputFilterContacts = () => {
    // const {contacts, filter} = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };

  // componentDidMount() {
  //   const contacts =
  //     JSON.parse(localStorage.getItem('contacts')) || contactsList;

  //   this.setState({ contacts });
  // }

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

    // const filterList = inputFilterContacts();

    return(
      <div>
        <h2 className='mainTitle'>Phonebook</h2>
        <PhonebookForm 
          addContacts = {addContacts}
        />
        <h2 className='mainTitle'>Contacts</h2>
        <FilterContacts
          updateFilter = {updateFilter}/> 
        <ContactsList 
          contacts = {inputFilterContacts()}
          removeBtn = {removeBtn}/>
      </div>
    )
}

export default App;