class Sand{
    constructor(x,y,r){
        var options = {
            restitution : 0.5,
            friction : 5,
            density : 1,
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,(this.r-20),options)
        World .add(world,this.body)

    }
    display (){
        var pos = this.body.position
        
        push ()
        translate (pos.x,pos.y)
        
        rectMode(CENTER)
    
        fill ("blue")
        ellipse(0,0,this.r,this.r)
        pop ()
    }
    }