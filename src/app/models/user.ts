import {cardsOwned} from "./cardsOwned";

export class User {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  cardsOwned: cardsOwned[];
  exp: number;
}
