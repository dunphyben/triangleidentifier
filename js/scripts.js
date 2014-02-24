var Triangle = {

  type: function() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1) {
      return "isosceles";
    } else if (this.side1 != this.side2 && this.side2 != this.side3) {
      return "scalene";
    } else {
      return "invalid";
    }
  },

  isTriangle: function() {
    return ((this.side1 + this.side2 > this.side3) && 
            (this.side2 + this.side3 > this.side1) &&
            (this.side3 + this.side1 > this.side2));
  }
};

$(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var side1 = $("input#side-1").val();
    var side2 = $("input#side-2").val();
    var side3 = $("input#side-3").val();

    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = parseInt(side1);
    newTriangle.side2 = parseInt(side2);
    newTriangle.side3 = parseInt(side3);
    
    if (newTriangle.isTriangle() === true) {
      $("ul#" + newTriangle.type()).append("<li>" + side1 + ", " + side2 + ", " + side3 +"</li>");
    } else {
      alert('Not a valid triangle!');
    }

  });
});
