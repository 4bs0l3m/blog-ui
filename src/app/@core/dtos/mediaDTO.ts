import { BaseDTO } from './BaseDTO';

export class MediaDTO extends BaseDTO {
  key!: string;
  type!: string;
  url!: string;
  postId!: string;
}
