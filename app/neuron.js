class Neuron {
  constructor(params) {
    this.Field = params.Field;
    if (params.onFire != null) {
      this.onFire = params.onFire;
    }
    this.Connections = {};
    this.Connections.Input = [];//Dendrites
    this.Connections.Output = [];//Axon

  }
  FillConnections() {

  }
  Fire(params) { this.onFire(); }
  onFire() { }
}

export default Neuron;