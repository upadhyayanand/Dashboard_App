import React from 'react';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';

const App = () => {

  return (
    <Provider store={ store }>
      <div className='min-h-screen min-w-full bg-slate-200'>
        <header className='bg-white shadow-md'>
        <Header />
        </header>
        
        <main>
          <Dashboard />
        </main>

      </div>
    </Provider>
  );
};

export default App;