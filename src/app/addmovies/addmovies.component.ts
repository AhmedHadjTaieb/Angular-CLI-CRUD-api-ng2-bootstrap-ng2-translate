import {Component, OnInit} from '@angular/core';
import {DefaultApi} from '../../../client/api/api'
import {movie} from '../film'
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css'],
  providers: [DefaultApi]
})
export class AddmoviesComponent implements OnInit {
  public alerts: any = [];
  public MovieForm = this.fb.group({
    title: ["", Validators.required],
    year: ["", Validators.required]
  });

  constructor(public client: DefaultApi, public fb: FormBuilder) {
  }


  ngOnInit() {
  }

  onSubmit() {
    let film = new movie(this.MovieForm.value.title,this.MovieForm.value.year);
    this.client.save(film)
      .subscribe(res => console.log(res),error => console.log(error));

    this.alerts.push({
      type: 'success',
      msg: `Votre film est ajouter avec succée`,
      timeout: 2000
    });

  }


}



