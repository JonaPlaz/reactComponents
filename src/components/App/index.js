// == Import npm
import React from 'react';

// == Import
// import reactLogo from './react-logo.svg';
import './styles.scss';

// == import components
import Header from 'src/components/Header';

// == Composant
const App = () => (
  <div className="app">
    {/* <img src={reactLogo} alt="react logo" /> */}
    <Header />
  </div>
);

// == Export
export default App;
