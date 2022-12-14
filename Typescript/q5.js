var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.shapename = "Rectangle";
        this.length = l;
        this.breadth = b;
    }
    Rectangle.prototype.printname = function () {
        console.log(this.shapename);
    };
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var obj = new Rectangle(2, 3);
obj.printname();
console.log(obj.area());
