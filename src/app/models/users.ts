import {cardsOwned} from "./cardsOwned";

export class users {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  token: string;
  cardsOwned: cardsOwned[];
  exp: number;

  constructor() {}
}
