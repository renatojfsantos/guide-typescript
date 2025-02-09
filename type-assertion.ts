interface Person {
  firstName: string,
  lastName: string,
  email: string,
  address: {
    street: string,
    number: number,
    zipCode: string,
  },
}

const value = { address: { zipCode: '19160-000' }} as Person;

console.log(value.firstName)