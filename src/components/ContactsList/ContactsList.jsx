import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice/contactsSlice';
import { filterFromRedux } from 'redux/slice/selector';

import d from './contactList.module.css';

const ContactsList = ({contacts}) => {
  const dispatch = useDispatch();
  const filter = useSelector(filterFromRedux);

  const sortedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

      return (
        <>
          <ul className={d.containerContacts}>
            {sortedContacts.map(({ name, number, id }) => (
              <li className={d.titleCont} key={id}>
                <p className={d.titleDesc}>{name}</p>
                <p className={d.titleDesc}>{number}</p>
                <button className={d.btn} onClick={() => dispatch(deleteContact(id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactsList;