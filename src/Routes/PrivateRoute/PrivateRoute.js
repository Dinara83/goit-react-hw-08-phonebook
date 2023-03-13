import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

import { selectAuth } from 'redux/auth/auth-selectors';

const PrivateRote = () => {
  const { isLogin, token } = useSelector(selectAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRote;
