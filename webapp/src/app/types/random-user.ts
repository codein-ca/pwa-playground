export interface OriginalRandomUser {
  info: {},
  results: [
    {
      gender: string,
      name: {
        title: string,
        first: string,
        last: string
      },
      location: {
        street: string,
        city: string,
        state: string,
        postcode: string,
        coordinates: {
          latitude: number,
          longitude: number
        },
        timezone: {
          offset: string,
          description: string
        }
      },
      email: string,
      login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
      },
      dob: {
        date: string,
        age: number
      },
      registered: {
        date: string,
        age: number
      },
      phone: string,
      cell: string,
      id: {
        name: string,
        value: string
      },
      picture: {
        large: string,
        medium: string,
        thumbnail: string
      },
      nat: string,
      info: {
        seed: string,
        results: number,
        page: number,
        version: string
      }
    }
    ]
}

export interface RandomUser {
  phone: string,
  dob: string,
  age: number,
  email: string,
  gender: string,
  location: {
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
  },
  login: string,
  password: string,
  name: string,
  photo: string
}
