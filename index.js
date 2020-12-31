// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  get circumference(){
    return 2*Math.pi*this.radius;
  }
  get area(){
    return Math.pi*this.radius*this.radius;
  }
   set diameter(radius){
    this.diameter=radius*2;
  }
  set circumference(){
    this.circumference=2*Math.pi*this.radius;
  }
  set area(){
    this.area=Math.pi*this.radius*this.radius;
  }
}