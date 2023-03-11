export default class Age{
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    return parseFloat((this.age / 0.24).toFixed(2));
  }

}
