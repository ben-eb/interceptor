var audio = new Audio();

var vorbis_support = audio.canPlayType("audio/ogg codecs='vorbis'");
var mp3_support = audio.canPlayType("audio/mpeg");

var soundType = '';

if (vorbis_support == 'probably' || vorbis_support == 'maybe')
{
	soundType = 'ogg';
}

if (mp3_support == 'probably' || mp3_support == 'maybe')
{
	soundType = 'mp3';
}

var sounds = [];

function SoundM()
{
	this.active = true;
}

SoundM.prototype.createSound = function(name)
{
	var snd = new Audio('sound/' + name + '.' + soundType);
	snd.addEventListener("ended", function()
	{
		sounds.splice(snd, 1);
	}, false);
	sounds[name] = sounds[name] || [];
	sounds[name].push(snd);
	return snd;
}

SoundM.prototype.request = function(sound)
{
	if (options.sound)
	{
		snd = this.createSound(sound);
		snd.play();
	}
}

SoundManager = new SoundM();
