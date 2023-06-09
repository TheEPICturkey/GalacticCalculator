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

  aPastBirthday(pastBirthday) {
    const earthYearsPassed = this.age - pastBirthday;
    return {
      earthYears: Math.floor(earthYearsPassed),
      mercuryYears: (earthYearsPassed / 0.24).toFixed(2),
      venusYears: (earthYearsPassed / 0.62).toFixed(2),
      marsYears: (earthYearsPassed / 1.88).toFixed(2),
      jupiterYears: (earthYearsPassed / 11.86).toFixed(2),
    };
  }

  nextBirthday(untilBirthday) {
    const earthYearsUntil = untilBirthday - this.age;
    return {
      earthYears: Math.floor(earthYearsUntil),
      mercuryYears: (earthYearsUntil / 0.24).toFixed(2),
      venusYears: (earthYearsUntil / 0.62).toFixed(2),
      marsYears: (earthYearsUntil / 1.88).toFixed(2),
      jupiterYears: (earthYearsUntil / 11.86).toFixed(2),
    };
  }

}
