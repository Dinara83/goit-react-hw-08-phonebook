import { useDispatch } from 'react-redux';
// import { Navigate } from "react-router-dom";

import { register } from '../../redux/auth/auth-operations';
// import { isUserLogin } from "redux/auth/auth-selectors";

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  // const isLogin = useSelector(isUserLogin)
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(register(data));
  };

  // if (isLogin) {
  // 	return <Navigate to='/'/>
  // }

  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
