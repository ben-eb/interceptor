/*	Primitives
	------------------------------------- */

function drawPlus(ctx, x, y, size, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5 - size);
	ctx.lineTo(x + 0.5, 0.5 + y);
	ctx.lineTo(x + 0.5 + size, 0.5 + y);
	ctx.moveTo(x + 0.5 - size, y + 0.5);
	ctx.lineTo(x + 0.5, 0.5 + y);
	ctx.lineTo(x + 0.5, 0.5 + y + size);
	ctx.stroke();
	ctx.closePath();
}

function drawRect(ctx, x, y, width, height, colour)
{
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.lineWidth = 1;
	ctx.strokeRect(x + 0.5, y + 0.5, width + 0.5, height + 0.5);
}

function drawBracketedRect(ctx, x, y, width, height, size)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#fff';
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5 + size);
	ctx.lineTo(x + 0.5, 0.5 + y);
	ctx.lineTo(x + 0.5 + size, 0.5 + y);
	ctx.moveTo(x + width + 0.5 - size, 0.5 + y);
	ctx.lineTo(x + width + 0.5, 0.5 + y);
	ctx.lineTo(x + width + 0.5, 0.5 + y + size);
	ctx.moveTo(x + width + 0.5, 0.5 + y + height - size);
	ctx.lineTo(x + width + 0.5, 0.5 + y + height);
	ctx.lineTo(x + 0.5 + width - size, 0.5 + y + height);
	ctx.moveTo(x + 0.5 + size, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height - size);
	ctx.stroke();
	ctx.closePath();
}

function drawFourPointStar(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5);
	ctx.lineTo(x + 0.5 + width * .5, y + 0.5 + height * 0.25);
	ctx.lineTo(x + 0.5 + width, y + 0.5);
	ctx.lineTo(x + 0.5 + width * 0.75, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * 0.5, y + 0.5 + height * 0.75);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * 0.25, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5, y + 0.5);
	ctx.stroke();
	ctx.closePath();
}

/*	Player ship
	------------------------------------- */

function drawPlayer(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.beginPath();
	ctx.moveTo(x + 0.5 + width * 0.25, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5 + width * 0.25, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * 0.25, y + 0.5);
	ctx.moveTo(x + 0.5 + width * 0.25, y + 0.5 + height * 0.25);
	ctx.lineTo(x + 0.5, y + 0.5 + height * 0.25);
	ctx.lineTo(x + 0.5 + width * 0.25, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height * 0.75);
	ctx.lineTo(x + 0.5 + width * 0.25, y + 0.5 + height * 0.75);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * .1, 0, Math.PI*2, true); 
	ctx.stroke();
	ctx.closePath();
}

/*	Bullets
	------------------------------------- */

function drawBullet(ctx, x, y, size, colour)
{
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.fillStyle = colour;
	s = size * .5;
	ctx.arc(x + s, y + s, s, 0, Math.PI*2, false);
	ctx.fill();
}

/*	Plasma
	------------------------------------- */

function drawPlasma(ctx, x, y, length, colour)
{
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	var gradient = ctx.createLinearGradient(x, y, x, y + 3);  
	gradient.addColorStop(0, "hsl(125, 100%, 50%)");
	gradient.addColorStop(0.5, "hsl(125, 100%, 75%)"); 
	gradient.addColorStop(1, "hsl(125, 100%, 50%)");  
	ctx.save();  
	ctx.fillStyle = gradient;  
	ctx.fillRect(x, y, length, 3);  
	ctx.restore();  
}

/*	Boss two laser
	------------------------------------- */

function drawLaser(ctx, x, y, width, height)
{
	var gradient = ctx.createLinearGradient(x, y, x, y + height);  
	gradient.addColorStop(0, "hsla(280, 100%, 50%, 0)");
	gradient.addColorStop(0.25, "hsl(280, 100%, 50%)");
	gradient.addColorStop(0.5, "hsl(280, 100%, 75%)"); 
	gradient.addColorStop(0.75, "hsl(280, 100%, 50%)");
	gradient.addColorStop(1, "hsla(280, 100%, 50%, 0)");
	ctx.save();  
	ctx.fillStyle = gradient;  
	ctx.fillRect(x, y, width, height);  
	ctx.restore();  
}

/*	Shield
	------------------------------------- */

function drawShield(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.moveTo(x + 0.5 + width * 0.5, y + height + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height * 0.2);
	ctx.lineTo(x + 0.5 + width * 0.5, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height * 0.2);
	ctx.lineTo(x + 0.5 + width * 0.5, y + 0.5 + height);
	ctx.stroke();
}

/*	Smart bomb
	------------------------------------- */

