/* eslint-disable camelcase */

export interface User {
  id: string,
  type: UserType,
  new_type: UserType,
  name: string,
  slug: string,
  occupation: string,
  description: string,
  image: {
    url: string,
    source: string,
    source_link: string,
    width: number,
    height: number
  },
  banner_image: {
    url: string,
    source: string,
    source_link: string,
    width: number,
    height: number
  },
  website: string,
  email: string,
  gender: string,
  birthday: Date,
  is_premium: boolean,
  newsletter_opt_in: string
}

export enum UserType {
  community = 'community',
  partner = 'partner'
}
