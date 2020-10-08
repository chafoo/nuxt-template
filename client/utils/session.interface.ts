export interface Session {
  user: SessionUser,
  token: string | null
}

export interface SessionUser {
  name: string | null,
  first: string | null,
  last: string | null,
  image: string | null,
  role: SessionUserRole | null
}

export enum SessionUserRole {
  private = 'private',
  public = 'public'
}
