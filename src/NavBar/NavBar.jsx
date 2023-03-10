import { NavLink } from 'react-router-dom';

import css from './nav-bar.module.css';
import NavbarAuth from './NavBarAuth/NavBarAuth';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavBar = () => {  
	return (
	  <header className={css.wrapper}>
		<ul className={css.menu}>
		  <li className={css.liContacts}>
		  <NavLink className={getClassName} to='/important-contacts'>
		  Important Contacts
		</NavLink>
		  </li>
		  <li className={css.liPhonebook}>
		  <NavLink className={getClassName} to='/'>
		  Phonebook
		</NavLink>
		  </li>
		  <li>
			<NavbarAuth />
		  </li>
		</ul>
	  </header>
	);
  };
  
// const NavBar = () => {
//   const elements = items.map(({ id, text, link }) => (
//     <li key={id}>
//       <NavLink className={getClassName} to={link}>
//         {text}
//       </NavLink>
//     </li>
//   ));

//   return (
//     <header className={css.wrapper}>
//       <ul className={css.menu}>
//         {elements}
//         <li>
//           <NavbarAuth className={getClassName} />
//         </li>
//       </ul>
//     </header>
//   );
// };

export default NavBar;
