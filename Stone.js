class Stone{
	constructor(x,y,width,height,)
	{
	var options ={
	'restitution':0.3,
	'friction':0.9,
	'density':15	
	}
		this.x = x;
		this.y = y;
        this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("darkgrey");
            rect(0,0, this.width, this.height)
			pop()
	}

}