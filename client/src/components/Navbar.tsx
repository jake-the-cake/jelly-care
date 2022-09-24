import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/ActiveUserContext'
import { navigationData } from '../data/navigationData'

export const Navbar = () => {
  const ctx = useContext(UserContext)
  console.log(ctx)
  return (
    <nav className='header__container'>
      <div className='header__title'>
        <span className='header__title--text'>JellyCare</span>
      </div>
      <div className='header__nav'>
        {
          navigationData.map(( link, index: number ) => (
            link.type === 'link' && <Link className='header__nav--link' to={link.url}>{ link.text }</Link>
          ))
        }
      </div>
    </nav>
  )
}