import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStayle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Vanessa' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStayle />
  </>
);
export default App;
