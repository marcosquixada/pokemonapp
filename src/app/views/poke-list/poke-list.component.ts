import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/shared/service/poke.service';
import { Poke } from 'src/app/shared/model/poke.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokesNext: Poke[] | undefined;
  pokesBackup: Poke[] | undefined;
  pokesPrevious: Poke[] | undefined;
  pokesNextReady: boolean = false;
  pokesPreviousReady: boolean = false;
  url: string = '';
  urlSafe: SafeResourceUrl | undefined;


  constructor(
    private rest: PokeService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getPokes();
  }

  searchPokemon(event: any) {
    let { target: { value } } = event;
    this.pokesNext = this.pokesBackup?.filter((elem: any) => elem.name.toLowerCase().includes(value.toLowerCase()));
  }

  async getPokes() {
    return new Promise((res) => {
      this.rest.getPokes().subscribe((data: any) => {
        this.pokesNext = data.data;
        this.pokesBackup = data.data;
  
        this.pokesNextReady = true;
        res(true);
      });
    })
  }

}
