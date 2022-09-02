import React, { Context, createContext } from 'react'
import { Dashboard } from './pages/Dashboard';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

const UserContext: Context<any> = createContext(null)
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
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<>About</>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App