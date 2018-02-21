
export interface Address {
  street: string,
  city: string,
  state: string,
  zip: string
}

export interface User {
  id: number,
  identification: number,
  name: string,
  surname: string,
  email: string,
  addresses: Address[] | null,
}


export const states = ['CA', 'MD', 'OH', 'VA'];
