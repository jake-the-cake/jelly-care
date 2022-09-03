import React, { Context, createContext } from 'react'
import { Dashboard } from './pages/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

const UserContext: Context<any> = createContext({user: 'hi'})
let user: string | null = 'papa'
// user = null

const App = () => {
  return (
    <UserContext.Provider value={{user:user + 'n'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<>Home Page</>} />
          <Route path='/home' element={user ? <Dashboard /> : <Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <footer>
          Footer
        </footer>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App