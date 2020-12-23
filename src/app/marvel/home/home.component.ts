import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerHome: string = 'assets/images/bannerHome.png'

  constructor() { }

  ngOnInit(): void {
  }

}
