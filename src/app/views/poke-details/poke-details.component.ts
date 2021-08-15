import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/shared/service/poke.service';
import { Poke } from 'src/app/shared/model/poke.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  poke: Poke | undefined;
  pokesNextReady: boolean = false;
  pokesPreviousReady: boolean = false;
  url: string = '';
  urlSafe: SafeResourceUrl | undefined;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  constructor(
    private rest: PokeService,
    public sanitizer: DomSanitizer,
    private router: ActivatedRoute
  ) {

   }

  ngOnInit() {
    let id = this.router.snapshot.url[1].path;
    this.getPokes(id);
  }

  async getPokes(id: string){
    return new Promise((res)=> {
      this.rest.getPoke(id).subscribe((data: any) => {
        this.poke = data.data;
        
        this.pokesNextReady = true;
        res(true);
      });
    })
  }

}
