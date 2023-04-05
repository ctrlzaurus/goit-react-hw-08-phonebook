import PropTypes from 'prop-types';

import d from './contactList.module.css';

function ContactsList({contacts, removeBtn}) {
    return (
      <>
        <ul className={d.containerContacts}>
          {contacts.map(({ name, number, id }) => (
            <li className={d.titleCont} key={id}>
              <p className={d.titleDesc}>{name}</p>
              <p className={d.titleDesc}>{number}</p>
              <button className={d.btn} onClick={(e) => removeBtn(id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </>
    );
}

ContactsList.propTypes = {
  removeBtn: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}

export default ContactsList;
