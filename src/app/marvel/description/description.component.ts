import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoaderService } from './../../shared/loaders/loader.service';
import { CharactersApiService } from './../list/character-api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public offDescription = true;

  public descriptionId;
  searchResult;
  listDescription: any = []

  constructor(
              private route: ActivatedRoute,
              private caracter: CharactersApiService,
              public loaderService: LoaderService
              ) {

    this.descriptionId = parseInt(this.route.snapshot.paramMap.get('id'))

  }

  ngOnInit(): void {
    this.caracter.getCaracter(this.descriptionId).subscribe(caracter => {
      this.searchResult = caracter
      this.listDescription = this.searchResult.data.results[0]
      console.log(this.listDescription.comics);
      console.log(this.listDescription.events);
      console.log(this.listDescription.stories);
    })
  }

}
