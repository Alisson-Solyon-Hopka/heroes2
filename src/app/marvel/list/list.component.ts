import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from './../../shared/loaders/loader.service';
import { CharactersApiService } from './character-api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ret;
  list: any = [];

  constructor(
              private character: CharactersApiService,
              private router: Router,
              public loaderService: LoaderService
              ) { }

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

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
