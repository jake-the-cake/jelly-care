import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/ActiveUserContext'
import { navigationData } from '../data/navigationData'

export const Navbar = () => {
  const { state, dispatch }: any = useContext(UserContext)
  console.log('current state')
  console.log(state)
  // console.log(dispatch)
  return (
    <nav className='header__container'>
      <div className='header__title'>
        <span className='header__title--text'>JellyCare</span>
      </div>
      <div className='header__nav'>
        {
          navigationData.map(( link, index: number ) => (
            link.type === 'link' && <Link key={ `navlink-${index}` }className='header__nav--link' to={link.url}>{ link.text }</Link>
          ))
        }
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>Log out</button>
      </div>
    </nav>
  )
}