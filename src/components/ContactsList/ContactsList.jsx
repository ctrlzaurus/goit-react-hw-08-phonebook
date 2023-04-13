import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { itemFilter, itemContacts } from '../../redux/contacts/contactsSelector';

import d from './contactList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(itemFilter);
  const contacts = useSelector(itemContacts);

  const sortedContacts = contacts.filter(({ name }) => 
    name.toLowerCase().includes(filter.toLowerCase())
  );

      return (
        <>
          <ul className={d.containerContacts}>
            {sortedContacts.map(contact => {
              return (
              <li className={d.titleCont} key={contact.id}>
                <p className={d.titleDesc}>{contact.name}</p>
                <p className={d.titleDesc}>{contact.number}</p>
                <button 
                  className={d.btn}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Remove
                </button>
              </li>
              )
            })}
          </ul>
        </>
      );
};

export default ContactsList;