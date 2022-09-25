import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MainCard } from "../components/MainCard"
import { fakeUsers } from "../data/fakeUsers"

export const Login = () => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const handleLogin = ( event: FormEvent ) => {
    event.preventDefault()
    const submittedEmail = ((event.target as HTMLFormElement).children[0].children[0] as HTMLInputElement).value
    const submittedPassword = ((event.target as HTMLFormElement).children[0].children[1] as HTMLInputElement).value
    const emailMatch = fakeUsers.filter( user => user.email === submittedEmail )
    if ( emailMatch.length === 0 ) {
      setEmailError('No account exists for this email.')
      if ( passwordError ) setPasswordError('')
    }
    else if ( emailMatch.length === 1 ) {
      if ( emailError ) setEmailError('')
      if ( emailMatch[0].password !== submittedPassword) {
        setPasswordError('Incorrect password.')
      }
      else {
        if ( passwordError ) setPasswordError('')
      }
    }
    else {
      // this should never happen!
      console.log('multiple email address found')
      navigate('/error/unknown')
    }
  }

  return (
    <MainCard
      content={
        <form className="form__container" action="#" onSubmit={handleLogin}>
          <div className="form__body">
            <input id='emailInput' type='text' />
            {
              emailError && <span className="form__error--text">{ emailError }</span>
            }
            <input id='passwordInput' type='password' />
            {
              passwordError && <span className="form__error--text">{ passwordError }</span>
            }
            <button>Login</button>
          </div>
        </form>
      }
    />
  )
}