function GridLine(vars)
{
	this.init(vars);
}

GridLine.prototype.init = function(vars)
{
	this.x = vars[0];
	this.y = vars[1];
	this.dimension = vars[2];
	this.direction = vars[3];
	this.colour = vars[4];
	this.menu = vars[5];
	this.active = true;
}

GridLine.prototype.draw = function()
{
	bgCtx.lineWidth = 1;
	if (this.menu)
	{
		bgCtx.strokeStyle = (this.direction == 'vertical') ? 'hsla(192, 100%, 70%, ' + (1.15-(this.dimension/game.h)) + ')' : 'hsla(192, 100%, 70%, ' + (1.15-(this.dimension/game.w)) + ')';
	}
	else
	{
		bgCtx.strokeStyle = this.colour;
	}
	bgCtx.beginPath();
	if (this.direction == 'vertical')
	{
		if (this.dimension < game.h)
		{
			this.dimension+=15;
		}
		// draw at half pixels when line width is odd
		// http://stackoverflow.com/questions/5679295/line-thickness-in-a-canvas-element
		bgCtx.moveTo(0.5 + this.x, 0);
		bgCtx.lineTo(0.5 + this.x, this.dimension);
	}
	else if (this.direction == 'horizontal')
	{
		if (this.dimension < game.w)
		{
			this.dimension+=20;
		}
		bgCtx.moveTo(0, 0.5 + this.y);
		bgCtx.lineTo(this.dimension, 0.5 + this.y);
	}
	bgCtx.stroke();
	bgCtx.closePath();
}

GridLine.prototype.update = function()
{
	if (this.direction == 'vertical')
	{
		this.x--;
	}
	if (this.x < 0)
	{
		this.active = false;
	}
	else
	{
		this.draw();
	}
}