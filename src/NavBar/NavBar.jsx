import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './nav-bar.module.scss';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <header className={css.wrapper}>
      <ul className={css.menu}>
        <li className={css.liContacts}>
          <NavLink className={getClassName} to="/important-contacts">
            Important Contacts
          </NavLink>
        </li>
        <li className={css.liPhonebook}>
          <NavLink className={getClassName} to="/">
            Phonebook
          </NavLink>
        </li>
        <li>
          {!isLogin && <NavBarAuth />}
          {isLogin && <NavBarUser />}
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
