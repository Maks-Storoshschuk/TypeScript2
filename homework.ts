// 1
interface IUser{
    name:string
    age:number,
    gender:string
}

const user:IUser = {
    name:'Max',
    age:18,
    gender:'male'
}

function  sum(a:number,b:number):number{
   return (a+b);
}

function showSum(a:number,b:number):void{
    console.log(a+b);
}

function incAge(someUser:IUser,inc:number):IUser{
    someUser.age+=inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)

// 2
interface IAnimal{
    moving:string;
    say:string;
    Animal(info:string):string
}

class Cat implements IAnimal{
    moving: 'run';
    say: 'give me a milk';

    Animal(info: string): string {
        return 'Cat MoFo';
    }
}

class Bird implements IAnimal{
    moving: 'fly';
    say: 'tzwirin`-tzwirin`';

    Animal(info: string): string {
        return 'я заплутався, це якась дічь';
    }
}

class fish implements IAnimal{
    moving: 'swim';
    say: 'bul-bul';

    Animal(info: string): string {
        let x = 3+10
        return info + 'я риба яка вміє рахувати';
    }
}

// 3
interface A {
    a:number
}

interface B{
    b:number
}

class Shape implements A,B{
    a: number;
    b: number;
    area(a:A,b:B):number{
        return;
    };
    perimeter(a:A,b:B):number{
       return;
    };
}

class Triangle implements Shape{
    a: number;
    b: number;

    area(a: A, b: B): number {
        return ((this.a*this.b)/2);
    }

    perimeter(a: A, b: B): number {
        return (((this.a^2+this.b^2)^(1/2))+this.a+this.b);
    }

}

class Rectangle implements Shape{
    a: number;
    b: number;

    area(a: A, b: B): number {
        return (this.a*this.b)
    }

    perimeter(a: A, b: B): number {
        return ((this.a+this.b)*2)
    }

}

// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

