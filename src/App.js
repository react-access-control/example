import React from 'react';

import {useAuthentication} from '@react-access-control/authentication';


function App() {
  const authentication = useAuthentication()
  return (
    <div className="App">
      <button onClick={async () => await authentication.login()}>Login</button>
      <button onClick={async () => await authentication.logout()}>Logout</button>
    </div>
  );
}

export default App;
