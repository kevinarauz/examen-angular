export interface IPokemon {
    count: string
    results: IResultPokemon[]
}

export interface IResultPokemon {
    name: string
    url: string
}