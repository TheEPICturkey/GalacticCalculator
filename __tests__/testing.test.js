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

})
