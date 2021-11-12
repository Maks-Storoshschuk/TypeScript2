var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: 'Max',
    age: 18,
    gender: 'male'
};
function sum(a, b) {
    return (a + b);
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
var Cat = /** @class */ (function () {
    function Cat() {
        this.moving = 'run';
        this.say = 'give me a milk';
    }
    Cat.prototype.Animal = function () {
        return 'Cat ' + this.moving + ' and saying ' + this.say;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.moving = 'fly';
        this.say = 'tzwirin`-tzwirin`';
    }
    Bird.prototype.Animal = function () {
        return 'Bird ' + this.moving + ' and saying ' + this.say;
    };
    return Bird;
}());
var fish = /** @class */ (function () {
    function fish() {
        this.moving = 'swim';
        this.say = 'bul-bul';
    }
    fish.prototype.Animal = function () {
        return 'Fish ' + this.moving + ' and saying ' + this.say;
    };
    return fish;
}());
// 3
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Triangle.prototype.area = function () {
        console.log('Area', this.constructor.name);
        return ((this.a * this.b) / 2);
    };
    Triangle.prototype.perimeter = function () {
        console.log('Perimeter', this.constructor.name);
        return (((this.a ^ 2 + this.b ^ 2) ^ (1 / 2)) + this.a + this.b);
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.area = function () {
        console.log('Area', this.constructor.name);
        return (this.a * this.b);
    };
    Rectangle.prototype.perimeter = function () {
        console.log('Perimeter', this.constructor.name);
        return ((this.a + this.b) * 2);
    };
    return Rectangle;
}(Shape));
var shapes = [new Triangle(3, 4), new Rectangle(4, 5)];
