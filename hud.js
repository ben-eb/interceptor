/*	Show some score and stuff
	------------------------------------- */

function HeadsUpDisplay()
{
	this.score = -1;
	this.hasRecharged = true;
	this.rechargeAlpha = 1;
	this.hasStabilised = true;
	this.stabiliseAlpha = 1;
}

HeadsUpDisplay.prototype.pad = function(num, size)
{
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

HeadsUpDisplay.prototype.recharge = function()
{
	if (player.bombCooldown < player.bombFireRate && player.bombs > 0)
	{
		this.hasRecharged = false;
		hudCtx.clearRect(game.w-110, 446, 70, 24);
		hudCtx.clearRect(game.w-110, 461, 50, 30);
		hudCtx.font = "8px Karnivore Lite";
		hudCtx.fillStyle = 'white';
		hudCtx.fillText('recharging', game.w - 93, 465);
		hudCtx.fillRect(game.w - 93, 471, (player.bombCooldown/4), 12);
	}
	else if (player.bombCooldown > player.bombFireRate && this.rechargeAlpha > 0 && !this.hasRecharged)
	{
		hudCtx.clearRect(game.w-110, 446, 70, 24);
		hudCtx.clearRect(game.w-110, 461, 50, 30);
		this.rechargeAlpha -= 0.05;
		hudCtx.fillStyle = 'hsla(0, 100%, 100%, ' + this.rechargeAlpha + ')';
		hudCtx.font = "8px Karnivore Lite";
		hudCtx.fillText('recharging', game.w - 93, 465);
		hudCtx.fillRect(game.w - 93, 471, 25, 12);
	}
	else if (this.rechargeAlpha <= 0)
	{
		this.rechargeAlpha = 1;
		this.hasRecharged = true;
		hudCtx.clearRect(game.w-110, 446, 70, 24);
		hudCtx.clearRect(game.w-110, 461, 50, 30);
	}
}

HeadsUpDisplay.prototype.stabilise = function()
{
	if (player.recoveryCounter < player.recovery)
	{
		this.hasStabilised = false;
		hudCtx.clearRect(45, 450, 75, 20);
		hudCtx.clearRect(62, 466, 37, 26);
		hudCtx.font = "8px Karnivore Lite";
		hudCtx.fillStyle = 'white';
		hudCtx.fillText('stabilising', 50, 465);
		hudCtx.fillRect(68, 471, (player.recoveryCounter/4), 12);
	}
	else if (player.recoveryCounter > player.recovery && this.stabiliseAlpha > 0 && !this.hasStabilised)
	{
		hudCtx.clearRect(45, 450, 75, 20);
		hudCtx.clearRect(62, 466, 37, 26);
		this.stabiliseAlpha -= 0.05;
		hudCtx.fillStyle = 'hsla(0, 100%, 100%, ' + this.stabiliseAlpha + ')';
		hudCtx.font = "8px Karnivore Lite";
		hudCtx.fillText('stabilising', 50, 465);
		hudCtx.fillRect(68, 471, 25, 12);
	}
	else if (this.stabiliseAlpha <= 0)
	{
		this.stabiliseAlpha = 1;
		this.hasStabilised = true;
		hudCtx.clearRect(45, 450, 75, 20);
		hudCtx.clearRect(62, 466, 37, 26);
	}
}

HeadsUpDisplay.prototype.shield = function()
{
	if (this.shieldCharge > player.shield.charge)
	{
		this.shieldCharge -= (this.shieldCharge - player.shield.charge > 10) ? 5 : 1;
	}
	else if (this.shieldCharge < player.shield.charge)
	{
		this.shieldCharge += (player.shield.charge - this.shieldCharge > 10) ? 5 : 1;
	}
	hudCtx.clearRect(90, 463, 60, 30);
	hudCtx.drawImage(shieldbuffer, 100, 467);
	if (options.glow)
	{	
		hudCtx.shadowColor = 'hsl(192, 100%, 70%)';
		hudCtx.shadowBlur = 5;
	}
	hudCtx.beginPath();
	hudCtx.strokeStyle = 'hsla(192, 100%, 70%, 0.15)';
	hudCtx.lineWidth = 4;
	hudCtx.arc(135, 478, 6, 0, Math.PI*2, false);
	hudCtx.stroke();
	hudCtx.closePath();
	hudCtx.beginPath();
	perc = (this.shieldCharge/player.shield.capacity * 360) * Math.PI/180;
	hudCtx.strokeStyle = 'hsl(192, 100%, 70%)'; // was white
	hudCtx.arc(135, 478, 6, 1.5*Math.PI, perc + 1.5*Math.PI, false);
	hudCtx.stroke();
	hudCtx.closePath();
}

HeadsUpDisplay.prototype.init = function()
{
	this.lives = player.lives;
	this.bombs = player.bombs;
	this.shieldCharge = 1;
	hudCtx.drawImage(bombbuffer, game.w - 40, 467);
	hudCtx.drawImage(livesbuffer, 20, 467);
	hudCtx.fillStyle = "hsl(192, 100%, 70%)";
	hudCtx.font = "16px Karnivore Lite";
	if (options.glow)
	{
		hudCtx.shadowColor = 'hsl(192, 100%, 70%)';
		hudCtx.shadowBlur = 5;
	}
	hudCtx.fillText(this.pad(this.lives, 2), 42, 483);
	hudCtx.fillText(this.pad(this.bombs, 2), game.w - 60, 483);
}

HeadsUpDisplay.prototype.update = function()
{
	hudCtx.font = "16px Karnivore Lite";
	if (options.glow)
	{
		hudCtx.shadowColor = 'hsl(192, 100%, 70%)';
		hudCtx.shadowBlur = 5;
	}
	if (this.score != game.score)
	{
		hudCtx.fillStyle = "hsl(192, 100%, 70%)";
		this.score += (game.score - this.score > 10) ? (game.score - this.score > 100) ? 100 : 10 : 1;
		hudCtx.clearRect(game.w / 2 - 90, 465, 175, 27);
		hudCtx.fillText("score: " + this.pad(this.score, 10), game.w / 2 - 85, 483);
	}
	if (this.bombs != player.bombs)
	{
		hudCtx.fillStyle = "hsl(192, 100%, 70%)";
		this.bombs--;
		hudCtx.clearRect(game.w - 65, 467, 30, 21);
		hudCtx.fillText(this.pad(this.bombs, 2), game.w - 60, 483);
	}
	if (this.lives != player.lives)
	{
		hudCtx.fillStyle = "hsl(192, 100%, 70%)";
		this.lives--;
		hudCtx.clearRect(38, 467, 28, 21);
		hudCtx.fillText(this.pad(this.lives, 2), 42, 483);
	}
	this.recharge();
	this.stabilise();
	if (this.shieldCharge != player.shield.charge)
	{
		this.shield();
	}
}