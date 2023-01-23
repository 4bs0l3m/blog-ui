import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO } from '../../@core/dtos/categoryDTO';
import { ApiBaseService } from '../../@core/services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends ApiBaseService<CategoryDTO> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'category');
  }
}
