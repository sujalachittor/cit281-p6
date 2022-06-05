/*
    CIT 281 Project 6
    Name: Sujala Chittor
*/
class Shape {
    constructor(sides=[]) {
      this.sides = sides;
    }
    perimeter () {
        return (this.sides.length > 0? 
        this.sides.reduce((perimeter, value) => 
            perimeter + value
       
       ,0 ):0)
    }
}
//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
    constructor(length=0,width=0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area () {
        return this.length * this.width;
    }
}

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
    constructor(sideA=0, sideB=0, sideC=0 ) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area () {
        let p = this.perimeter()/2;
        return (Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC)));
    }
}
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (s of data) {
    let obj = null; 
    switch(s.length) {
        case 2 :
            obj = new Rectangle(...s);
            let type = "Rectangle";
            if (s[0] == s[1]) 
                type = "Square";
            console.log(`${type} with sides ${s} has perimeter of ${obj.perimeter()} and area of ${obj.area()}`)
        break;
        
        case 3 :
            obj = new Triangle(...s);
            console.log(`Triangle with sides ${s} has perimeter of ${obj.perimeter()} and area of ${obj.area()}`)
        break;

        case 1 :
            console.log(`Shape with 1 side unsupported`)
        break;

        case 0 :
            console.log(`Shape with 0 sides unsupported`)
        break;
    }
}