function drawBomb(ctx, x, y, width, height, colour, glow)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;

	if (glow && options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}

	// inner circle

	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.1, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();

	// top left (clockwise)

	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.2, 5, 0, false);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height * 0.5);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.lineTo(x + 0.5 + width * 0.556, y + 0.5 + height * 0.31); 
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.5, 5, 0, false);
	ctx.stroke();
	ctx.closePath();

	// bottom

	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.2, 1, 2, false);
	ctx.lineTo(x + 0.5 + width * 0.291, y + 0.5 + height * 0.958);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.5, 2, 1, true);
	ctx.lineTo(x + 0.5 + width * 0.605, y + 0.5 + height * 0.67);
	ctx.stroke();
	ctx.closePath();

	// top right

	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.2, Math.PI, 4.4, false);
	ctx.lineTo(x + 0.5 + width * 0.346, y + 0.5 + height * 0.02);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * 0.5, 4.4, Math.PI, true);
	ctx.lineTo(x + 0.5 + width * 0.3, y + 0.5 + height * 0.5);
	ctx.stroke();
	ctx.closePath();
}

/*	Enemies
	------------------------------------- */

function drawEnemyTwo(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5);
	ctx.stroke();
	ctx.closePath();
}

function drawRecoII(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5 + width/2, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5);
	ctx.stroke();
	ctx.closePath();
}

function drawEnemyFour(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5 + width/2, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5);
	ctx.stroke();
	ctx.closePath();
	drawPlus(ctx, x+width/2, y+width/2, width/2);
}

function drawEnemyFive(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.stroke();
	ctx.closePath();
}

function drawDDrone(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.strokeStyle = colour;
	ctx.beginPath();
	ctx.moveTo(x + 0.5 + width/2, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height/2);
	ctx.lineTo(x + 0.5 + width/2, y + 0.5);
	ctx.stroke();
	ctx.closePath();
	ctx.strokeRect(x + 0.5, y + 0.5, width, height);
}

function drawDDroneII(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.beginPath();
	ctx.moveTo(x + 0.5, y + 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.moveTo(x + 0.5 + width, y + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.stroke();
	ctx.closePath();
	ctx.strokeRect(x + 0.5, y + 0.5, width, height);
}

function drawZippy(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.moveTo(x + 0.5 + width, y + 0.5);
	ctx.lineTo(x + 0.5 + width * 0.7, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5 + width, y + 0.5);
	/*
	ctx.moveTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * 0.5, y + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * 0.5, y + 0.5 + height * 0.7);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	*/
	ctx.stroke();
}

function drawOrbitalReconBot(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.beginPath();
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * .5, 0, Math.PI*2, true);
	ctx.arc(x + 0.5 + width * 0.5, y + 0.5 + height * 0.5, width * .15, 0, Math.PI*2, true);
	ctx.stroke();
	ctx.closePath();
}

function drawTPDrone(ctx, x, y, width, height, colour)
{
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	ctx.beginPath();
	ctx.moveTo(x + 0.5 + width, y + 0.5);
	ctx.lineTo(x + 0.5 + width * .5, y + 0.5);
	ctx.lineTo(x + 0.5, y + 0.5 + height * 0.5);
	ctx.lineTo(x + 0.5 + width * .5, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width, y + 0.5 + height);
	ctx.lineTo(x + 0.5 + width * .5, y + 0.5 + height * .5);
	ctx.lineTo(x + 0.5 + width, y + 0.5);
	ctx.stroke();
	ctx.closePath();
}

/*	Bosses
	------------------------------------- */

function drawBossOne(ctx, x, y, width, height, hit)
{
	var colour1 = (hit) ? '#fff' : 'hsl(184, 100%, 50%)';
	var colour2 = (hit) ? '#fff' : 'hsl(169, 100%, 50%)';
	var colour3 = (hit) ? '#fff' : 'hsl(151, 100%, 50%)';
	
	drawFourPointStar(ctx, x + (width * 0.25), y + (height * 0.25), width * 0.5, height * 0.5, colour1);
	drawFourPointStar(ctx, x, y + (height * 0.25), width * 0.5, height * 0.5, colour2);
	drawFourPointStar(ctx, x + (width * 0.5), y + (height * 0.25), width * 0.5, height * 0.5, colour2);
	drawFourPointStar(ctx, x + (width * 0.25), y, width * 0.5, height * 0.5, colour3);
	drawFourPointStar(ctx, x + (width * 0.25), y + (height * 0.5), width * 0.5, height * 0.5, colour3);
}

/*	Plasma Cannon
	------------------------------------- */

function drawTurretBase(ctx, x, y, size, colour)
{
	if (options.glow)
	{
		ctx.shadowColor = colour;
		ctx.shadowBlur = 5;
	}
	s = size * .5;
	ctx.strokeStyle = colour;
	ctx.lineWidth = 1;
	ctx.arc(x + s, y + s, s, 0, Math.PI*2, false);
	ctx.stroke();
}