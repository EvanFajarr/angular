export interface signUp {
  name: string;
  email: string;
  password: string;
}

export interface login {
  email: string;
  password: string;
}


export interface product {
  name: string,
  price: string,
  category: string,
  desc: string,
  image: string,
  id: number
}
