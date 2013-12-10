/*	Player ship
	------------------------------------- */

var playerbuffer = document.createElement('canvas');
playerbuffer.width = 42;
playerbuffer.height = 42;
var playerbufferCtx = playerbuffer.getContext('2d');
drawPlayer(playerbufferCtx, 5, 5, 32, 32, "#66E0FF");

//	& bullets

var bulletbuffer = document.createElement('canvas');
bulletbuffer.width = 15;
bulletbuffer.height = 15;
var bulletbufferCtx = bulletbuffer.getContext('2d');
drawBullet(bulletbufferCtx, 5, 5, 5, "#66E0FF");


/*	Heads up display
	------------------------------------- */

var bombbuffer = document.createElement('canvas');
bombbuffer.width = 20;
bombbuffer.height = 20;
var bombbufferCtx = bombbuffer.getContext('2d');
drawBomb(bombbufferCtx, 5, 5, 10, 10, "#66E0FF", true);

var livesbuffer = document.createElement('canvas');
livesbuffer.width = 20;
livesbuffer.height = 20;
var livesbufferCtx = livesbuffer.getContext('2d');
drawPlayer(livesbufferCtx, 5, 5, 10, 10, "#66E0FF");

var shieldbuffer = document.createElement('canvas');
shieldbuffer.width = 20;
shieldbuffer.height = 20;
var shieldbufferCtx = shieldbuffer.getContext('2d');
drawShield(shieldbufferCtx, 5, 5, 10, 10, "#66E0FF");


/*	Enemies
	------------------------------------- */

var ddbuffer = document.createElement('canvas');
ddbuffer.width = 35;
ddbuffer.height = 35;
var ddbufferCtx = ddbuffer.getContext('2d');
drawDDrone(ddbufferCtx, 5, 5, 25, 25, '#FF530F');

var largeddbuffer = document.createElement('canvas');
largeddbuffer.width = 160;
largeddbuffer.height = 160;
var largeddbufferCtx = largeddbuffer.getContext('2d');
drawDDrone(largeddbufferCtx, 5, 5, 150, 150, '#FF530F');

var hitlargeddbuffer = document.createElement('canvas');
hitlargeddbuffer.width = 160;
hitlargeddbuffer.height = 160;
var hitlargeddbufferCtx = hitlargeddbuffer.getContext('2d');
drawDDrone(hitlargeddbufferCtx, 5, 5, 150, 150, '#fff');

var ddiibuffer = document.createElement('canvas');
ddiibuffer.width = 35;
ddiibuffer.height = 35;
var ddiibufferCtx = ddiibuffer.getContext('2d');
drawDDroneII(ddiibufferCtx, 5, 5, 25, 25, '#FF530F');

var hitddiibuffer = document.createElement('canvas');
hitddiibuffer.width = 35;
hitddiibuffer.height = 35;
var hitddiibufferCtx = hitddiibuffer.getContext('2d');
drawDDroneII(hitddiibufferCtx, 5, 5, 25, 25, '#fff');

var zippybuffer = document.createElement('canvas');
zippybuffer.width = 25;
zippybuffer.height = 25;
var zippybufferCtx = zippybuffer.getContext('2d');
drawZippy(zippybufferCtx, 5, 5, 15, 15, '#66FFE3');

var recoiibuffer = document.createElement('canvas');
recoiibuffer.width = 60;
recoiibuffer.height = 60;
var recoiibufferCtx = recoiibuffer.getContext('2d');
drawRecoII(recoiibufferCtx, 5, 5, 50, 50, 'hsl(62, 100%, 50%)');

var hitrecoiibuffer = document.createElement('canvas');
hitrecoiibuffer.width = 60;
hitrecoiibuffer.height = 60;
var hitrecoiibufferCtx = hitrecoiibuffer.getContext('2d');
drawRecoII(hitrecoiibufferCtx, 5, 5, 50, 50, '#fff');

var orbbuffer = document.createElement('canvas');
orbbuffer.width = 30;
orbbuffer.height = 30;
var orbbufferCtx = orbbuffer.getContext('2d');
drawOrbitalReconBot(orbbufferCtx, 5, 5, 20, 20, 'hsl(320, 100%, 50%)');

var hitorbbuffer = document.createElement('canvas');
hitorbbuffer.width = 30;
hitorbbuffer.height = 30;
var hitorbbufferCtx = hitorbbuffer.getContext('2d');
drawOrbitalReconBot(hitorbbufferCtx, 5, 5, 20, 20, '#fff');

