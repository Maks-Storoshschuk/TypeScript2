// 1
interface IUser {
    name: string
    age: number,
    gender: string
}

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return (a + b);
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)

// 2
interface IAnimal {
    moving: string;
    say: string;

    Animal(): string;
}

class Cat implements IAnimal {
    moving: string;
    say: string;

    constructor() {
        this.moving = 'run'
        this.say = 'give me a milk';
    }

    Animal(): string {
        return 'Cat ' + this.moving + ' and saying ' + this.say;
    }
}

class Bird implements IAnimal {
    moving: string;
    say: string;

    constructor() {
        this.moving = 'fly';
        this.say = 'tzwirin`-tzwirin`';
    }

    Animal(): string {
        return 'Bird ' + this.moving + ' and saying ' + this.say;
    }
}

class fish implements IAnimal {
    moving: string;
    say: string;

    constructor() {
        this.moving = 'swim';
        this.say = 'bul-bul';
    }

    Animal(): string {
        return 'Fish ' + this.moving + ' and saying ' + this.say;
    }
}

// 3

abstract class Shape {
    abstract area(): number;

    abstract perimeter(): number;
}

class Triangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
    }

    area(): number {
        console.log('Area', (<any>this).constructor.name)
        return ((this.a * this.b) / 2);
    }

    perimeter(): number {
        console.log('Perimeter', (<any>this).constructor.name)
        return (((this.a ^ 2 + this.b ^ 2) ^ (1 / 2)) + this.a + this.b);
    }
}

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
    }

    area(): number {
        console.log('Area', (<any>this).constructor.name)
        return (this.a * this.b)
    }

    perimeter(): number {
        console.log('Perimeter', (<any>this).constructor.name)
        return ((this.a + this.b) * 2)
    }
}

const shapes: Shape[] = [new Triangle(3, 4), new Rectangle(4, 5)]


