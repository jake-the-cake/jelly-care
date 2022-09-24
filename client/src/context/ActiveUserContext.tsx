import { createContext, useReducer } from "react"

interface ActiveUserContextProps {
  children: any
}

interface ActiveUserProps {
  id: string,
  name: string
}

export const UserContext: React.Context<ActiveUserProps | {}> = createContext({})

const data = {
  activeUser: {
    id: '1jk3i8899dDFG32',
    name: 'jake'
  }
}

const loginReducer = ( state: any, action: any ) => {
  
  
  switch (action.type) {
    default:
      return state.a
  }
}

export const ActiveUserContext = ( { children }: ActiveUserContextProps ) => {

  const [ state, dispatch ] = useReducer( loginReducer, data )
  

  return (
    <UserContext.Provider value={data}>
      { children }
    </UserContext.Provider>
  )
}