import { FormEvent } from "react"
import { MainCard } from "../components/MainCard"
import { fakeUsers } from "../data/fakeUsers"

export const Login = () => {
  const handleLogin = ( event: FormEvent ) => {
    event.preventDefault()
    const submittedEmail = ((event.target as HTMLFormElement).children[0].children[0] as HTMLInputElement).value
    const emailMatch = fakeUsers.filter( user => user.email === submittedEmail )
    if ( emailMatch.length === 0 ) console.log('no email address found')
    else if ( emailMatch.length === 1 ) console.log('email address found')
    else {
      // this should never happen!
      console.log('multiple email address found')
    }
  }

  return (
    <MainCard
      content={
        <form className="form__container" action="#" onSubmit={handleLogin}>
          <div className="form__body">
            <input id='emailInput' type='text' /> 
            <input id='passwordInput' type='text' /> 
            <button>Login</button>
          </div>
        </form>
      }
    />
  )
}