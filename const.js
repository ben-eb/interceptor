/*	Canvases
	--------------------------------------------------- */

var bg =			id('bg');
var bgCtx =			bg.getContext('2d');
var enemyCtx =		id('enemy').getContext('2d');
var projectileCtx =	id('projectile').getContext('2d');
var particleCtx =	id('particle').getContext('2d');
var playerCtx =		id('player').getContext('2d');
var hudCtx =		id('hud').getContext('2d');
var overlayCtx =	id('overlay').getContext('2d');

/*	In case we need the mouse position
	--------------------------------------------------- */

var MOUSE =
{
	X: 0,
	Y: 0
}

/*	Do we support touch? If so, track touch position
	--------------------------------------------------- */

var TOUCH =
{
	IS_SUPPORTED: 'ontouchstart' in document.documentElement,
	X: 0,
	Y: 0
}

/*	Time variables
	--------------------------------------------------- */

var TIME = 
{
	DELTA: 0,
	FPS: 0,
	LAST: 0
};	

/*	Saves calculating radians on the fly
	i.e. 270 degrees to radians is 270 * (Math.PI/180)
	--------------------------------------------------- */

var ANGLE =
{
	N: 		4.712388984,
	NbE: 	4.908738525,
	NNE: 	5.105088066,
	NEbN: 	5.301437607,
	NE: 	0.785398164,
	NEbE: 	5.694136689,
	ENE: 	5.89048623,
	EbN: 	6.086835771,
	E: 		0,
	EbS: 	0.196349541,
	ESE: 	0.392699082,
	SEbE: 	0.589048623,
	SE: 	5.497787148,
	SEbS: 	0.981747705,
	SSE: 	1.178097246,
	SbE: 	1.374446787,
	S: 		1.570796328,
	SbW: 	1.767145869,
	SSW: 	1.96349541,
	SWbS: 	2.159844951,
	SW: 	3.92699082,
	SWbW: 	2.552544033,
	WSW: 	2.748893574,
	WbS: 	2.945243115,
	W: 		3.141592656,
	WbN: 	3.337942197,
	WNW: 	3.534291738,
	NWbW: 	3.730641279,
	NW: 	2.356194492,
	NWbN: 	4.123340361,
	NNW: 	4.319689902,
	NbW: 	4.516039443
};

/*	Cache common PI values
	--------------------------------------------------- */

var TO_RADIANS 	= Math.PI / 180; // multiply int (degrees) by this
var TWO_PI 		= 2 * Math.PI;


/*	Enemy X/Y positions, as a fraction of the screen
	i.e 1/20th of the screen is 25px
	--------------------------------------------------- */

var YPOSITION =
{
	1:	25,
	2:	50,
	3:	75,
	4:	100,
	5:	125,
	6:	150,
	7:	175,
	8:	200,
	9:	225,
	10:	250,
	11: 275,
	12: 300,
	13: 325,
	14: 350,
	15: 375,
	16: 400,
	17: 425,
	18: 450,
	19: 475
};

var XPOSITION =
{
	1: 25,
	2: 50,
	3: 75,
	4: 100,
	5: 125,
	6: 150,
	7: 175,
	8: 200,
	9: 225,
	10: 250,
	11: 275,
	12: 300,
	13: 325,
	14: 350,
	15: 375,
	16: 400,
	17: 425,
	18: 450,
	19: 475,
	20: 500,
	21: 525,
	22: 550,
	23: 575,
	24: 600,
	25: 625,
	26: 650,
	27: 675,
	28: 700,
	29: 725,
	30: 750,
	31: 775
};