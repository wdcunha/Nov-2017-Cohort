class Vector {
  constructor (x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
  plus (vector) {
    let output = {}
    output.x = this.x + vector.x
    output.y = this.y + vector.y
    output.z = this.z + vector.z
    return output
  }
  minus (vector) {
    let output = {}
    output.x = this.x - vector.x
    output.y = this.y - vector.y
    output.z = this.z - vector.z
    return output
  }
  magnitude() {
    let h = Math.sqrt(this.x ** 2 + this.y ** 2);
    return Math.sqrt(h ** 2 + this.z ** 2);
  }
}





let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}

console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}

console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3
