export class BaseDTO {
  id?: string;

  code?: string;
  metadata?: {
    createdTime?: Date;
    modifiedTime?: Date;
    createdBy?: string;
    modifiedBy?: string;
    active?: number;
  };
}
