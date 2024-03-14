

import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && <Homepage />}
    </div>
  );
}

export default App;
