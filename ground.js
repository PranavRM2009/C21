class Ground {
    constructor(x,y,w,h){
       let options={
            isStatic:true
        }
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        let pos = this.body.position;
        push()
        fill("green")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h);
        pop()
    }
}
