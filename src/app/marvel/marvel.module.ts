import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';
import { PaginatePipe } from '../pipes/paginate.pipe';

@NgModule({
  declarations: [HomeComponent, ListComponent, DescriptionComponent, PaginatePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  exports: [],
})
export class MarvelModule {}
