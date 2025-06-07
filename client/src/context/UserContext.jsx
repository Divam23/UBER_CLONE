import { createContext, useState } from 'react'

export const UserContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        isCaptain: false,
    });

  return (
    <div>
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider> 
        </div>
  )
}

export default UserContext