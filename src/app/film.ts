import {Movie} from '../../client/model/Movie'

export class movie implements Movie {
  title: string;
  year: number;

  constructor( title: string,  year: number) {
    this.title = title;
    this.year = year;
  }

}
