class Launcher
{
  conconstructor(bodyA, pointB){
      var options = {
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 0.01,
       length: 10    
  }
  this.pointB=pointB;
  this.launcher= constraint.create(options);
  World.add(world, this.launcher);
}

fly(){
    thise.launcher.bobyA= null;
}

launch(bodyA){
    this .launcher.bodyA=bodyB;
}

display(){

}

}