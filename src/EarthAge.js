export default class Age{
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    return parseFloat((this.age / 0.24).toFixed(2));
  }

  venusAge() {
    return parseFloat((this.age / 0.62).toFixed(2));
  }

  marsAge() {
    return parseFloat((this.age / 1.88).toFixed(2));
  }

  jupiterAge() {
    return parseFloat((this.age / 11.86).toFixed(2));
  }

}
