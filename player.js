function Player()
{
	this.width = 32;
	this.height = 32;
	this.speed = 300;
	this.recovery = 100;
	this.recoveryCounter = 100;
}

Player.prototype.start = function()
{
	this.x = TOUCH.X = 40;
	this.y = TOUCH.Y = game.h/2;
	this.lives = 3;
	this.bombs = 3;
	this.bombCooldown = 100;
	this.bombFireRate = 100;
	this.bombDimension = 0;
	this.weapon =
	{
		damage: 5,
		speed: 600,
		cooldown: 0,
		fireRate: 5,
		bullets: []
	};
	this.shield =
	{
		charge: 100,
		capacity: 100
	};
}

Player.prototype.draw = function()
{
	lx = (this.x - 10 > 0) ? this.x - 10 : 0;
	ly = (this.y - 10 > 0) ? this.y - 10 : 0;
	playerCtx.clearRect(	lx,
							ly,
							lx + this.width + 20,
							ly + this.height + 20);
	this.update();
	if (37 in keysDown === false && 65 in keysDown === false && this.recoveryCounter > this.recovery)
	{
		if (game.tick % 2 == 0)
		{
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.5, 2, '21, 100%, 50%', 4, 120, 3.14159265]);
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.5, 2, '192, 100%, 90%', 4, 60, 3.14159265]);
		}
		if (game.tick % 3 == 0)
		{
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.4, 2, '192, 100%, 70%', 2, 60, 2.96705973]);
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.6, 2, '192, 100%, 70%', 2, 60, 3.31612558]);	
		}
		if (game.tick % 4 == 0)
		{
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.45, 2, '192, 100%, 70%', 1, 60, 2.96705973]);
			spawn(particles, Particle, [this.x + this.width * 0.2, this.y + this.height * 0.55, 2, '192, 100%, 70%', 1, 60, 3.31612558]);
		}	
	}
	if ((this.recoveryCounter < this.recovery && this.recoveryCounter % 7 == 0) || (this.recoveryCounter > this.recovery))
	{
		playerCtx.drawImage(playerbuffer, this.x-5, this.y-5);
	}
	this.drawProjectiles();
}

Player.prototype.update = function()
{
	this.weapon.cooldown++;
	this.bombCooldown++;
	
	var delta_speed = this.speed * TIME.DELTA;
	
	//	Keyboard controls
	
	if ((38 in keysDown || 87 in keysDown) && this.y > 0)
	{
		this.y -= delta_speed; // up
	}
	if ((39 in keysDown || 68 in keysDown) && this.x + this.width < game.w)
	{
		this.x += delta_speed; // right
	}
	if ((40 in keysDown || 83 in keysDown) && this.y + this.height < game.h)
	{
		this.y += delta_speed; // down
	}
	if ((37 in keysDown || 65 in keysDown) && this.x > 0)
	{
		this.x -= delta_speed; // left
	}
	if ((90 in keysDown || options.autofire || TOUCH.IS_SUPPORTED) && this.weapon.cooldown > this.weapon.fireRate)
	{
		// Z (fire bullets)
		SoundManager.request('player-shoot');
		this.weapon.cooldown = 0;
		spawn(this.weapon.bullets, Projectile, [this.x + this.width, this.y + this.height * 0.5 - 2.5, 5, 5, this.weapon.speed, 0, this, this.weapon.damage, 'angle']);
	}
	if (88 in keysDown && this.bombCooldown > this.bombFireRate && this.bombs !== 0)
	{
		// X (fire bombs)
		SoundManager.request('bomb');
		this.bombCooldown = 0;
		this.bombs--;
		for (var i = 0; i < enemies.length; i++)
		{
			if (enemies[i].active)
			{
				enemies[i].hp -= 200;
				if (enemies[i].hp <= 0)
				{
					enemies[i].explosion.x = (enemies[i].x + (enemies[i].width/2));
					enemies[i].explosion.y = (enemies[i].y + (enemies[i].height/2));
					enemies[i].explosion.hasHit = true;
					enemies[i].destroy();
					game.score += enemies[i].reward;
				}	
			}
			for (var j = 0; j < enemies[i].bullets.length; j++)
			{
				enemies[i].bullets[j].destroy();
			}
		}
	}
	
	//	Touch events
	
	if (((this.x < TOUCH.X - delta_speed || this.x > TOUCH.X + delta_speed) || (this.y < TOUCH.Y - delta_speed || this.y > TOUCH.Y + delta_speed)) && TOUCH.IS_SUPPORTED)
	{
		angle = Math.atan2(TOUCH.Y - this.y, TOUCH.X - this.x);
		this.x += Math.floor((Math.cos(angle) * delta_speed));
		this.y += Math.floor((Math.sin(angle) * delta_speed));
	}
	
	this.collision();
	this.recoveryCounter++;
}

Player.prototype.drawProjectiles = function()
{
	if (this.bombCooldown < this.bombFireRate)
	{
		this.bombDimension += 10 * this.bombCooldown;
		drawBomb(projectileCtx, (game.w/2) - (this.bombDimension/2), (game.h/2) - (this.bombDimension/2), this.bombDimension, this.bombDimension, '#fff', false);
		drawBomb(projectileCtx, (game.w/2) - (this.bombDimension/6), (game.h/2) - (this.bombDimension/6), this.bombDimension/3, this.bombDimension/3, '#66E0FF', false);
	}
	else
	{
		this.bombDimension = 0;
	}
	for (var i = 0; i < this.weapon.bullets.length; i++)
	{
		if (this.weapon.bullets[i].active) this.weapon.bullets[i].update();
	}
}

Player.prototype.collision = function()
{
	for (var i = 0; i < enemies.length; i++)
	{
		if (collides(this, enemies[i]) && enemies[i].active)
		{
			enemies[i].explosion.x = (enemies[i].x + (enemies[i].width/2));
			enemies[i].explosion.y = (enemies[i].y + (enemies[i].height/2));
			enemies[i].explosion.hasHit = true;
			enemies[i].destroy();

			if (this.recoveryCounter > this.recovery)
			{
				if (this.shield.charge > enemies[i].collisionDamage)
				{
					this.shield.charge -= enemies[i].collisionDamage;
				}
				else
				{
					this.shield.charge = 0;
					this.recoveryCounter = 0;
					if (this.lives == 0)
					{
						gameOver();
					}
					else
					{
						this.lives--;
					}
				}
			}
		}

		for (var j = 0; j < enemies[i].bullets.length; j++)
		{
			if (collides(this, enemies[i].bullets[j]) && enemies[i].active)
			{
				enemies[i].bullets[j].destroy();
				if (this.recoveryCounter > this.recovery)
				{
					if (this.shield.charge > enemies[i].bulletDamage)
					{
						this.shield.charge -= enemies[i].bulletDamage;
					}
					else
					{
						this.shield.charge = 0;
						this.recoveryCounter = 0;
						if (this.lives == 0)
						{
							gameOver();
						}
						else
						{
							this.lives--;
						}
					}
				}
			}
		}
	}
}