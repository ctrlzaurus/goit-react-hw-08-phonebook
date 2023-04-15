import { useDispatch } from 'react-redux';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import ContactsList from '../components/ContactsList/ContactsList';
import FilterContacts from '../components/FilterContacts/FilterContacts';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { useEffect } from 'react';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
      <div>
        <h2 className='mainTitle'>Phonebook</h2>
        <PhonebookForm />
        <h2 className='mainTitle'>Contacts</h2>
          <FilterContacts />
          <ContactsList />
      </div>
    )
}

export default Phonebook;