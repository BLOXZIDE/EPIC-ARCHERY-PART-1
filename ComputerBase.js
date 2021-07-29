class ComputerBase
{
  constructor(x,y,width,height)
  {
    var option= {
        isStatic : true
    }  
    

      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,width,height,option)
      this.image = loadImage("./assets/base2.png")
      World.add(world,this.body)
  }


  display() {
  var pos = this.body.position;
  var angle = this.body.angle;
 
  push();
  translate(pos.x,pos.y);
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height);
  pop();

  }
}