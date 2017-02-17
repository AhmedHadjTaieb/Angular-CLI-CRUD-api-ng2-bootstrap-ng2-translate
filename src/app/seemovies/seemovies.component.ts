import {Component, OnInit} from '@angular/core';
import {DefaultApi} from '../../../client/api/api'
import {AccordionModule} from 'ng2-bootstrap/accordion'
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-seemovies',
  templateUrl: './seemovies.component.html',
  styleUrls: ['./seemovies.component.css'],
  providers: [DefaultApi, AccordionModule]
})
export class SeemoviesComponent implements OnInit {
  visible: boolean;
  movies: any[] = [];
  nombrefilm: number;
  htmlText: string;

  constructor(public client: DefaultApi, private translate: TranslateService) {

  }



  ngOnInit() {
    this.client.getAll()
      .subscribe(res => {
          if (res.movies.length == 0) {
            this.visible = true;
          } else {
            this.visible = false;
          }
          for (let f of res.movies) {
            this.movies.push(f);
          }
          this.nombrefilm = this.movies.length;
        },
        error => {
          this.htmlText = "<div class=\"alert alert-danger\" style=\"width: 100%;text-align: center;\"> <center><i class=\"material-icons	\" style=\"font-size:450px;\">wifi</i> </center></alert> </div>"
        });


  }

}
