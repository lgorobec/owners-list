import React from 'react';
import './App.css';
import OwnerContextProvider from "./context/ownerContext";
import Workspace from "./components/workspace";

function App() {
  return (
      <OwnerContextProvider>
        <div className="App">
            <Workspace/>
        </div>
      </OwnerContextProvider>
  );
}

export default App;
