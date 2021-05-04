class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      //super(x,y,width,height);

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
      this.image=loadImage("Project-29/block.png");
      this.Visiblity = 255;
    }
    display(){
      if(this.body.speed < 3){
        //super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         rectMode(CENTER);
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.body.position.width, this.body.position.height);
         pop();
       }
      }
}
