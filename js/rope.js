class Rope{
	constructor(body1,point2)
	{
		
		var options={
			bodyA:body1,
		pointB:point2,
		stiffness: 0.4	
        }
		this.pointB=point2;
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		if(this.rope.bodyA){
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}

	fly(){
		this.rope.bodyA=null;
	}
}