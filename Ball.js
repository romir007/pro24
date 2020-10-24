class Ball{
    constructor(x,y,radious){
var options={
    isStatic:false,
    restitution:0.3,
    fraction:0.5,
    dencity:1.2
}
        this.body=Bodies.circle(x,y,radious,options)
        World.add(world,this.body);
        this.radious=radious

    }
    display()
    {
        rectMode(CENTER)
        fill("pink")
        circle(this.body.position.x,this.body.position.y,this.radious)

    }

}
