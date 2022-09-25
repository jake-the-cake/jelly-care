import { Dashboard } from './pages/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { ActiveUserContext } from './context/ActiveUserContext';

let user: string | null = 'papa'

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