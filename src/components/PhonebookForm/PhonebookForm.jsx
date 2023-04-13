import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { itemContacts } from 'redux/contacts/contactsSelector';

import d from './phonebookForm.module.css';

const PhonebookForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const dispatch = useDispatch();
    const contacts = useSelector(itemContacts);
  
    const repeatControlData = ({name, number}) => {
      const savedName = contacts.map(({ name }) => name.toLowerCase());
  
      if (savedName.includes(name.toLowerCase())) {
        alert('Контакт вже існує');
        return;
      }
      return dispatch(addContact({name, number}));
    };
  
    const handleChange = event => {
      const { name, value } = event.currentTarget;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      repeatControlData({ name, number });
      event.target.reset();
    };

    return(
        <form className={d.conteinerForm} onSubmit = {handleSubmit} >
            <div>
                <h3 className={d.title}>Name</h3>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
                    className={d.input}
                    required
                />
            </div>

            <div>
                <h3 className={d.title}>Number</h3>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    className={d.input}
                    required
                />        
            </div>
            <button className={d.btn} type='submit'>Add contact</button>
        </form>
    ) 
}

export default PhonebookForm;