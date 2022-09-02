import React, { Context, createContext } from 'react'
import { Dashboard } from './pages/Dashboard';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login';

const UserContext: Context<any> = createContext({user: 'hi'})
let user: string | null = 'papa'
// user = null

const App = () => {
  return (
    <UserContext.Provider value={{user:user + 'n'}}>
      <BrowserRouter>
        <nav className='header__container'>
          Navbar
          <Link to='/login'>Login</Link>
          <Link to='/home'>Dashboard</Link>
          <Link to='/'>Home</Link>
        </nav>
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