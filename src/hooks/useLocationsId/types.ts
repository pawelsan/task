import { LocationType } from 'components/Location'

export interface UseLocationsIdProps {
  lastLocationId: LocationType['id'] | undefined
  getLocationsIdLoading: boolean
}
