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

})
