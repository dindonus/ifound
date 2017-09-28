class SingletonSharedStorage {
  constructor() {
    this.data = {};
  }
  set(name, value) {
    this.data[name] = value;
  }
  get(name) {
    return this.data[name];
  }
}

const storage = new SingletonSharedStorage();

export default storage;
