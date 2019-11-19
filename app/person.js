
class Person {
  constructor(params) {
    this.World = params.World;
    //0 up
    //1 right
    //2 down
    //3 left
    this.Direction = 0;
    this.Position = {};
    this.Position.x = 0;
    this.Position.y = 0;

    this.See = null;
    this.Brain = null;
  }
  Move() {
    var maxPos = this.World.GetMaxPosition();
    if (this.Direction == 0) {
      if (this.Position.y != maxPos.y) { ++this.Position.y; }
    }
    if (this.Direction == 1) {
      if (this.Position.x != maxPos.x) { ++this.Position.x; }
    }
    if (this.Direction == 2) {
      if (this.Position.y != 0) { --this.Position.y; }
    }
    if (this.Direction == 3) {
      if (this.Position.x != 0) { --this.Position.x; }
    }
  }
  TurnLeft() {
    if (this.Direction == 0) {
      this.Direction = 3;
    } else {
      this.Direction = this.Direction - 1;
    }
  }
  TurnRight() {
    if (this.Direction == 3) {
      this.Direction = 0;
    } else {
      this.Direction = this.Direction + 1;
    }
  }
  FillSee() {
    var Position = { x: null, y: null }
    Position.x = this.Position.x;
    Position.y = this.Position.y;
    var maxPos = this.World.GetMaxPosition();
    if (this.Direction == 0) {
      if (this.Position.y != maxPos.y) { ++Position.y; }
    }
    if (this.Direction == 1) {
      if (this.Position.x != maxPos.x) { ++Position.x; }
    }
    if (this.Direction == 2) {
      if (this.Position.y != 0) { --Position.y; }
    }
    if (this.Direction == 3) {
      if (this.Position.x != 0) { --Position.x; }
    }


    this.See = this.World.SeeTile(Position);
  }
}


export default Person;