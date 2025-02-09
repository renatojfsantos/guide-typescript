interface Person {
  firstName: string,
  lastName: string
}

interface User extends Person {
  age?: number,
}

function getFullName(obj: User): string {
  return `${obj.firstName} ${obj.lastName} ${obj?.age}`;
}

const zezinho: User = {
  firstName: "Renato",
  lastName: "Santos",
  age: 38,
}

const fullName = getFullName(zezinho);
console.log(fullName);