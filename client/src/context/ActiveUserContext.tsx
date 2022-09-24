import { createContext } from "react"

interface ActiveUserContextProps {
  children: any
}

export const UserContext: React.Context<string> = createContext('null')

export const ActiveUserContext = ( { children }: ActiveUserContextProps) => {
  
  return (
    <UserContext.Provider value={'data come out here'}>
      { children }
    </UserContext.Provider>
  )
}