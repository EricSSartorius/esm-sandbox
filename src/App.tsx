import React, { useEffect } from "react"
import { ContextProvider, useLoad, useUser } from "./global"

export function App({ children }) {
  return (
    <ContextProvider>
      <header>
        <h1>test</h1>
      </header>
      <main>
        <Child />
      </main>
    </ContextProvider>
  )
}

const Child = () => {
  const { setIsLoading, isLoading } = useLoad()
  const { sessionId } = useUser()
  const toggleLoad = () => {
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    setIsLoading(true)
    // Mock fetching stuff
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      <h2>{isLoading ? "...Loading" : sessionId}</h2>
      <button onClick={toggleLoad}>Toggle load</button>
    </div>
  )
}
