import { createContext, Reducer, useReducer } from "react"

interface ActiveUserContextProps {
  children: any
}

export interface ActiveUserProps {
  id: string,
  name: string
}

export const UserContext: React.Context<{activeUser: ActiveUserProps} | {}> = createContext({})

const data = {
  activeUser: {
    id: '1jk3i8899dDFG32',
    name: 'jake'
  }
}

const loginReducer: Reducer<any, any> = ( state: { activeUser: ActiveUserProps }, action: any ) => {
  
  
  switch (action.type) {
    case 'LOGOUT':
      console.log('try init')
      return {activeUser: {id:'', name:''}}
    default:
      console.log('do default')
      return state
  }
}

export const ActiveUserContext = ( { children }: ActiveUserContextProps ) => {
  console.log('call the context')
  const [ state, dispatch ] = useReducer( loginReducer, data )
  
  const value = { state, dispatch }

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  )
}