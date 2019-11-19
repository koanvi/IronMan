
import Person from "./person.js";

class World {
  constructor() {
    this.Field = null;
    this.Persons = null;
    this.Fill();

  }
  Fill() {
    this.FillField();
    this.FillPersons();

  }
  FillField() {
    this.Field = new Array(10);
    this.Field.fill(new Array(10));
    this.Field.forEach(element => {
      element.fill(0);
    });
fore    this.Field.forEach(element => {
      element.forEach(element2 => {
        element2 = Math.random();
      });
    });



  }
  GetMaxPosition() {
    return { x: this.Field.length, y: this.Field[0].length };
  }
  FillPersons() {
    this.Persons = [];
    this.Persons.push(new Person({ World: this }));
  }
  SeeTile(params) {
    return (this.Field[params.x][params.y]);
  }
}


export default World;