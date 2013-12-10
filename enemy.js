function Enemy(vars)
{
	this.explosion = new Explosion();
	this.bullets = [];
	this.init(vars);
}

Enemy.prototype.init = function(vars)
{
	this.x					= vars[0];
	this.y					= vars[1];
	this.width				= vars[2];
	this.height				= vars[3];
	this.type				= vars[4];
	this.colour				= vars[5];
	this.speed 				= vars[6];
	this.yspeed 			= vars[6];
	this.moveType			= vars[7];
	this.moveProps			= vars[8];
	this.fireType			= vars[9];
	this.fireProps			= vars[10];
	this.despawnType		= vars[11];
	this.despawnProps		= vars[12];
	this.exitBoundary 		= vars[13];
	this.collisionDamage	= vars[14];
	this.bulletDamage		= vars[15];
	this.hp 				= vars[16];
	this.reward 			= vars[17];

	this.active				= true;
	this.targeted			= false;
	this.wasHit				= false;
	this.explosion.colour = this.colour;
	this.currentPoint = 0;
	this.rotation = 0;
}

Enemy.prototype.destroy = function()
{
	switch (this.despawnType)
	{
		case 'explode-angle':
			//	despawnProps = [angle, bulletSpeed, type]
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[1], this.despawnProps[0], this, this.bulletDamage, this.despawnProps[2]]);
		break;

		case 'explode-cross':
			//	despawnProps = [bulletSpeed, type]
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.N, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.E, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.S, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.W, this, this.bulletDamage, this.despawnProps[1]]);
		break;

		case 'explode-><':
			//	despawnProps = [bulletSpeed, type]
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.EbN, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.EbS, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.WbS, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.WbN, this, this.bulletDamage, this.despawnProps[1]]);
		break;

		case 'explode-x':
			//	despawnProps = [bulletSpeed, type]
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.ENE, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.ESE, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.WSW, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.WNW, this, this.bulletDamage, this.despawnProps[1]]);
		break;

		case 'explode-X':
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.NEbE, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.SEbE, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.SWbW, this, this.bulletDamage, this.despawnProps[1]]);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps[0], ANGLE.NWbW, this, this.bulletDamage, this.despawnProps[1]]);
		break;

		case 'explode-star':
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.N, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.E, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.S, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.W, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NW, this, this.bulletDamage, 'angle']);
		break;

		case 'explode-circle':

		break;

		case 'explode-ring':
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.N, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NbE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NNE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NEbN, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NEbE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.ENE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.EbN, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.E, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.EbS, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.ESE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SEbE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SEbS, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SSE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SbE, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.S, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SbW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SSW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SWbS, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.SWbW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.WSW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.WbS, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.W, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.WbN, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.WNW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NWbW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NWbN, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NNW, this, this.bulletDamage, 'angle']);
			spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.despawnProps, ANGLE.NbW, this, this.bulletDamage, 'angle']);
		break;
	}
	lx = (this.x - 20 > 0) ? this.x - 20 : 0;
	ly = (this.y - 20 > 0) ? this.y - 20 : 0;
	enemyCtx.clearRect(	lx,
						ly,
						lx + this.width + 20,
						ly + this.height + 20);
	this.x = -(this.width*2);
	this.y = -(this.height*2);
	this.active = false;
	this.targeted = false;
}

