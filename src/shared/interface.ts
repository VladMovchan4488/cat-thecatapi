export interface IStateHomePage {
  cat: any;
  cats?: Array<any[]>,
  isLoading: boolean,
  error: boolean
}

export interface ICat {
  id: string
  name: string
  origin: string
  description: string
  temperament: string
  image: IImage
}

export interface IImage {
  id: string
  url: string
  width: number
  height: number
}