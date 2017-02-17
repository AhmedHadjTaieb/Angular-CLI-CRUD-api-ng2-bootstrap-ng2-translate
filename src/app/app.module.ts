import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SeemoviesComponent} from './seemovies/seemovies.component';
import {FindmoviesComponent} from './findmovies/findmovies.component';
import {AddmoviesComponent} from './addmovies/addmovies.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {AccordionModule, CollapseModule, AlertModule, ModalModule} from 'ng2-bootstrap';
import {TranslateModule,TranslateStaticLoader,TranslateLoader} from 'ng2-translate';
import {Http} from '@angular/http';


const appRoutes: Routes = [
  {path: 'Movies', component: SeemoviesComponent},
  {path: 'ADD-Movies', component: AddmoviesComponent},
  {path: 'Find-Movies', component: FindmoviesComponent},


  //{path: 'hero/:id', component: HeroDetailComponent},
  //{path: 'heroes',component: HeroListComponent,  data: {title: 'Heroes List'}},
  {path: '', redirectTo: '/Movies', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    SeemoviesComponent,
    FindmoviesComponent,
    AddmoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*{
 provide: TranslateLoader,
 useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
 deps: [Http]
 }*/
