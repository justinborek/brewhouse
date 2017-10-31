const Users = [
  {
    username: 'justinborek',
    password: 'password',
    firstName: 'Justin',
    lastName: 'Borek',
    email: 'justinborek@gmail.com',
    isSubscriber: true,
    equipment: {
      kettleSize: 5,
      fermenters: {
        1: {
          type: 'carboy',
          size: 5,
          activeRecipe: 'IPA'
        },
        2: {
          type: 'carboy',
          size: 5,
          activeRecipe: ''
        },
        3: {
          type: 'carboy',
          size: 6.5,
          activeRecipe: 'Stout'
        },
        4: {
          type: 'carboy',
          size: 6.5,
          activeRecipe: ''
        }
      }
    }
  }
]

export default Users;