Enemy.prototype.update = function()
{
	this.explosion.update();
	if (this.active)
	{
		this.move();
		this.checkEscaped();
		if (this.fireType !== 0) this.fire();
		switch (this.type)
		{
			case 'bossone':
				this.rotation = (this.rotation == 360) ? 0 : this.rotation + 1;
				radian = this.rotation * TO_RADIANS;
				enemyCtx.save();
				enemyCtx.translate(this.x + this.width / 2, this.y + this.height / 2);
				enemyCtx.rotate(radian);
				enemyCtx.drawImage(bossonebuffer, (-(this.width / 2)) - 5, (-(this.height / 2)) - 5);
				if (this.wasHit > 0)
				{
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(bossonehitbuffer, (-(this.width / 2)) - 5, (-(this.height / 2)) - 5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
				}
				enemyCtx.restore();
			break;
		
			case 'bosstwo_1':
				enemyCtx.drawImage(bosstwopartonebuffer, this.x-5, this.y-5);
				enemyCtx.save();
				if (this.wasHit > 0)
				{
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(bosstwopartonehitbuffer, this.x-5, this.y-5);
				}
				tx = this.x + 15;
				ty = this.y + 5;
				height = 15;
				width = 10;
				angle = Math.atan2(ty + height - player.y, tx + width - player.x);
				enemyCtx.translate(tx + width * .5, ty + height * .5);
				enemyCtx.rotate(angle);
				enemyCtx.drawImage(bossturretbuffer, (-(width/2)) - 5, (-(height/2)) - 5);
				if (this.wasHit > 0)
				{
					enemyCtx.drawImage(hitturretbuffer, (-(width/2)) - 5, (-(height/2)) - 5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
				}
				enemyCtx.restore();
			break;
		
			case 'bosstwo_2':
				enemyCtx.drawImage(bosstwoparttwobuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(bosstwoparttwohitbuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;
		
			case 'bosstwo_3':
				enemyCtx.drawImage(bosstwopartthreebuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(bosstwopartthreehitbuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;
			
			case 'ddrone':
				enemyCtx.drawImage(ddbuffer, this.x-5, this.y-5);
			break;
		
			case 'large-ddrone':
				enemyCtx.drawImage(largeddbuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hitlargeddbuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;
		
			case 'ddroneii':
				enemyCtx.drawImage(ddiibuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hitddiibuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;

			case 'orb':
				enemyCtx.drawImage(orbbuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hitorbbuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;
		
			case 'recoii':
				enemyCtx.drawImage(recoiibuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hitrecoiibuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
			break;

			case 'tpdrone':
				enemyCtx.drawImage(tpdronebuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hittpdronebuffer, this.x-5, this.y-5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
					enemyCtx.restore();
				}
				if (this.moveProps[3] < 20)
				{
					enemyCtx.save();
					enemyCtx.globalAlpha = 1 - (this.moveProps[3] * 0.05);
					var by = (this.y == this.moveProps[0]) ? this.moveProps[1] : this.moveProps[0];
					enemyCtx.drawImage(tpdronebuffer, this.x-5, by-5);
					enemyCtx.restore();
				}
			break;

			case 'turret':
				enemyCtx.save();
				enemyCtx.drawImage(turretbasebuffer, this.x-5, this.y-5);
				if (this.wasHit > 0)
				{
					enemyCtx.globalAlpha = this.wasHit;
					enemyCtx.drawImage(hitturretbasebuffer, this.x-5, this.y-5);
				}
				tx = this.x + 15;
				ty = this.y + 12;
				height = 15;
				width = 10;
				angle = Math.atan2(ty + height - player.y, tx + width - player.x);
				enemyCtx.translate(tx + width * .5, ty + height * .5);
				enemyCtx.rotate(angle);
				enemyCtx.drawImage(turretbuffer, (-(width/2)) - 5, (-(height/2)) - 5);
				if (this.wasHit > 0)
				{
					enemyCtx.drawImage(hitturretbuffer, (-(width/2)) - 5, (-(height/2)) - 5);
					this.wasHit = (this.wasHit > 0) ? this.wasHit - 0.1 : 0;
				}
				enemyCtx.restore();
			break;

			case 'zippy':
				//angle = playerAt(this);
				angle = Math.atan2(this.y + this.height - player.y, this.x + this.width - player.x);
				enemyCtx.save();
				enemyCtx.translate(this.x + this.width/2, this.y + this.height/2);
				enemyCtx.rotate(angle);
				enemyCtx.drawImage(zippybuffer, (-(this.width/2)) - 4, (-(this.height/2)) - 2);
				enemyCtx.restore();
				//enemyCtx.drawImage(zippybuffer, this.x-5, this.y-5);
			break;
		}
	}
	if (this.bullets.length > 0)
	{
		for (var i = 0; i < this.bullets.length; i++)
		{
			if (this.bullets[i].active) this.bullets[i].update();
		}
	}
}

Enemy.prototype.fire = function()
{
	switch (this.fireType)
	{
		case 'angle':
			// fireProps = [angle, fireRate, fireCooldown, bulletSpeed]
			this.fireProps[2]++;
			if (this.fireProps[2] > this.fireProps[1])
			{
				spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.fireProps[3], this.fireProps[0], this, this.bulletDamage, 'angle']);
				this.fireProps[2] = 0;
			}
		break;
		case 'angle-player':
			// fireProps = [fireRate, fireCooldown, bulletSpeed]
			this.fireProps[1]++;
			if (this.fireProps[1] > this.fireProps[0])
			{
				angle = playerAt(this);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[2], angle, this, this.bulletDamage, 'angle']);
				this.fireProps[1] = 0;
			}
		break;
		case 'bossone':
			// fireProps = [homing fireRate, homing fireCooldown, homing bulletSpeed, bullet rate, bullet cooldown, bullet speed, switch]
			this.fireProps[6]++;
			if (this.fireProps[6] < 200)
			{
				this.fireProps[1]++;
			}
			else if (this.fireProps[6] > 200 && this.fireProps[6] < 400)
			{
				this.fireProps[4]++;
			}
			else if (this.fireProps[6] > 400)
			{
				this.fireProps[6] = 0;
			}
			if (this.fireProps[4] > this.fireProps[3])
			{
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.N, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NbE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NNE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NEbN, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NEbE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.ENE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.EbN, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.E, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.EbS, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.ESE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SEbE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SEbS, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SSE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SbE, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.S, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SbW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SSW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SWbS, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.SWbW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.WSW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.WbS, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.W, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.WbN, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.WNW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NWbW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NWbN, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NNW, this, this.bulletDamage, 'angle-boss']);
				spawn(this.bullets, Projectile, [this.x + this.width/2, this.y + this.height/2, 5, 5, this.fireProps[5], ANGLE.NbW, this, this.bulletDamage, 'angle-boss']);
				
				this.fireProps[4] = 0;
			}
			if (this.fireProps[1] > this.fireProps[0])
			{
				angle = playerAt(this);
				spawn(this.bullets, Projectile, [this.x + this.width * 0.5, this.y + this.height * 0.5, 25, 3, this.fireProps[2], angle, this, this.bulletDamage, 'plasma']);
				this.fireProps[1] = 0;
			}
		break;
		case 'bosstwo_1':
			this.fireProps[1]++;
			if (this.fireProps[1] > this.fireProps[0])
			{
				angle = playerAt(this);
				spawn(this.bullets, Projectile, [this.x + 5, this.y + 20, 25, 3, this.fireProps[2], angle, this, this.bulletDamage, 'plasma']);
				spawn(this.bullets, Projectile, [this.x + 5, this.y + 30, 25, 3, this.fireProps[2], angle, this, this.bulletDamage, 'plasma']);
				this.fireProps[1] = 0;
			}		
		break;
		case 'bosstwo_2':
			this.fireProps[2]++;
			this.fireProps[4]++;
			if (this.fireProps[2] > this.fireProps[1] && this.fireProps[4] < this.fireProps[5])
			{
				spawn(this.bullets, Projectile, [this.x, this.y + this.height/2, 5, 5, this.fireProps[3], this.fireProps[0], this, this.bulletDamage, 'bosstwo_2']);
				this.fireProps[2] = 0;
			}
			if (this.fireProps[4] > this.fireProps[6])
			{
				this.fireProps[4] = 0;
			}
		break;
		case 'bosstwo_3':
			// fireProps = [counter, pre-beam duration, laser duration, laser cooldown, laser hasSpawned]
			this.fireProps[0]++;
			if (this.fireProps[0] < this.fireProps[1])
			{
				projectileCtx.lineWidth = 1;
				projectileCtx.strokeStyle = '#fff';
				projectileCtx.beginPath();
				projectileCtx.moveTo(this.x + 0.5, this.y + 0.5 + this.height * 0.5);
				projectileCtx.lineTo(0.5, this.y + 0.5 + this.height * 0.5);
				projectileCtx.closePath();
				projectileCtx.stroke();
			}
			
			if (this.fireProps[0] > this.fireProps[1] && this.fireProps[0] < this.fireProps[2])
			{
				drawLaser(projectileCtx, 0, this.y, this.x, 100);
				laserX = this.x - 10;
				if (!this.fireProps[4])
				{
					spawn(this.bullets, Projectile, [0, this.y, this.x, 100, this.fireProps[2] - this.fireProps[1], angle, this, this.bulletDamage, 'laser']);
					this.fireProps[4] = true;
				}
				if (this.fireProps[0] % 5 == 0)
				{
					for (var i = 0; i < laserX; i += 10)
					{
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.NbW]);
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.SbW]);
					}
				}
				if (this.fireProps[0] % 7 == 0)
				{
					for (var i = 0; i < laserX; i += 20)
					{
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.NbE]);
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.SbE]);
					}
				}
				if (this.fireProps[0] % 10 == 0)
				{
					for (var i = 0; i < laserX; i += 30)
					{
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.N]);
						spawn(particles, Particle, [i, this.y + this.height * 0.5, 2, '280, 100%, 100%', 4, 30, ANGLE.S]);
					}
				}
			}
			if (this.fireProps[0] > this.fireProps[3])
			{
				this.fireProps[0] = 0;
				this.fireProps[4] = false;
			}
		break;
		case 'turret':
			// identical to angle-player, except we fire two bullets.
			// fireProps = [fireRate, fireCooldown, bulletSpeed]
			this.fireProps[1]++;
			if (this.fireProps[1] > this.fireProps[0])
			{
				angle = playerAt(this);
				spawn(this.bullets, Projectile, [this.x + 5, this.y + 20, 25, 3, this.fireProps[2], angle, this, this.bulletDamage, 'plasma']);
				spawn(this.bullets, Projectile, [this.x + 5, this.y + 30, 25, 3, this.fireProps[2], angle, this, this.bulletDamage, 'plasma']);
				this.fireProps[1] = 0;
			}
		break;
	}
}

