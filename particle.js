/*	Particle Effects
	------------------------------------- */

function Particle(vars)
{
	this.init(vars);
}

Particle.prototype.init = function(vars)
{
	this.x = 			vars[0];
	this.y = 			vars[1];
	this.size = 		vars[2];
	this.colour = 		vars[3];
	this.decayRate = 	vars[4];
	this.speed = 		vars[5];
	this.angle = 		vars[6];
	this.alpha = 		1;
	this.active = 		true;
}

Particle.prototype.draw = function()
{
	if (this.active)
	{
		angleStep(this, this.angle);
		if (this.decayRate !== 0 && game.tick % this.decayRate == 0 && this.alpha > 0)
		{
			this.alpha -= 0.1;
		}
		particleCtx.fillStyle = 'hsla(' + this.colour + ', ' + this.alpha + ')';
		particleCtx.fillRect(this.x,this.y,this.size, this.size);
		if (this.x + this.size < 0 || this.alpha <= 0.15)
		{
			this.alpha = 0;
			this.active = false;
			this.x = -this.size;
			this.y = -this.size;
		}	
	}
}