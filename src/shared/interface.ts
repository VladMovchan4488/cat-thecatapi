export interface IStateHomePage {
  cat: any
  cats?: Array<any[]>
  isLoading: boolean
  error: boolean
  loadMore: boolean
}

export interface IStateCatPage {
  cat: any;
  chooseBreed: ICat[]
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