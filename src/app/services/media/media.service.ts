import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaDTO } from '../../@core/dtos/mediaDTO';
import { ApiBaseService } from '../../@core/services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class MediaService extends ApiBaseService<MediaDTO> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'category');
  }
}
