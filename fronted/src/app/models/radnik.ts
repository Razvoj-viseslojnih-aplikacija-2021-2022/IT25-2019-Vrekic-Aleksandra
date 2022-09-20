import { Obrazovanje } from "./obrazovanje";
import { Sektor } from "./sektor";

export class Radnik {

  id!: number;
  brojLk!: number;
  ime!: String;
  prezime!: String;
  obrazovanje!: Obrazovanje;
  sektor!: Sektor;

}
