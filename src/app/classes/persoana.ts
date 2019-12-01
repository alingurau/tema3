export class Persoana {
  private id: number;
  private nume: string;
  private varsta: number;
  private medieBac: number;

  constructor(i: number, n: string, v: number, mB: number) {
    this.id = i;
    this.nume = n;
    this.varsta = v;
    this.medieBac = mB;
  }

  getId() {
    return this.id;
  }

  getNume() {
    return this.nume;
  }

  setNume(val: string) {
    this.nume = val;
  }

  getVarsta() {
    return this.varsta;
  }

  setVarsta(val: number) {
    this.varsta = val;
  }

  getMedieBac() {
    return this.medieBac;
  }

  setMedieBac(val: number) {
    this.medieBac = val;
  }
}
