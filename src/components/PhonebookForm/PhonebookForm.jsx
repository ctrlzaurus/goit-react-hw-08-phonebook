import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contactsSlice';
import { contactsFromRedux } from 'redux/slice/selector';

import d from './phonebookForm.module.css';

const PhonebookForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const dispatch = useDispatch();
    const contacts = useSelector(contactsFromRedux);
  
    const repeatControlData = data => {
      const savedNameArray = contacts.map(({ name }) => name.toLowerCase());
  
      if (savedNameArray.includes(data.name.toLowerCase())) {
        alert(' Контакт вже є у телефонній книзі!');
        return;
      }
      return dispatch(addContact(data.name, data.number));
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
      const id = shortid.generate();
      repeatControlData({ name, number, id });
      // reset
      setName('');
      setNumber('');
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
                    value={name}
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