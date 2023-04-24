import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../interface/pokemonInterface';

const API_GET__ALL__POKEMON = environment.API_GET__ALL__POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<IPokemon>(API_GET__ALL__POKEMON);
  }

}