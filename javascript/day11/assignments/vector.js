// Your task is to build a Vector constructor.
//
// It should support the coordinates: x, y and z.
// It should have 3 prototype methods: plus, minus, magnitude.
// The methods, plus & minus, should return a new Vector (not a plain object or an existing
// vector) with the correct distances.
// Create a constructor/prototype version and class based version.

class Vector {

  constructor (x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    console.log(`${this.x}, ${this.y}, ${this.z}`);
  }
  plus(vec2){

    return new Vector(this.x + vec2.x, this.y + vec2.y, this.z + vec2.z);
  }
  minus(vec2){

    return new Vector(this.x - vec2.x, this.y - vec2.y, this.z - vec2.z);
  }
  magnitude(){
    return Math.
  }
}
