import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ArticlesComponent } from './content/articles/articles.component';
import { BestArticlesComponent } from './content/best-articles/best-articles.component';
import { FormFilterComponent } from './content/best-articles/form-filter/form-filter.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleCardsComponent } from './content/best-articles/article-cards/article-cards.component';
import { ArtCardComponent } from './content/best-articles/article-cards/art-card/art-card.component';
import { ArticlesListComponent } from './content/articles/articles-list/articles-list.component';
import { SearchComponent } from './content/articles/search/search.component';
import { AdvancedSearchComponent } from './content/articles/search/advanced-search/advanced-search.component';
import { ArtItemComponent } from './content/articles/articles-list/art-item/art-item.component';
import {DatePipe} from './common/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    BestArticlesComponent,
    FormFilterComponent,
    ArticleCardsComponent,
    ArtCardComponent,
    ArticlesListComponent,
    SearchComponent,
    AdvancedSearchComponent,
    ArtItemComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
