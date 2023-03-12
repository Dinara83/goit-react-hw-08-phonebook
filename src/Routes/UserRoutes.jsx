import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRote from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ImportantContactsPage = lazy(() =>
  import('../pages/ImportantContactsPage/ImportantContactsPage')
);
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRote />}>
            <Route path="/contacts" element={<HomePage />} />
            <Route
              path="/important-contacts"
              element={<ImportantContactsPage />}
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
