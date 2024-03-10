const users = [
  {
    name: 'Raissa',
    age: 22,
    email: 'raissa_silva@hotmail.com',
  },
  {
    name: 'Robson',
    age: 25,
    email: 'robson_moises@hotmail.com',
  },
  {
    name: 'Thiago',
    age: 42,
    email: 'thiago.santos@gmail.com',
  },
]

const searchUser = (users, value) => {
  return new Promise((resolve, reject) => {
    const valueFound = users.find(
      (user) =>
        user.name === value || user.age === value || user.email === value
    )

    if (valueFound) {
      return resolve(valueFound)
    } else {
      return reject('Usuario não encontrado')
    }
  })
}

searchUser(users, 'Robson')
  .then((value) => {
    console.log(`Usuario ${value.name} encontrado`)
  })
  .catch((err) => {
    console.log(`Erro! ${err}.`)
  })
