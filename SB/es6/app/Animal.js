class Animal {
  constructor(name, height) {
    this.name = name
    this.height = height
  }

  hello() {
    console.log(`Hi. This is ${this.name} from animal realm`)
  }
}

export default Animal
