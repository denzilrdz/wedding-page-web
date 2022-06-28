import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './config/store';
import Routes from './config/routes.config';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Routes />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
