import Age from "../src/EarthAge.JS";

describe("Age ", () => {
  let myAge;

  beforeEach(() => {
    myAge = new Age(22);
  });

  describe("constructor", () => {
    it("should display UsersAge(UA)", () => {
      expect(myAge.age).toEqual(22);
    });
  });

  describe("mercuryAge()", () => {
    it("should display UA in Mercury years", () => {
      expect(myAge.mercuryAge()).toEqual(91.67);
    });
  });

  describe("venusAge()", () => {
    it("should display UA in Venus years", () => {
      expect(myAge.venusAge()).toEqual(35.48);
    });
  });

  describe("marsAge()", () => {
    it("should display UA in Mars years", () => {
      expect(myAge.marsAge()).toEqual(11.70);
    });
  });

  describe("jupiterAge()", () => {
    it("should display UA in Jupiter years", () => {
      expect(myAge.jupiterAge()).toEqual(1.85);
    });
  });

  describe("aPastBirthday", () => {
    it("should display years on each planet from a previous birthday", () => {
      const yearsSince12thBirthday = myAge.aPastBirthday(12);
      expect(yearsSince12thBirthday).toEqual({
        earthYears: 10,
        mercuryYears: '41.67',
        venusYears: '16.13',
        marsYears: '5.32',
        jupiterYears: '0.84'
      });
    });
  });

})
