export interface Child {
  name: string,
  age: number
}
export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number, // if exist
  children: Child[] | null,
  nationality: string
}

