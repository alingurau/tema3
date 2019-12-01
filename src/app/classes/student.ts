import { Persoana } from "./persoana";

export class Student extends Persoana {
  private facultate: string;
  private sectie: string;
  private anul: number;
  private bursaDeStudiu: boolean;

  constructor(
    id: number,
    n: string,
    v: number,
    mB: number,
    f: string,
    s: string,
    a: number,
    bDS: boolean
  ) {
    super(id, n, v, mB);
    this.facultate = f;
    this.sectie = s;
    this.anul = a;
    this.bursaDeStudiu = bDS;
  }

  setFacultate(val: string) {
    this.facultate = val;
  }

  getFacultate() {
    return this.facultate;
  }

  setSectie(val: string) {
    this.sectie = val;
  }

  getSectie() {
    return this.sectie;
  }

  setAnul(val: number) {
    this.anul = val;
  }

  getAnul() {
    return this.anul;
  }

  setBursaDeStudiu(val: boolean) {
    this.bursaDeStudiu = val;
  }

  getBursaDeStudiu() {
    return this.bursaDeStudiu;
  }
}
