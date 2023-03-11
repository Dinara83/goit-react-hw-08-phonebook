import { BrowserRouter } from 'react-router-dom';

import NavBar from 'NavBar/NavBar';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <NavBar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
