import React, { FC } from "react"
import { LoadingProvider } from "./loading"
import { UserProvider } from "./user"

// Provider Composer imports all Providers so that we can isolate related state
// All state is managed through state hooks in the individual providers
function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

export const ContextProvider: FC = ({ children }) => {
  return <ProviderComposer contexts={[<LoadingProvider />, <UserProvider />]}>{children}</ProviderComposer>
}