var tpdronebuffer = document.createElement('canvas');
tpdronebuffer.width = 85;
tpdronebuffer.height = 85;
var tpdronebufferCtx = tpdronebuffer.getContext('2d');
drawTPDrone(tpdronebufferCtx, 5, 5, 75, 75, 'hsl(220, 100%, 50%)');

var hittpdronebuffer = document.createElement('canvas');
hittpdronebuffer.width = 85;
hittpdronebuffer.height = 85;
var hittpdronebufferCtx = hittpdronebuffer.getContext('2d');
drawTPDrone(hittpdronebufferCtx, 5, 5, 75, 75, '#fff');

/*	Boss One
	------------------------------------- */

var bossonebuffer = document.createElement('canvas');
bossonebuffer.width = 210;
bossonebuffer.height = 210;
var bossonebufferCtx = bossonebuffer.getContext('2d');
drawBossOne(bossonebufferCtx, 5, 5, 200, 200, false);

var bossonehitbuffer = document.createElement('canvas');
bossonehitbuffer.width = 210;
bossonehitbuffer.height = 210;
var bossonehitbufferCtx = bossonehitbuffer.getContext('2d');
drawBossOne(bossonehitbufferCtx, 5, 5, 200, 200, true);

var bossbulletbuffer = document.createElement('canvas');
bossbulletbuffer.width = 15;
bossbulletbuffer.height = 15;
var bossbulletbufferCtx = bossbulletbuffer.getContext('2d');
drawBullet(bossbulletbufferCtx, 5, 5, 5, "hsl(151, 100%, 50%)");

/*	Boss Two
	------------------------------------- */

var bosstwopartonebuffer = document.createElement('canvas');
bosstwopartonebuffer.width = 110;
bosstwopartonebuffer.height = 35;
var bosstwopartonebufferCtx = bosstwopartonebuffer.getContext('2d');
drawRect(bosstwopartonebufferCtx, 5, 5, 100, 25, 'hsl(280, 100%, 60%)');

var bosstwoparttwobuffer = document.createElement('canvas');
bosstwoparttwobuffer.width = 160;
bosstwoparttwobuffer.height = 60;
var bosstwoparttwobufferCtx = bosstwoparttwobuffer.getContext('2d');
drawRect(bosstwoparttwobufferCtx, 5, 5, 150, 50, 'hsl(280, 100%, 60%)');
drawDDroneII(bosstwoparttwobufferCtx, 15, 16, 25, 25, 'hsl(280, 100%, 60%)');
drawDDroneII(bosstwoparttwobufferCtx, 50, 16, 25, 25, 'hsl(280, 100%, 60%)');
drawDDroneII(bosstwoparttwobufferCtx, 85, 16, 25, 25, 'hsl(280, 100%, 60%)');
drawDDroneII(bosstwoparttwobufferCtx, 120, 16, 25, 25, 'hsl(280, 100%, 60%)');

var bosstwopartthreebuffer = document.createElement('canvas');
bosstwopartthreebuffer.width = 210;
bosstwopartthreebuffer.height = 110;
var bosstwopartthreebufferCtx = bosstwopartthreebuffer.getContext('2d');
drawRect(bosstwopartthreebufferCtx, 5, 5, 200, 100, 'hsl(280, 100%, 60%)');
drawTPDrone(bosstwopartthreebufferCtx, 5, 5, 100, 100, 'hsl(280, 100%, 60%)');
drawTPDrone(bosstwopartthreebufferCtx, 105, 5, 100, 100, 'hsl(280, 100%, 60%)');

var bosstwopartonehitbuffer = document.createElement('canvas');
bosstwopartonehitbuffer.width = 110;
bosstwopartonehitbuffer.height = 35;
var bosstwopartonehitbufferCtx = bosstwopartonehitbuffer.getContext('2d');
drawRect(bosstwopartonehitbufferCtx, 5, 5, 100, 25, '#fff');

