class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
       // console.log("hi");
        this.sling.bodyA = body;

    }

    fly(){
        this.sling.bodyA = null;
    }
   

    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3);
            fill ("red");
            line (pointA.x,pointA.y,pointB.x,pointB.y);
            }   
        
    }
    
}