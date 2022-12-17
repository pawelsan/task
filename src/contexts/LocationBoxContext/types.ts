import { Dispatch, ReactNode, SetStateAction } from 'react'
import { LocationType } from 'components/Location'

export interface LocationBoxContextProviderProps {
  children: ReactNode
}

export interface LocationBoxContextProps {
  location?: LocationType
  setLocation: Dispatch<SetStateAction<LocationType | undefined>>
  shouldReload: boolean
  setShouldReload: Dispatch<SetStateAction<boolean>>
}

export const locationBoxContextDefault: LocationBoxContextProps = {
  location: undefined,
  setLocation: () => void {},
  shouldReload: true,
  setShouldReload: () => void {},
}
