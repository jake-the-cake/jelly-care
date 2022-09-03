import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='header__container'>
      Navbar
      <Link to='/login'>Login</Link>
      <Link to='/home'>Dashboard</Link>
      <Link to='/'>Home</Link>
    </nav>
  )
}