import React from 'react';
import NavBar from './NavBar';
import ApiCaller from './components/api-caller/ApiCaller'

// styles
import './App.css'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ marginTop: 80 }}>
        <ApiCaller></ApiCaller>
      </div>
    </div>
  );
}

export default App;
