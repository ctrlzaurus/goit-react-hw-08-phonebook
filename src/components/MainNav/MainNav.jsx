import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import clsx from 'clsx';

import d from './mainNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authSlice';
import { selectorIsAuth } from 'redux/auth/authSelector';

const getACtiveClass = ({ isActive }) => clsx(d.link, isActive && d.active);

const MainNav = () => {
    const isAuth = useSelector(selectorIsAuth);

    const dispatch = useDispatch();

    return (
        <header className={d.header}>
            <nav>
                <ul className={d.headerList}>
                    {!isAuth ? (
                        <>
                            <li className={d.headerItem}>
                            <NavLink
                                className={getACtiveClass}
                                to={routes.REGISTER}
                                end
                            >
                                Register
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={getACtiveClass}
                                    to={routes.LOG_IN}
                                    end
                                >
                                    Log In
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li className={d.headerLogout}>
                            <p></p>
                            <button
                                className={d.btnLogout}
                                onClick={() => dispatch(logout())}
                            >
                                Logout
                            </button>
                        </li>
                    )} 
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;