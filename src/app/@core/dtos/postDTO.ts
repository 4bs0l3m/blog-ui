import { BaseDTO } from './BaseDTO';

export class PostDTO extends BaseDTO {
  authorId!: string;
  categoryId!: string;
  title!: string;
  content!: string;
}
