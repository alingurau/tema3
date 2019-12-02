import { Component } from "@angular/core";
import { Student } from "./classes/student";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tema3";

  public studentIsSelected: boolean = null;

  public editStudent: any = {};

  public anul: Array<number> = [1, 2, 3, 4];

  public errAdauga: boolean = false;
  public errEditeaza: boolean = false;

  public adaugaStudent: any = {};

  public students: Array<Student> = [];

  constructor() {
    var ls = localStorage.getItem("studentiStocati");
    if (ls != null) {
      var elemente = JSON.parse(ls);
      if (elemente.length > 0) {
        elemente.forEach(e => {
          var addStudent = new Student(
            e.id,
            e.nume,
            e.varsta,
            e.medieBac,
            e.facultate,
            e.sectie,
            e.anul,
            e.bursaDeStudiu
          );
          this.students.push(addStudent);
        });
      }
    }
  }

  public adauga(
    id: number,
    nume: string,
    varsta: number,
    medieBac: number,
    facultate: string,
    sectie: string,
    anul: number,
    bursaDeStudiu: boolean
  ): void {
    if (id == null) {
      if (this.students.length != 0) {
        id = this.students[this.students.length - 1].getId() + 1;
      } else {
        id = 1;
      }
    }
    if (
      nume != " " &&
      nume != null &&
      varsta != null &&
      medieBac != null &&
      facultate != " " &&
      facultate != null &&
      anul != null &&
      sectie != " " &&
      sectie != null &&
      bursaDeStudiu != null
    ) {
      var s: Student = new Student(
        id,
        nume,
        varsta,
        medieBac,
        facultate,
        sectie,
        anul,
        bursaDeStudiu
      );
      this.students.push(s);
      this.adaugaStudent = {};
      this.errAdauga = false;
      localStorage.setItem("studentiStocati", JSON.stringify(this.students));
    } else {
      this.errAdauga = true;
    }
  }

  public editeaza(s: Student): void {
    this.studentIsSelected = true;
    this.editStudent.id = s.getId();
    this.editStudent.nume = s.getNume();
    this.editStudent.varsta = s.getVarsta();
    this.editStudent.medieBac = s.getMedieBac();
    this.editStudent.facultate = s.getFacultate();
    this.editStudent.sectie = s.getSectie();
    this.editStudent.anul = s.getAnul();
    this.editStudent.bursaDeStudiu = s.getBursaDeStudiu();
  }

  public salveaza(): void {
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].getId() == this.editStudent.id) {
        if (
          this.editStudent.nume != "" &&
          this.editStudent.nume != null &&
          this.editStudent.varsta != null &&
          this.editStudent.facultate != " " &&
          this.editStudent.facultate != null &&
          this.editStudent.sectie != " " &&
          this.editStudent.sectie != null
        ) {
          this.students[i].setNume(this.editStudent.nume);
          this.students[i].setVarsta(this.editStudent.varsta);
          this.students[i].setMedieBac(this.editStudent.medieBac);
          this.students[i].setFacultate(this.editStudent.facultate);
          this.students[i].setSectie(this.editStudent.sectie);
          this.students[i].setAnul(this.editStudent.anul);
          this.students[i].setBursaDeStudiu(this.editStudent.bursaDeStudiu);
          localStorage.setItem(
            "studentiStocati",
            JSON.stringify(this.students)
          );
          this.errEditeaza = false;
          this.deselecteaza();
        } else {
          this.errEditeaza = true;
        }
      }
    }
  }

  public deselecteaza(): void {
    this.studentIsSelected = false;
    this.editStudent = {};
  }

  public sterge(id): void {
    this.deselecteaza();
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].getId() == id) {
        this.students.splice(i, 1);
        localStorage.setItem("studentiStocati", JSON.stringify(this.students));
      }
    }
  }
}
