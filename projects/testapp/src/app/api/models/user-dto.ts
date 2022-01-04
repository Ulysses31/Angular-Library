export interface UserDto {
  id?: string;
  name?: null | string;
  username?: null | string;
  email?: null | string;
  address?: Address;
  phone?: null | string;
  website?: null | string;
  company?: Company;
}

export interface Address {
  street?: null | string;
  suite?: null | string;
  city?: null | string;
  zipcode?: null | string;
  geo?: Geo;
}

export interface Geo {
  lat?: null | string;
  lng?: null | string;
}

export interface Company {
  name?: null | string;
  catchPhrase?: null | string;
  bs?: null | string;
}
