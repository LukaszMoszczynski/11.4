function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printInfo = function () {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + ", screen size is " + this.size + ".");
}
Phone.prototype.write = function () {
	document.write("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + ", screen size is " + this.size + ".");
	document.write("<br>");
}

var iPhone6s = new Phone("Apple", 2250, "silver", '5,5"');
iPhone6s.printInfo();

var GalaxyS6 = new Phone("Samsung", 2150, "black", '6"');
GalaxyS6.printInfo();

var OnePlus = new Phone("One", 1980, "white", '5"');
OnePlus.printInfo();

iPhone6s.write();

GalaxyS6.write();

OnePlus.write();