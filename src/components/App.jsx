// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { contactsFromRedux } from 'redux/slice/selector';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';

// import contactsList from '../data/data.json';

const App = () => {
  
  const contacts = useSelector(contactsFromRedux);

    return(
      <div>
        <h2 className='mainTitle'>Phonebook</h2>
        <PhonebookForm />
        <h2 className='mainTitle'>Contacts</h2>
        { <FilterContacts /> }
        {contacts.lenghts !== 0 && <ContactsList contacts={contacts}/> }
      </div>
    )
}

export default App;

// updateFilter = {updateFilter}

// contacts = {inputFilterContacts()}
//           removeBtn = {removeBtn}