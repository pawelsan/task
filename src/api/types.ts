import { Location } from 'components/Location/types'

export interface GetLocationsIdData {
  locations: Pick<Location, 'id'>[]
}

export interface GetLocationData {
  location: Location
}

export interface GetLocationInput {
  id: Location['id']
}
