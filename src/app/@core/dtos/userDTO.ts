import { BaseDTO } from './BaseDTO';

export class UserDTO extends BaseDTO {
  email!: string;

  password!: string;

  activate?: boolean;
}
