/*	Find angle to player location
	------------------------------------- */
function playerAt(obj)
{
	return Math.atan2(player.y + player.height / 2 - obj.y - obj.height/2, player.x - obj.x - obj.width/2);
}

/*	Common movement functions
	------------------------------------- */

function angleStep(obj, angle)
{
	obj.x += (Math.cos(angle) * obj.speed) * TIME.DELTA;
	obj.y += (Math.sin(angle) * obj.speed) * TIME.DELTA;
}

/*	General helper functions
	------------------------------------- */

function clear(ctx)
{
	// Defaults to clearing all canvases
	ctx = typeof ctx !== 'undefined' ? ctx : [bgCtx, enemyCtx, projectileCtx, particleCtx, playerCtx, hudCtx];
	
	if (Object.prototype.toString.call(ctx) === '[object Array]')
	{
		for (var i = 0; i < ctx.length; i++)
		{
			ctx[i].clearRect(0, 0, game.w, game.h);
		}
	}
	else
	{
		ctx.clearRect(0, 0, game.w, game.h);
	}
}

function id(e)
{
	return document.getElementById(e);
}

(function()
{
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
	{
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element)
	{
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function()
		{
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};
 
	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id)
	{
		clearTimeout(id);
	};
}());