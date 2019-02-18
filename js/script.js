function Phone(brand, model, price, color,) {
	this.brand = brand;
  this.model = model;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ' and the model is ' + this.model + ", color is " + this.color + " and the price is " + this.price + " zł.");
}

var iPhone6S = new Phone("Apple", "iPhone6S", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", "GalaxyS6", 800, "black");
var OnePlusOne = new Phone("OnePlus", "One", 1800, "white");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();