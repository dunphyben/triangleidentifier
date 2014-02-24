describe("Triangle", function() {
  describe("type", function() {
    it("uses method type to determine triangle type.", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal("equilateral");
    });
  });
  describe("isTriangle", function() {
    it("returns true if invalid triangle, false if valid", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.isTriangle().should.equal(true);
    });
  });
  describe("isTriangle (it isn't)", function() {
    it("returns false if invalid triangle (input is not a triangle)", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 65;
      testTriangle.side2 = 1039;
      testTriangle.side3 = 4;
      testTriangle.isTriangle().should.equal(false);
    });
  });
  describe("isTriangle", function() {
    it("returns true if valid triangle (input is isocelese triangle)", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 4;
      testTriangle.side3 = 2;
      testTriangle.isTriangle().should.equal(true);
    })
  })
});
