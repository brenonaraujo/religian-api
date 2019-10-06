import { Apostle, Rank } from '../apostle.interface';

export class ApostleDto {
  constructor(data: Apostle) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.about = data.about;
    this.rank = data.rank;
  }

  firstname: string;
  lastname: string;
  email: string;
  about: string;
  rank: Rank;
}
