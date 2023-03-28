import PropTypes from 'prop-types';

import { Component } from 'react';

import d from './contactList.module.css';

class ContactsList extends Component {
  render() {
    return (
      <>
        <ul className={d.containerContacts}>
          {this.props.contacts.map(({ name, number, id }) => (
            <li className={d.titleCont} key={id}>
              <p className={d.titleDesc}>{name}</p>
              <p className={d.titleDesc}>{number}</p>
              <button className={d.btn} onClick={(e) => this.props.removeBtn(id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
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
