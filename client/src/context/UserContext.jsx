import { createContext, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        isCaptain: false,
    });

  return (
    <div>
        <UserDataContext.Provider value={[user, setUser]}>
            {children}
        </UserDataContext.Provider> 
        </div>
  )
}

export default UserContext