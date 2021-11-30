import {cardsOwned} from "./cardsOwned";

export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  cardsOwned: cardsOwned[];
}
