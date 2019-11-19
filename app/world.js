
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
    this.Field.fill(0);

    this.Field.forEach(function (item, i, arr) {
      item = new Array(10);
      item.fill(0);
      item.forEach(function (item2, i2, arr2) {
        arr2[i2] = Math.random();
      }.bind(this));
      arr[i] = item;
    });

  }
  GetMaxPosition() {
    return { x: this.Field.length - 1, y: this.Field[0].length - 1 };
  }
  FillPersons() {
    this.Persons = [];
    this.Persons.push(new Person({ World: this, Position: { x: 0, y: 0 } }));
  }
  SeeTile(params) {
    return (this.Field[params.x][params.y]);
  }
}


export default World;