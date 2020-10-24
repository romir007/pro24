class Box2{
    constructor(x,y,width,height){
        var th={
            isStatic:true
        }
    
        this.body=Bodies.rectangle(x,y,width,height,th);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        rectMode(CENTER)
    fill("blue");
     rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}