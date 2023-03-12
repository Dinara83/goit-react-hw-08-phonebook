import { Outlet } from 'react-router-dom';

import NavBar from 'NavBar/NavBar';
import css from './layout.module.css';

export const Layout = () => {
  return (
    <div >
		{/* className={styles.layout} */}
        <header className={css.wrapper}>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};