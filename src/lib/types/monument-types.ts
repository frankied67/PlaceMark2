export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Monument {
  monument: string;
  lat: number;
  lng: number;
  category: string;
  _id?: string;
  user?: string;
}
