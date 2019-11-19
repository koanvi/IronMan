import Field from "./field.js";
import Neuron from "./neuron.js";

class Brain {
  constructor(params) {
    this.Person = params.Person;
    this.Fields = [];
    this.FillFields();
  }
  FillFields() {

    //#region eyes
    var eyes = new Field({ Brain: this });
    eyes.Name = "eyes";
    var neyes = new Neuron({ Field: eyes, onFire: function (e) { }.bind(this) })
    neyes.Connections.Input.push({ value: 0 });
    eyes.Neurons.push(neyes);
    this.Fields.push(eyes);
    //#endregion eyes

    //#region move
    //App.World.Persons[0].Brain.Fields[1].Neurons[0].Fire()
    var move = new Field({ Brain: this });
    move.Name = "move";
    var nmove = new Neuron({ Field: move, onFire: function (e) { this.Person.Move(); }.bind(this) })
    move.Neurons.push(nmove);
    this.Fields.push(move);
    //#endregion move

    //#region turn
    //App.World.Persons[0].Brain.Fields[2].Neurons[0].Fire()
    //App.World.Persons[0].Brain.Fields[2].Neurons[1].Fire()

    var turn = new Field({ Brain: this });
    turn.Name = "turn";

    var nturnLeft = new Neuron({ Field: turn, onFire: function (e) { this.Person.TurnLeft(); }.bind(this) })
    nturnLeft.name = "turnLeft";
    turn.Neurons.push(nturnLeft);

    var nturnRight = new Neuron({ Field: turn, onFire: function (e) { this.Person.TurnRight(); }.bind(this) })
    nturnRight.name = "turnRight";
    turn.Neurons.push(nturnRight);

    this.Fields.push(turn);
    //#endregion turn

    //#region eat
    var eat = new Field({ Brain: this });
    eat.Name = "eat";
    eat.Neurons.push(new Neuron({ Field: eat, onFire: function (e) { }.bind(this) }));
    eat.Neurons.push(new Neuron(eat));
    this.Fields.push(eat);
    //#endregion eat

  }
  GetSee() {
    this.Person.FillSee();
    this.Fields
      .filter(function (item, i, arr) {
        return (item.Name == "eyes");
      }.bind(this))
      .forEach(function (item, i, arr) {
        item.Connections[0].value = this.Person.See
      }.bind(this));;
  }
  Run() {

  }
}

export default Brain;