/**
 * Api movies
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class DefaultApi {
  protected basePath = 'http://localhost:10010';
  public defaultHeaders: Headers = new Headers();

  constructor(protected http: Http, @Optional() basePath: string) {
    if (basePath) {
      this.basePath = basePath;
    }
  }

  /**
   *
   * delete a movie
   * @param id Movie id
   */
  public delMovie(id: string, extraHttpRequestParams?: any): Observable<models.GeneralResponse> {
    const path = this.basePath + '/movie/{id}'
        .replace('{' + 'id' + '}', String(id));

    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling delMovie.');
    }
    let requestOptions: RequestOptionsArgs = {
      method: 'DELETE',
      headers: headerParams,
      search: queryParameters
    };

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  /**
   *
   * get the movies list
   */
  public getAll(extraHttpRequestParams?: any): Observable<models.GetMoviesListResponse> {
    const path = this.basePath + '/movie';

    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;
    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: headerParams,
      search: queryParameters
    };

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  /**
   *
   * get a movie
   * @param id
   */
  public getOne(id: string, extraHttpRequestParams?: any): Observable<models.GetMovieResponse> {
    const path = this.basePath + '/movie/{id}'
        .replace('{' + 'id' + '}', String(id));

    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getOne.');
    }
    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: headerParams,
      search: queryParameters
    };

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  /**
   *
   * patch a movie
   * @param id Movie id
   * @param title Movie properties
   */
  public patch(id: string, title?: models.Movie, extraHttpRequestParams?: any): Observable<models.GeneralResponse> {
    const path = this.basePath + '/movie/{id}'
        .replace('{' + 'id' + '}', String(id));

    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;
    headerParams.set('Content-Type', 'application/json');
    headerParams.set('Parameter-Type', 'validateUsr=false');
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling patch.');
    }
    let requestOptions: RequestOptionsArgs = {
      method: 'PATCH',
      headers: headerParams,
      search: queryParameters
    };
    requestOptions.body = JSON.stringify(title);

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  /**
   *
   * add a new movie to the list
   * @param title Movie properties
   */
  public save(title: models.Movie, extraHttpRequestParams?: any): Observable<models.GeneralResponse> {
    const path = this.basePath + '/movie';
    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;
    headerParams.set('Content-Type', 'application/json');
    headerParams.set('Parameter-Type', 'validateUsr=false');

    // verify required parameter 'title' is not null or undefined
    if (title === null || title === undefined) {
      throw new Error('Required parameter title was null or undefined when calling save.');
    }
    let requestOptions: RequestOptionsArgs = {
      method: 'POST',
      headers: headerParams,
      search: queryParameters
    };
    requestOptions.body = JSON.stringify(title);
    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  /**
   *
   * update a movie
   * @param id Movie id
   * @param title Movie properties
   */
  public update(id: string, title: models.Movie, extraHttpRequestParams?: any): Observable<models.GeneralResponse> {
    const path = this.basePath + '/movie/{id}'
        .replace('{' + 'id' + '}', String(id));

    let queryParameters = new URLSearchParams();
    let headerParams = this.defaultHeaders;
    headerParams.set('Content-Type', 'application/json');
    headerParams.set('Parameter-Type', 'validateUsr=false');
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling update.');
    }
    // verify required parameter 'title' is not null or undefined
    if (title === null || title === undefined) {
      throw new Error('Required parameter title was null or undefined when calling update.');
    }
    let requestOptions: RequestOptionsArgs = {
      method: 'PUT',
      headers: headerParams,
      search: queryParameters
    };
    requestOptions.body = JSON.stringify(title);

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

}