Enemy.prototype.move = function()
{
	switch (this.moveType)
	{
		case 'angle':
			// this.moveProps = angle in radians
			angleStep(this, this.moveProps);
		break;

		case 'angle-bounce':
			// this.moveProps = angle in radians
			this.x += (Math.cos(this.moveProps) * this.speed) * TIME.DELTA;
			if (this.y + this.height >= game.h || this.y <= 0)
			{
				this.yspeed = -this.yspeed;
			}
			this.y += (Math.sin(this.moveProps) * this.yspeed) * TIME.DELTA;
		break;

		case 'at-player-x':
			angle = playerAt(this);
			if (this.speed > 0)
			{
				this.x += (Math.cos(angle) * this.speed) * TIME.DELTA;
				this.y += (Math.sin(angle) * this.speed) * TIME.DELTA;
				this.speed -= 10;
			}
		break;

		case 'circle':
			// http://whit.info/blog/2010/03/04/circular-motion-in-flash-as3/
			// this.moveProps = [radius, angleStep, currentAngle, centerX, centerY]
			var twoPI = 2 * Math.PI;
			this.moveProps[2] -= this.moveProps[1];
			this.moveProps[3] -= this.speed;
			this.x = this.moveProps[3] + Math.cos(this.moveProps[2] * twoPI) * this.moveProps[0];
			this.y = this.moveProps[4] + Math.sin(this.moveProps[2] * twoPI) * this.moveProps[0];
			if (this.moveProps[2] < -1 ) this.moveProps[2] = 0;

		break;

		case 'orbiter':
			// this.moveProps = [enemy array position, angleStep, currentAngle]
			//this.x = enemies[this.moveProps].x;
			if (enemies[this.moveProps[0]].active)
			{
				this.moveProps[2] -= (this.moveProps[1] * TIME.DELTA * TO_RADIANS);
				this.x = (enemies[this.moveProps[0]].x + enemies[this.moveProps[0]].width / 2 - this.width / 2) + Math.cos(this.moveProps[2]) * (this.width + enemies[this.moveProps[0]].width);
				this.y = (enemies[this.moveProps[0]].y + enemies[this.moveProps[0]].height / 2 - this.height / 2) + Math.sin(this.moveProps[2]) * (this.height + enemies[this.moveProps[0]].height);
				if (this.moveProps[2] < 0 ) this.moveProps[2] = 360 * TO_RADIANS;
			}
			else
			{
				this.moveProps = this.moveProps[2];
				this.moveType = 'angle';
				this.exitBoundary = 'any';
				angleStep(this, this.moveProps);
			}
		break;
	
		case 'point':
			// this.moveProps = [[pointX, pointY]]
			
			var delta_speed = this.speed * TIME.DELTA;
			var points = this.moveProps.length - 1;
			
			if (this.moveProps.length == 1)
			{
				if ((this.x < this.moveProps[0][0] - delta_speed || this.x > this.moveProps[0][0] + delta_speed) || (this.y < this.moveProps[0][1] - delta_speed || this.y > this.moveProps[0][1] + delta_speed))
				{
					angle = Math.atan2(this.moveProps[0][1] - this.y, this.moveProps[0][0] - this.x);
					this.x += Math.floor((Math.cos(angle) * delta_speed));
					this.y += Math.floor((Math.sin(angle) * delta_speed));
				}
			}
			else
			{
				if ((this.x < this.moveProps[this.currentPoint][0] - delta_speed || this.x > this.moveProps[this.currentPoint][0] + delta_speed) || (this.y < this.moveProps[this.currentPoint][1] - delta_speed || this.y > this.moveProps[this.currentPoint][1] + delta_speed))
				{
					angle = Math.atan2(this.moveProps[this.currentPoint][1] - this.y, this.moveProps[this.currentPoint][0] - this.x);
					this.x += Math.floor((Math.cos(angle) * delta_speed));
					this.y += Math.floor((Math.sin(angle) * delta_speed));
				}
				else
				{
					this.currentPoint = (this.currentPoint == points) ? 0 : this.currentPoint + 1;
				}
			}
		break;

		case 'square':
			// this.moveProps = ['direction', minX, maxX, minY, maxY]
			if (this.moveProps[0] == 'down')
			{
				if (this.y < this.moveProps[4])
				{
					this.y += this.speed;
				}
				else if (this.y >= this.moveProps[4])
				{
					if (this.moveProps[1] <= this.moveProps[2])
					{
						this.moveProps[1]++;
						this.x -= this.speed;
					}
					else
					{
						this.moveProps[0] = 'up';
						this.moveProps[1] = 0;
					}
				}
			}
			else if (this.moveProps[0] == 'up')
			{
				if (this.y > this.moveProps[3])
				{
					this.y -= this.speed;
				}
				else if (this.y <= this.moveProps[3])
				{
					if (this.moveProps[1] <= this.moveProps[2])
					{
						this.moveProps[1]++;
						this.x -= this.speed;
					}
					else
					{
						this.moveProps[0] = 'down';
						this.moveProps[1] = 0;
					}
				}
			}
		break;

		case 'teleport':
			// this.moveProps = [minY, maxY, stepX, stepCounter]
			this.moveProps[3] = (this.moveProps[3] > this.moveProps[2]) ? 0 : this.moveProps[3] + 1;
			this.y = (this.moveProps[3] > this.moveProps[2]) ? (this.y == this.moveProps[0]) ? this.moveProps[1] : this.moveProps[0] : this.y;
			this.x -= (this.speed * TIME.DELTA);
		break;

		case 'zigzag':
			// this.moveProps = ['direction', minY, maxY]
			if (this.moveProps[0] == 'down')
			{
				if (this.y <= this.moveProps[2])
				{
					this.y += this.speed;
				}
				else
				{
					this.moveProps[0] = 'up';
				}
			}
			else if (this.moveProps[0] == 'up')
			{
				if (this.y >= this.moveProps[1])
				{
					this.y -= this.speed;
				}
				else
				{
					this.moveProps[0] = 'down';
				}
			}
			this.x -= this.speed;
		break;
	}
}

Enemy.prototype.checkEscaped = function()
{
	if ((this.exitBoundary == 'left' && this.x + this.width < 0) ||
	    (this.exitBoundary == 'right' && this.x > game.w) ||
	    (this.exitBoundary == 'top' && this.y - this.height < 0) ||
	    (this.exitBoundary == 'bottom' && this.y > game.h))
	{
		this.destroy();
	}
	else if (this.exitBoundary == 'any' && (this.x > game.w || this.x + this.width < 0 || this.y > game.h || this.y + this.height < 0))
	{
		 this.destroy();
	}
}