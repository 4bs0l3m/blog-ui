import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostDTO } from '../../@core/dtos/postDTO';
import { ApiBaseService } from '../../@core/services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends ApiBaseService<PostDTO> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'post');
  }
}
