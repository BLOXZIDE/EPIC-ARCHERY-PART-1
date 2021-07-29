class Player
{
  constructor(x,y,width,height)
  {
    var opts= {
        isStatic : true
    }  
    

      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,width,height,opts)
      this.image = loadImage("./assets/player.png")
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