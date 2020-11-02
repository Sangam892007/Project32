class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;

        
      }
      display(color){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        if (this.body.speed > 1){
          World.remove(world,this.body);
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          

        }
        pop();
      }
      score(){
        if(this.visibility < 0 && this.visibility < -505){
          score++
        }
      }
}