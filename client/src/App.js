import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './components/SearchBar';
import Logs from './components/Logs';
import AddLogModal from './components/AddLogModal';
import EditLogModal from './components/EditLogModal';
import AddTechModal from './components/AddTechModal';
import TechListModal from './components/TechListModal';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Fragment>
          <SearchBar />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </Fragment>
      </Provider>
    </div>
  );
};

export default App;
