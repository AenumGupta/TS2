class Box{
  constructor(x,y){

      var options={
          restitution:1,
          density:1,
          friction:1.5
      }
      this.body=Bodies.rectangle(x,y,40,40,options);
      this.image=loadImage("block.png");
      World.add(world,this.body);
      this.visibility=255;
      this.width=40;
      this.height=40;
      
  }

  display(){
    
var pos=this.body.position;

 
if(this.body.speed<1){
  push ()
translate (pos.x,pos.y);
imageMode(CENTER);
  image(this.image,0,0,40,40)
  pop ();
}else{
  World.remove(world,this.body);
  push();
  this.visibility -= 5;
  tint (255,this.visibility);
  image(this.image,pos.x,pos.y,this.width,this.height);
  pop()
}
}
  
  
  
  }