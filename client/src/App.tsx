import React, { Context, createContext } from 'react'
import { Dashboard } from './pages/Dashboard';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login';

const UserContext: Context<any> = createContext({user: 'hi'})
let user = 'papa'

const App = () => {
  return (
    <UserContext.Provider value={{user:user + 'n'}}>
      <BrowserRouter>
        <nav className='header__container'>
          Navbar
          <Link to='/about'>About</Link>
          <Link to='/'>Home</Link>
        </nav>
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Login />} />
          <Route path='/about' element={<>About</>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App