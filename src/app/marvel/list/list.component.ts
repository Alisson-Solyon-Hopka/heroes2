import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from './../../shared/loaders/loader.service';
import { CharactersApiService } from './character-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ret;
  list: any = [];

  constructor(private character: CharactersApiService, private router: Router, public loaderService: LoaderService) { }

  ngOnInit() {
    this.character.getCaracters().subscribe(characters => {
      this.ret = characters
      this.list = this.ret.data.results
      console.log(this.list);      
    })
  }

  onDescription(caracter) {
    this.router.navigate(['/list', caracter.id]);
  }
}
