// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  get circumference(){
    return 2*Math.PI*this.radius;
  }
  get area(){
    return Math.PI*this.radius*this.radius;
  }
   set diameter(radius){
    this.diameter=radius*2;
  }
  set circumference(radius){
    this.circumference=2*Math.PI*radius;
  }
  set area(radius){
    this.area=Math.PI*radius*radius;
  }
}