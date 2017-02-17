import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {DefaultApi} from '../../../client/api/api'
import {ModalDirective} from 'ng2-bootstrap/modal';
import {movie} from '../film'


@Component({
  selector: 'app-findmovies',
  templateUrl: './findmovies.component.html',
  styleUrls: ['./findmovies.component.css'],
  providers: [DefaultApi]

})
export class FindmoviesComponent implements OnInit {
  public isCollapsed: boolean = false;
  type: string;
  msg: string;
  nom: string;
  annee: number;
  visible: boolean = true;

  @ViewChild('childModaldelete') public childModaldelete: ModalDirective;
  @ViewChild('childModalmodifier') public childModalmodifier: ModalDirective;

  constructor(public client: DefaultApi) {
  }

  public showChildModaldelete(): void {
    this.childModaldelete.show();
  }

  public hideChildModaldelete(): void {
    this.childModaldelete.hide();
  }

  public showChildModalmodifier(): void {
    this.childModalmodifier.show();
  }

  public hideChildModalmodifier(): void {
    this.childModalmodifier.hide();
  }

  onKey(txt:string) {
    if (txt != "") {
      this.visible = false;
    }
  }

  ngOnInit() {
  }

  onValide(titre:string, annee:number, id:string) {
    var film = new movie(titre, Number(annee));
    this.client.update(id, film).subscribe(res => {
      this.nom = film.title;
      this.annee = film.year;
      this.type = 'success';
      this.msg = '<strong>Valider !</strong></br>Votre film est bien modifier !';
    });
    this.visible = true;
    this.type = 'warning';
    this.msg = '<strong>OUPS !</strong></br>Votre film n\'est pas modifier !';
    this.hideChildModalmodifier();
  }

  onModifier() {
    this.showChildModalmodifier();
  }

  onDelete(id:string) {
    this.showChildModaldelete();
    this.client.delMovie(id).subscribe(res => {
      this.visible = true;
      this.type = 'success';
      this.msg = '<strong>Valider !</strong></br>Votre film est bien effacer !';
      this.isCollapsed = false;
    });


  }

  onCherche(id:string) {
    if (id != "") {

      this.client.getOne(id).subscribe(
        res => {
          if (res != null) {
            this.nom = res.title;
            this.annee = res.year;
            this.isCollapsed = true;
          } else {
            this.isCollapsed = false;
            this.visible = true;
            this.type = 'danger';
            this.msg = '<strong>Oh !</strong></br> N\'existe pas !';
          }
        },
        error => this.isCollapsed = false
      );
    } else {
      this.isCollapsed = false;
      this.visible = true;
      this.type = 'warning';
      this.msg = '<strong>Warning!</strong></br>Il faut remplir le champ !';
    }
  }
}
