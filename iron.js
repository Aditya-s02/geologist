class Iron{
    constructor(x,y){
        var options = {
            restitution : 0.1,
            friction : 3,
            density : 30,
        }
        this.body = Bodies.rectangle(x,y,80,80,options)
        this.width = 80
        this.height = 80
        World .add(world,this.body)
    }
    display (){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
    
        fill ("white")
        rect(0,0,this.width,this.height)
        pop ()
    }
    }