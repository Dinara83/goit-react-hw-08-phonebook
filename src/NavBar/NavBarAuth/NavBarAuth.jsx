import { NavLink } from "react-router-dom";
import css from './navbar-auth.module.css';

const getClassName = ({ isActive }) => {
	const className = isActive ? `${css.link} ${css.active}` : css.link;
	return className;
  };
  
const NavbarAuth = () => {
	return (<div className={css.menu}>
		<NavLink className={getClassName} to="/register">Register</NavLink> 
		<NavLink className={getClassName} to="/login">Login</NavLink>
	</div>)
}

export default NavbarAuth;