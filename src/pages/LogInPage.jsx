import { useState } from 'react';
import { useDispatch } from 'react-redux';

import d from './inputForm.module.css';
import { loginUserOperation } from 'redux/auth/authOperations';

const LoginPage = () => {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const user = {email, password};

        dispatch(loginUserOperation(user));
        event.target.reset();
    }

    return <form onSubmit={handleSubmit} className={d.inputForm}>
        <label className={d.inputLabel}>
            <p className={d.inputDiscription}>Email</p>
            <input 
                type='text' 
                name='email'
                placeholder='E-mail'
                onChange={handleChange}
                className={d.input}
            />
            <p className={d.inputDiscription}>Password</p>
            <input 
                type='text' 
                name='password'
                placeholder='Password'
                onChange={handleChange}
                className={d.input} 
            />
        </label>
        <button type="submit" className={d.inputBtn}>Login</button>
    </form>
};

export default LoginPage;