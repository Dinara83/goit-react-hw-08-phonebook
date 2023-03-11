import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/auth-selectors";

// import css from './navbar-user.module.scss'

const NavBarUser = () => {
    const {name} = useSelector(selectUser);

    return (
        <div>
            {name}, <button>Logout</button>
        </div>
    )
}

export default NavBarUser;