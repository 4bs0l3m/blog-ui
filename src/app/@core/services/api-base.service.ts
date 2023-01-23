import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ResultDTO } from '../dtos/result.dto';
import { QueryDTO } from '../dtos/QueryDTO';

export class ApiBaseService<T> {
  constructor(private httpClient: HttpClient, private root: string) {}

  protected getAuthToken() {
    return localStorage.getItem('authorization');
  }
  protected setAuthToken(token: string) {
    localStorage.setItem('authorization', token);
  }
  private getHeader(headers: any) {
    if (!headers) {
      headers = {};
    }
    let _authToken = this.getAuthToken();
    if (_authToken) {
      headers['authorization'] = 'Bearer ' + _authToken;
    }
    let requestHeaders = new HttpHeaders();
    let headerProps = Object.getOwnPropertyNames(headers);
    headerProps.forEach((name) => {
      requestHeaders = requestHeaders.append(name, headers[name]);
    });
    return requestHeaders;
  }
  getQueryParams(params: any) {
    if (params) {
      const paramKeys = Object.getOwnPropertyNames(params);

      return (
        '?' +
        paramKeys
          .map((item) => {
            return `${item}=${params[item]}`;
          })
          .join('&')
      );
    }
    return '';
  }
  private getFullPath(path: string) {
    return environment.API + path;
  }

  public get(path: string, headers?: any, params?: any) {
    return this.httpClient
      .get(this.getFullPath(path) + this.getQueryParams(params), {
        headers: this.getHeader(headers),
        observe: 'response',
      })
      .pipe(
        map((res) => {
          const result = <ResultDTO>res.body;
          return result;
        })
      );
  }
  public post(path: string, body: any, headers?: any) {
    return this.httpClient
      .post(this.getFullPath(path), body, {
        headers: this.getHeader(headers),
        observe: 'response',
      })
      .pipe(
        map((res) => {
          return <ResultDTO>res.body;
        })
      );
  }
  public put(path: string, body: any, headers?: any) {
    return this.httpClient
      .put(this.getFullPath(path), body, {
        headers: this.getHeader(headers),
        observe: 'response',
      })
      .pipe(
        map((res) => {
          return <ResultDTO>res.body;
        })
      );
  }
  public delete(path: string, headers?: any) {
    return this.httpClient
      .delete(this.getFullPath(path), {
        headers: this.getHeader(headers),
        observe: 'response',
      })
      .pipe(
        map((res) => {
          return <ResultDTO>res.body;
        })
      );
  }
  public list(query: QueryDTO) {
    this.get(this.root + '/list', null, query).pipe(
      map((res) => {
        if (res) {
          return res;
        } else {
          return null;
        }
      })
    );
  }
  public getById(id: string) {
    this.get(this.root + '/' + id).pipe(
      map((res) => {
        if (res && res.data) {
          return <T>res.data;
        } else {
          return null;
        }
      })
    );
  }
  public create(model: T) {
    return this.post(this.root + '/create', model).pipe(
      map((res) => {
        if (res && res.data) {
          return <string>res.data;
        } else {
          return null;
        }
      })
    );
  }
  public update(model: T) {
    return this.post(this.root + '/update', model).pipe(
      map((res) => {
        if (res && res.data) {
          return res.data;
        } else {
          return null;
        }
      })
    );
  }
  public deleteById(id: string) {
    this.get(this.root + '/delete/' + id).pipe(
      map((res) => {
        if (res && res.data) {
          return <string>res.data;
        } else {
          return null;
        }
      })
    );
  }
}
