let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

// console.dir(v1);

function Vector(x,y,z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.plus = function (vec) {
  return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
}
Vector.prototype.minus = function (vec) {
  return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
}
Vector.prototype.magnitude = function () {
  return ((this.x**2)+(this.y**2)+(this.z**2))**(0.5);
}

// class
class Vector {
  constructor (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  plus (vec) {
    return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
  }
  minus (vec) {
    return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
  }
  magnitude (){
    return ((this.x**2)+(this.y**2)+(this.z**2))**(0.5);
  }
}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);


console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.magnitude());
