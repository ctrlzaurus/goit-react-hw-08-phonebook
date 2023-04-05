import { useState } from "react";

import shortid from 'shortid';

import PropTypes from 'prop-types';

import d from './phonebookForm.module.css';

function PhonebookForm({addContacts}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // state = {
    //     name: '',
    //     number: '',
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;

        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;

        }
        // this.setState({[name]: value})
    };

    const handleSubmit = (event) => {
        // const id = event.target.id;
        event.preventDefault();
        const contactId = {name, number, id: shortid.generate()};
        addContacts(contactId);
        event.target.reset();
    }

        return(
            <form className={d.conteinerForm} onSubmit = {handleSubmit} >
                <div>
                    <h3 className={d.title}>Name</h3>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        // value={this.state.name}
                        onChange={handleChange}
                        className={d.input}
                    />
                </div>

                <div>
                    <h3 className={d.title}>Number</h3>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        // value={this.state.number} 
                        onChange={handleChange}
                        className={d.input}
                    />        
                </div>
                <button className={d.btn} type='submit'>Add contact</button>
            </form>
        ) 
}

PhonebookForm.propTypes = {
    // handleChange: PropTypes.func,
    addContacts: PropTypes.func.isRequired,
}

export default PhonebookForm;