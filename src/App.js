import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persisto } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persisto={persisto}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
