
//======type aliases======
type StringOrNumber = string | number
type objectWithName = {name: string, uuid: StringOrNumber}

const detalis = (uuid: StringOrNumber, item:string) => {
console.log(`${item} has a uuid of ${uuid}`)
}

const user = (user: objectWithName) => {
  console.log(`${user.name} says hi`)
}