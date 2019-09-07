import React from 'react';
import Routes from './src/Routes';
import { Provider } from 'mobx-react';
import Store from './src/store/Store';

const App = () => {
  return (
		<Provider {...Store}>
      <Routes />
    </Provider>
  );
};

export default App;