var bosstwoparttwohitbuffer = document.createElement('canvas');
bosstwoparttwohitbuffer.width = 160;
bosstwoparttwohitbuffer.height = 60;
var bosstwoparttwohitbufferCtx = bosstwoparttwohitbuffer.getContext('2d');
drawRect(bosstwoparttwohitbufferCtx, 5, 5, 150, 50, '#fff');
drawDDroneII(bosstwoparttwohitbufferCtx, 15, 16, 25, 25, '#fff');
drawDDroneII(bosstwoparttwohitbufferCtx, 50, 16, 25, 25, '#fff');
drawDDroneII(bosstwoparttwohitbufferCtx, 85, 16, 25, 25, '#fff');
drawDDroneII(bosstwoparttwohitbufferCtx, 120, 16, 25, 25, '#fff');

var bosstwopartthreehitbuffer = document.createElement('canvas');
bosstwopartthreehitbuffer.width = 210;
bosstwopartthreehitbuffer.height = 110;
var bosstwopartthreehitbufferCtx = bosstwopartthreehitbuffer.getContext('2d');
drawRect(bosstwopartthreehitbufferCtx, 5, 5, 200, 100, '#fff');
drawTPDrone(bosstwopartthreehitbufferCtx, 5, 5, 100, 100, '#fff');
drawTPDrone(bosstwopartthreehitbufferCtx, 105, 5, 100, 100, '#fff');

var bossturretbuffer = document.createElement('canvas');
bossturretbuffer.width = 20;
bossturretbuffer.height = 30;
var bossturretbufferCtx = bossturretbuffer.getContext('2d');
drawRect(bossturretbufferCtx, 5, 5, 10, 5, 'hsl(280, 100%, 60%)');
drawRect(bossturretbufferCtx, 5, 15, 10, 5, 'hsl(280, 100%, 60%)');

var bosstwobulletbuffer = document.createElement('canvas');
bosstwobulletbuffer.width = 15;
bosstwobulletbuffer.height = 15;
var bosstwobulletbufferCtx = bosstwobulletbuffer.getContext('2d');
drawBullet(bosstwobulletbufferCtx, 5, 5, 5, "hsl(280, 100%, 60%)");

/*	Plasma Cannon
	------------------------------------- */

var turretbuffer = document.createElement('canvas');
turretbuffer.width = 20;
turretbuffer.height = 30;
var turretbufferCtx = turretbuffer.getContext('2d');
drawRect(turretbufferCtx, 5, 5, 10, 5, 'hsl(125, 100%, 50%)');
drawRect(turretbufferCtx, 5, 15, 10, 5, 'hsl(125, 100%, 50%)');

var hitturretbuffer = document.createElement('canvas');
hitturretbuffer.width = 20;
hitturretbuffer.height = 30;
var hitturretbufferCtx = hitturretbuffer.getContext('2d');
drawRect(hitturretbufferCtx, 5, 5, 10, 5, '#fff');
drawRect(hitturretbufferCtx, 5, 15, 10, 5, '#fff');

var turretbasebuffer = document.createElement('canvas');
turretbasebuffer.width = 50;
turretbasebuffer.height = 50;
var turretbasebufferCtx = turretbasebuffer.getContext('2d');
drawTurretBase(turretbasebufferCtx, 5, 5, 40, 'hsl(125, 100%, 50%)');

var hitturretbasebuffer = document.createElement('canvas');
hitturretbasebuffer.width = 50;
hitturretbasebuffer.height = 50;
var hitturretbasebufferCtx = hitturretbasebuffer.getContext('2d');
drawTurretBase(hitturretbasebufferCtx, 5, 5, 40, '#fff');

var plasmabuffer = document.createElement('canvas');
plasmabuffer.width = 35;
plasmabuffer.height = 15;
var plasmabufferCtx = plasmabuffer.getContext('2d');
drawPlasma(plasmabufferCtx, 5, 5, 25, 'hsl(125, 100%, 50%)');

/*	DDrone Bullets
	------------------------------------- */

var enemybulletbuffer = document.createElement('canvas');
enemybulletbuffer.width = 15;
enemybulletbuffer.height = 15;
var enemybulletbufferCtx = enemybulletbuffer.getContext('2d');
drawBullet(enemybulletbufferCtx, 5, 5, 5, "#FF530F");

/*	RecoII Bullets
	------------------------------------- */

var recoiibulletbuffer = document.createElement('canvas');
recoiibulletbuffer.width = 15;
recoiibulletbuffer.height = 15;
var recoiibulletbufferCtx = recoiibulletbuffer.getContext('2d');
drawBullet(recoiibulletbufferCtx, 5, 5, 5, "hsl(62, 100%, 50%)");




