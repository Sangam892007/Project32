class Polygon{
    constructor(x,y,radius,maxside){
    var options = {
        restitution: 0.1,
        friction:1.5,

    }
    this.polygon = loadImage("Images/Hexagon.png");
    this.body = Matter.Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.maxside = maxside;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(0);
        imageMode(CENTER);
        image(this.polygon,pos.x,pos.y,100,100);
        fill("Yellow");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}