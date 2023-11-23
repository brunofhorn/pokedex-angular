import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemon: any;
  public getAllPokemon: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe(
      res => {
        this.setAllPokemon = res.results;
        this.getAllPokemon = this.setAllPokemon;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemon.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemon = filter;
  }

}
