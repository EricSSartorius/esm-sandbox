import React, { FC, createContext, useContext, useEffect, useState } from "react"

export const initialUserValues = {
  sessionId: "",
}

export const UserContext = createContext(initialUserValues)

export const UserProvider: FC = ({ children }) => {
  const [sessionId, setSessionId] = useState<string>(null!)

  useEffect(() => {
    // Set session id
    const seshId = "HARDCODEDED ID"
    setSessionId(seshId)
  }, [])

  return (
    <UserContext.Provider
      value={{
        sessionId,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
