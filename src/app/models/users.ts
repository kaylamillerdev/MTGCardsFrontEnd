export class users {
  UserId: number;
  FirstName: string;
  LastName: string;
  Username: string;
  Password: string;
  Admin: boolean;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  token: string;

  constructor() {}
}
