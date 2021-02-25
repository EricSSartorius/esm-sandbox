import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react'

export const initialLoadingValues = {
  isLoading: false,
  setIsLoading: (_: boolean) => {},
}

export const LoadingContext = createContext(initialLoadingValues)

export const LoadingProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

//? Used for global loader
export const useLoad = () => useContext(LoadingContext)

//? Used for a local loader such as a spinning animation
export const useLoading = (localLoading: boolean) => {
  const { setIsLoading, isLoading } = useContext(LoadingContext)

  useEffect(() => {
    setIsLoading(localLoading)
  }, [localLoading])

  return { setIsLoading, isLoading }
}
