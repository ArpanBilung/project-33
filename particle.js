class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4,
            friction: 1.8
        
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 253), random(0, 253), random(0, 253));
        World.add(world, this.body);

    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        // noStroke()
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(1, 1, this.r, this.r);
        pop();
    }
}