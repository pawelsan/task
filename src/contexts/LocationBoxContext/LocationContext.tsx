import React, { createContext, useState } from 'react'
import {
  LocationBoxContextProps,
  locationBoxContextDefault,
  LocationBoxContextProviderProps,
} from './types'
import { LocationType } from 'components/Location'

export const LocationBoxContext = createContext<LocationBoxContextProps>(locationBoxContextDefault)

export const LocationBoxContextProvider: React.FC<LocationBoxContextProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<LocationType>()
  const [shouldReload, setShouldReload] = useState<boolean>(locationBoxContextDefault.shouldReload)

  return (
    <LocationBoxContext.Provider value={{ location, setLocation, shouldReload, setShouldReload }}>
      {children}
    </LocationBoxContext.Provider>
  )
}
