import Neuron from "./neuron.js";

class Field {
  constructor(params) {
    this.Brain = params.Brain;
    this.Neurons = [];
    this.FillNeurons();
  }
  FillNeurons() {
    //this.Neurons.push(new Neuron({ Field: this }));
  }
}
export default Field;
// module.exports = {
//   Field: Field,
//   //John: John
// }
