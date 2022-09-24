import React, { Context, createContext } from 'react'
import { Dashboard } from './pages/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { ActiveUserContext } from './context/ActiveUserContext';

// const UserContext: Context<any> = createContext({user: 'hi'})
let user: string | null = 'papa'
// user = null

const App = () => {
  return (
    <ActiveUserContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <footer>
          Footer
        </footer>
      </BrowserRouter>
    </ActiveUserContext>
  )
}

export default App