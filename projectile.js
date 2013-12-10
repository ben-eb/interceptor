function Projectile(vars)
{
	this.init(vars);
}

Projectile.prototype.init = function(vars)
{
	this.x = 			vars[0];
	this.y = 			vars[1];
	this.width = 		vars[2];
	this.height = 		vars[3];
	this.speed = 		vars[4];
	this.angle = 		vars[5]; // radians
	this.belongsTo = 	vars[6];
	this.damage = 		vars[7];
	this.fireType = 	vars[8];
	this.active = 		true;
	this.target = 		false;
}

Projectile.prototype.update = function()
{
	switch (this.fireType)
	{
		case 'angle':
		case 'angle-boss':
		case 'bosstwo_2':
		case 'recoii':
		case 'plasma':
			// http://www.actionscriptmoron.com/AS3Tutorials/moving-at-an-angle/
			angleStep(this, this.angle);
			this.draw();
		break;
		case 'homing':
			if (!this.target)
			{
				for (var i = 0; i < enemies.length; i++)
				{
					var xD = enemies[i].x - this.x;
					var yD = enemies[i].y - this.y;
					var d = Math.sqrt(xD*xD + yD*yD);
					if ((!this.target || this.target.distance >= d) && enemies[i].targeted == false && enemies[i].active == true) // found potential target
					{
						this.target = { enemy: enemies[i], distance: d };
						enemies[i].targeted = true;
					}
				}
			}
			// lock and load
			var targetX = this.target.enemy.x + this.target.enemy.width/2 - this.x;
			var targetY = this.target.enemy.y + this.target.enemy.height/2 - this.y;
			var rotation = Math.atan2(targetY, targetX);
			// http://active.tutsplus.com/tutorials/games/hit-the-target-with-a-deadly-homing-missile/
			var vx = this.speed * (90 - Math.abs(rotation * 180/Math.PI)) / 90;
			var vy = (rotation < 0) ? -this.speed + Math.abs(vx) : this.speed - Math.abs(vx); 
			this.x += vx;
			this.y += vy;
			projectileCtx.save();
			projectileCtx.translate(this.x + this.width/2, this.y + this.height/2);
			projectileCtx.rotate(rotation);
			projectileCtx.drawImage(MS, -(this.width/2), -(this.height/2));
			projectileCtx.restore();
		break;
		case 'laser':
			this.speed--;
			if (this.speed == 0)
			{
				this.destroy();
			}
		break;
	}
	this.collision();
	if (this.x > game.w || this.x + this.width < 0 || this.y > game.h || this.y + this.height < 0) this.destroy();
}

Projectile.prototype.collision = function()
{
	if (this.belongsTo == player)
	{
		for (var i = 0; i < enemies.length; i++)
		{
			if (collides(this, enemies[i]))
			{
				enemies[i].hp -= this.damage;
				enemies[i].wasHit = 1;
				this.destroy();
				if (enemies[i].hp > 0)
				{
					SoundManager.request('hit-1');
				}
				else if (enemies[i].hp <= 0)
				{
					SoundManager.request('explosion-2');
					enemies[i].explosion.x = (enemies[i].x + (enemies[i].width/2));
					enemies[i].explosion.y = (enemies[i].y + (enemies[i].height/2));
					enemies[i].explosion.hasHit = true;
					enemies[i].destroy();
					game.score += enemies[i].reward;
				}
			}
		}
	}
}

Projectile.prototype.destroy = function()
{
	this.x = -(this.width*2);
	this.y = -(this.height*2);
	this.active = false;
}

Projectile.prototype.draw = function()
{
	if (this.fireType === 'angle')
	{
		if (this.belongsTo == player)
		{
			projectileCtx.drawImage(bulletbuffer, this.x - 5, this.y - 5);
		}
		else
		{
			projectileCtx.drawImage(enemybulletbuffer, this.x - 5, this.y - 5);
		}
	}
	if (this.fireType === 'angle-boss')
	{
		projectileCtx.drawImage(bossbulletbuffer, this.x - 5, this.y - 5);
	}
	if (this.fireType === 'bosstwo_2')
	{
		projectileCtx.drawImage(bosstwobulletbuffer, this.x - 5, this.y - 5);
	}
	if (this.fireType === 'recoii')
	{
		projectileCtx.drawImage(recoiibulletbuffer, this.x - 5, this.y - 5);
	}
	/*
	if (this.fireType === 'homing')
	{
		projectileCtx.drawImage(MS, -(this.width/2), -(this.height/2));
	}
	*/
	if (this.fireType === 'plasma')
	{
		projectileCtx.save();
		projectileCtx.translate(this.x + this.width/2, this.y + this.height/2);
		projectileCtx.rotate(this.angle);
		projectileCtx.drawImage(plasmabuffer, -(this.width/2), -(this.height/2));
		projectileCtx.restore();
		//projectileCtx.drawImage(plasmabuffer, this.x - 5, this.y - 5);
	}
}
