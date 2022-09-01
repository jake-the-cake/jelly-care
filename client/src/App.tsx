import React, { Context, useContext } from 'react'

const UserContext: Context<any>= React.createContext(null)
let user = 'papa'

const App = () => {
  return (
    <UserContext.Provider value={{user:user + 'n'}}>
      <div className="App">
        App
      </div>
    </UserContext.Provider>
  );
}

export default App