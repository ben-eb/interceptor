var pauseCounter = 25;

var game = 
{
	w: bg.width,
	h: bg.height,
	score: 0,
	active: false,
	tick: 0,
	enemytick: 0,
	intro: true,
	menu: true,
	over: false,
	stages:
	[
		{	
			tick: 100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_5,
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 150,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10,
				left_medium_red_ddrone_15
			]
		},
		{	
			tick: 200,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8,
				left_medium_red_ddrone_12
			]
		},
		{	
			tick: 250,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_7,
				left_medium_red_ddrone_13
			]
		},
		{	
			tick: 300,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_6,
				left_medium_red_ddrone_14
			]
		},
		{	
			tick: 350,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_5,
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10,
				left_medium_red_ddrone_15
			]
		},
		{	
			tick: 450,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8,	
				left_medium_red_ddrone_10,
				left_medium_red_ddrone_12
			]
		},
		{	
			tick: 500,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_2,	
				left_medium_red_ddrone_6,	
				left_medium_red_ddrone_14,
				left_medium_red_ddrone_18
			]
		},
		{	
			tick: 550,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8,	
				left_medium_red_ddrone_10,
				left_medium_red_ddrone_12
			]
		},
		{	
			tick: 600,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_1
			]
		},
		{	
			tick: 625,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_2
			]
		},
		{	
			tick: 650,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_3
			]
		},
		{	
			tick: 675,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_4
			]
		},
		{	
			tick: 700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_5
			]
		},
		{	
			tick: 725,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_6
			]
		},
		{	
			tick: 750,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_7
			]
		},
		{	
			tick: 775,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8,
				left_medium_red_ddroneii_10,
			]
		},
		{	
			tick: 800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_9
			]
		},
		{	
			tick: 825,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 850,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_11
			]
		},
		{	
			tick: 875,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_12,
				left_medium_red_ddroneii_10,
			]
		},
		{	
			tick: 900,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_13
			]
		},
		{	
			tick: 925,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_14
			]
		},
		{	
			tick: 950,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_15
			]
		},
		{	
			tick: 975,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_16
			]
		},
		{	
			tick: 1000,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_17
			]
		},
		{	
			tick: 1025,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_18
			]
		},
		{	
			tick: 1050,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_2,
				bottom_medium_red_ddrone_8
			]
		},
		{	
			tick: 1075,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_4,
				bottom_medium_red_ddrone_10
			]
		},
		{	
			tick: 1100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_6,
				left_medium_red_ddrone_8,
				left_medium_red_ddrone_12
			]
		},
		{	
			tick: 1125,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_2,
				left_medium_red_ddrone_6,
				left_medium_red_ddrone_14
			]
		},
		{	
			tick: 1200,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_6
			]
		},
		{	
			tick: 1300,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_10
			]
		},
		{	
			tick: 1350,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_2,
				left_zippy_18
			]
		},
		{	
			tick: 1400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_10
			]
		},
		{	
			tick: 1450,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_2,
				left_zippy_18
			]
		},
		{	
			tick: 1500,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_10,
				[bg.width + 25, YPOSITION[10], 40, 40, 'turret', '125, 100%, 50%', 60, 'angle', ANGLE.W, 'turret', [20, 0, 270], 0, 0, 'left', 25, 15, 100, 50]
			]
		},
		{	
			tick: 1600,
			pause: true,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_6,
				left_medium_red_ddroneii_14
			]
		},
		{	
			tick: 1610,
			pause: true,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 25, YPOSITION[6], 200, 200, 'bossone', '144, 100%, 50%', 30, 'point', [[550, 150]], 'bossone', [5, 0, 270, 10, 0, 180, 0], 0, 0, 'left', 100, 25, 1000, 1500]
			]
		},
		{	
			tick: 1700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbS, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbN, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 1750,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 1800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbS, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbN, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 1850,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 1900,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbS, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WbN, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 1950,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
			]
		},
		{	
			tick: 2000,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[2, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 25, YPOSITION[10], 25, 25, 'ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 0, 5, 5], 0, 0, 0, 0, 'left', 25, 0, 30, 20],
			]
		},
		{	
			tick: 2100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_2,
				left_zippy_18
			]
		},
		{	
			tick: 2200,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_10
			]
		},
		{	
			tick: 2300,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_2,
				left_zippy_10,
				left_zippy_18
			]
		},
		{	
			tick: 2400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_2,
				bottom_medium_red_ddrone_8
			]
		},
		{	
			tick: 2550,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				bottom_medium_red_ddrone_4,
				bottom_medium_red_ddrone_10
			]
		},
		{	
			tick: 2600,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[4, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 25, YPOSITION[8], 25, 25, 'ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 0, 5, 5], 0, 0, 0, 0, 'left', 25, 0, 30, 20],
				[4, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 25, YPOSITION[12], 25, 25, 'ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 0, 5, 5], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 2700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_10,
				[bg.width + 25, YPOSITION[10], 40, 40, 'turret', '125, 100%, 50%', 60, 'angle', ANGLE.W, 'turret', [20, 0, 270], 0, 0, 'left', 25, 15, 100, 50]
			]
		},
		{	
			tick: 2800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_zippy_2,
				left_zippy_18
			]
		},
		{	
			tick: 2900,
			pause: true,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_6,
				left_zippy_10,
				left_medium_red_ddroneii_14
			]
		},
		{	
			tick: 3000,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 75, YPOSITION[2], 75, 75, 'tpdrone', '220, 100%, 50%', 180, 'teleport', [YPOSITION[2], YPOSITION[15], 40, 0], 0, 0, 0, 0, 'left', 25, 0, 60, 50]
			]
		},
		{	
			tick: 3100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 75, YPOSITION[15], 75, 75, 'tpdrone', '220, 100%, 50%', 180, 'teleport', [YPOSITION[15], YPOSITION[2], 40, 0], 0, 0, 0, 0, 'left', 25, 0, 60, 50]
			]
		},
		{	
			tick: 3200,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 75, YPOSITION[2], 75, 75, 'tpdrone', '220, 100%, 50%', 180, 'teleport', [YPOSITION[2], YPOSITION[15], 40, 0], 0, 0, 0, 0, 'left', 25, 0, 60, 50]
			]
		},
		{	
			tick: 3300,
			pause: true,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 75, YPOSITION[15], 75, 75, 'tpdrone', '220, 100%, 50%', 180, 'teleport', [YPOSITION[15], YPOSITION[2], 40, 0], 0, 0, 0, 0, 'left', 25, 0, 60, 50]
			]
		},
		{	
			tick: 3310,
			pause: true,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 25, YPOSITION[5], 100, 25, 'bosstwo_1', '280, 100%, 60%', 30, 'point', [[600, YPOSITION[5]]], 'bosstwo_1', [40, 0, 270], 0, 0, 'left', 100, 25, 250, 250],
				[bg.width + 25, YPOSITION[6], 150, 50, 'bosstwo_2', '280, 100%, 60%', 30, 'point', [[575, YPOSITION[6]]], 'bosstwo_2', [ANGLE.W, 30, 100, 300, 0, 300, 400], 0, 0, 'left', 100, 25, 500, 500],
				[bg.width + 25, YPOSITION[8], 200, 100, 'bosstwo_3', '280, 100%, 60%', 30, 'point', [[550, YPOSITION[8]]], 'bosstwo_3', [0, 50, 100, 500, false], 0, 0, 'left', 100, 25, 1000, 1000],
				[bg.width + 25, YPOSITION[12], 150, 50, 'bosstwo_2', '280, 100%, 60%', 30, 'point', [[575, YPOSITION[12]]], 'bosstwo_2', [ANGLE.W, 30, 100, 300, 0, 300, 400], 0, 0, 'left', 100, 25, 500, 500],
				[bg.width + 25, YPOSITION[14], 100, 25, 'bosstwo_1', '280, 100%, 60%', 30, 'point', [[600, YPOSITION[14]]], 'bosstwo_1', [40, 0, 270], 0, 0, 'left', 100, 25, 250, 250]
			]
		},
		{	
			tick: 3400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 50, YPOSITION[5], 50, 50, 'recoii', '62, 100%, 50%', 120, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[6], 50, 50, 'recoii', '62, 100%, 50%', 120, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[7], 50, 50, 'recoii', '62, 100%, 50%', 120, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[8], 50, 50, 'recoii', '62, 100%, 50%', 120, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[9], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[10], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[11], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[12], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-><', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[13], 50, 50, 'recoii', '62, 100%, 50%', 240, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[14], 50, 50, 'recoii', '62, 100%, 50%', 240, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[15], 50, 50, 'recoii', '62, 100%, 50%', 240, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15],
				[bg.width + 50, YPOSITION[16], 50, 50, 'recoii', '62, 100%, 50%', 240, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-x', [180, 'recoii'], 'left', 25, 10, 15, 15]
			]
		},
		{	
			tick: 3550,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[5], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WNW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 3600,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[16], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.WSW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 3650,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[11], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 3700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[6], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.SWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 3750,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 25, YPOSITION[10], 40, 40, 'turret', '125, 100%, 50%', 60, 'angle', ANGLE.W, 'turret', [20, 0, 270], 0, 0, 'left', 25, 15, 100, 50], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 3800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100]
			]
		},
		{	
			tick: 4100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100]
			]
		},
		{	
			tick: 4400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100]
			]
		},
		{	
			tick: 4500,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_10
			]
		},
		{	
			tick: 4600,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_8
			]
		},				
		{	
			tick: 4700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				left_medium_red_ddroneii_10
			]
		},
		{	
			tick: 4800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_8
			]
		},
		{	
			tick: 4900,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_10
			]
		},
		{	
			tick: 5000,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				left_zippy_10
			]
		},
		{	
			tick: 5100,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_10
			]
		},
		{	
			tick: 5200,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddroneii_8
			]
		},
		{	
			tick: 5300,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[bg.width + 150, YPOSITION[1], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				[bg.width + 150, YPOSITION[13], 150, 150, 'large-ddrone', '17, 100%, 53%', 30, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100],
				left_zippy_10
			]
		},
		{	
			tick: 5400,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8
			]
		},
		{	
			tick: 5450,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_9
			]
		},
		{	
			tick: 5500,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 5550,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_11
			]
		},
		{	
			tick: 5600,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 5650,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_9
			]
		},
		{	
			tick: 5700,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_8
			]
		},
		{	
			tick: 5750,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[11], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 5800,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				left_medium_red_ddrone_10
			]
		},
		{	
			tick: 5850,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[3, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 75, YPOSITION[11], 50, 50, 'recoii', '62, 100%, 50%', 180, 'angle-bounce', ANGLE.NWbW, 0, 0, 'explode-X', [180, 'recoii'], 'left', 25, 10, 15, 15], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		},
		{	
			tick: 5900,
			pause: false,
			currentwave: false,
			spawned: false,
			enemies:
			[
				[24, 120, 20, 20, 'orb', '320, 100%, 50%', 180, 'orbiter', [bg.width + 150, YPOSITION[7], 150, 150, 'large-ddrone', '17, 100%, 53%', 10, 'angle', ANGLE.W, 0, 0, 0, 0, 'left', 25, 10, 200, 100], 0, 0, 0, 0, 'left', 25, 0, 30, 20]
			]
		}
	]
};

var enemies = [];

var particles = [];

var lines = [];

var keysDown = {};

var protectedKeyCodes = [32, 38, 40, 83, 87];

// sound/music http://html5doctor.com/html5-audio-the-state-of-play/
// http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

var player = new Player();

var introduction = new Introduction();

var headsUpDisplay = new HeadsUpDisplay();

/*	Introduction
	------------------------------------- */

function introductionScreen()
{
	hudCtx.font = "bold 46px Helvetica";
	bgCtx.fillStyle = "black";
	bgCtx.fillRect(0, 0, game.w, game.h);
	updateIntroduction();
}

function updateIntroduction()
{
	if (game.intro)
	{
		introduction.update();
		requestAnimationFrame(updateIntroduction);
	}
	else
	{
		cancelAnimationFrame(updateIntroduction);
		drawMenu();
	}
}

function Introduction()
{
	this.alpha = 0;
	this.tick = 0;
	this.str = 'produced by ben briggs';
	this.stri = '';
	this.boxX = 380;
	this.boxY = 337;
	this.boxTick = 30;
}

function writeOutString(partialStr, completeStr)
{
	if (partialStr.length != completeStr.length)
	{
		return partialStr += completeStr[partialStr.length];
	}
	else
	{
		return completeStr;
	}
}

Introduction.prototype.update = function()
{
	clear(hudCtx);
	if (this.tick < 24)
	{
		drawBracketedRect(hudCtx, 50, 50, 700, 400, this.tick/4);
	}
	else
	{
		drawBracketedRect(hudCtx, 50, 50, 700, 400, 5);
	}
	if (this.tick % 2 == 0)
	{
		this.stri = writeOutString(this.stri, this.str);
		if (this.stri != this.str) this.boxX += 10.5;
	}
	if (this.tick > 250)
	{
		clear(hudCtx);
		game.intro = false;
	}
	if (this.alpha != 1 && this.tick < 125)
	{
		this.alpha += 0.01;
	}
	else if (this.alpha != 0)
	{
		this.alpha -= 0.01;
	}
	//hudCtx.fillStyle = "rgba(36, 164, 255, " + this.alpha + ")";
	hudCtx.fillStyle = "hsla(192, 100%, 70%, 1)";
	hudCtx.font = "18px Karnivore Lite";
	hudCtx.fillText(this.stri, 370, 350);
	if (this.boxTick > 30 && this.boxTick < 60)
	{
		hudCtx.fillRect(this.boxX, this.boxY, 14, 14);	
	}
	else if (this.boxTick > 60)
	{
		this.boxTick = 0;
	}
	this.tick++;
	this.boxTick++;
}

/*	Menu Screen
	------------------------------------- */

var menu =
{
	tick: 0,
	gridX: 0,
	gridY: 0,
	cooldown: 0,
	switchRate: 15,
	lastSelected: 0,
	hasSelected: false,
	animRate: 10,
	buttons:
	[
		{
			text: 'intel',
			fn: 'instruct',
			selected: false
		},
		{
			text: 'new game',
			fn: 'play',
			selected: true
		}
	],
	lines:
	[

	]
};

var buttons = [];

function instruct()
{
	id("information").className = 'active';
	window.addEventListener("keyup", function(e)
	{
		if (e.keyCode == 27)
		{
			id("information").className = '';
			game.menu = true;
			menu.hasSelected = false;
			this.removeEventListener("keyup", false);
		}
	}, false);
}

function drawMenu()
{
	buttons = [];
	game.menu = true;

	for (var i = 0; i < menu.buttons.length; i++)
	{
		var dy = bg.height - 100 - (i * 30);
		buttons[buttons.length] = new Button(100, dy, 200, 20, menu.buttons[i].text, menu.buttons[i].selected, menu.buttons[i].fn);
		if (buttons[i].selected) menu.lastSelected = buttons[i];
	}
	updateMenu();
}

function spawn(objArray, type, properties)
{
	for (var i = 0; i < objArray.length; i++)
	{
		if (objArray[i].active == false)
		{
			objArray[i].init(properties);
			return i;
		}
	}
	objArray.push(new type(properties));
	return objArray.length - 1;
}

function updateMenu()
{
	if (game.menu)
	{
		clear([bgCtx, hudCtx]);
		bgCtx.fillStyle = "black";
		bgCtx.fillRect(0, 0, bg.width, bg.height);
		hudCtx.fillStyle = "hsla(192, 100%, 70%, .6)";
		hudCtx.font = "18px Karnivore Lite";
		hudCtx.fillText('Interceptor', 100, 350);
		menu.cooldown++;
		menu.tick++;
		if (menu.tick < 20)
		{
			drawBracketedRect(hudCtx, 50, 300, 250, 150, menu.tick * 0.25);
		}
		else
		{
			drawBracketedRect(hudCtx, 50, 300, 250, 150, 5);
		}
		if (menu.tick % 2 == 0 && menu.gridX < game.w)
		{
			menu.gridX += 50;
			//menu.lines[menu.lines.length] = new GridLine(menu.gridX, 0, 'vertical');
			spawn(menu.lines, GridLine, [menu.gridX, 0, 0, 'vertical', 0, true]);
		}
		if (menu.tick % 2 == 0 && menu.gridY < game.h)
		{
			menu.gridY += 50;
			//menu.lines[menu.lines.length] = new GridLine(0, menu.gridY, 'horizontal');
			spawn(menu.lines, GridLine, [0, menu.gridY, 0, 'horizontal', 0, true]);
		}
		for (var h = 0; h < menu.lines.length; h++)
		{
			menu.lines[h].draw();
		}
		for (var i = 0; i < buttons.length; i++)
		{
			buttons[i].draw();
			if ((40 in keysDown || 83 in keysDown) && menu.cooldown > menu.switchRate && buttons[i].selected == true)
			{
				menu.cooldown = 0;
				if (i < (buttons.length - 1))
				{
					buttons[i].selected = false;
					buttons[i + 1].selected = true;
					menu.lastSelected = buttons[i + 1];
				}
				else
				{
					buttons[i].selected = false;
					buttons[0].selected = true;
					menu.lastSelected = buttons[0];
				}
			}
			if ((38 in keysDown || 87 in keysDown) && menu.cooldown > menu.switchRate && buttons[i].selected == true)
			{
				menu.cooldown = 0;
				if (i == 0)
				{
					buttons[i].selected = false;
					buttons[buttons.length - 1].selected = true;
					menu.lastSelected = buttons[buttons.length - 1];
				}
				else
				{
					buttons[i].selected = false;
					buttons[i - 1].selected = true;
					menu.lastSelected = buttons[i - 1];
				}
			}
			if (buttons[i].inBounds() || buttons[i].text == menu.lastSelected.text)
			{
				buttons[i].selected = true;
				if (buttons[i].anim < menu.animRate) buttons[i].anim++;
				menu.lastSelected = buttons[i];
			}
			else if (buttons[i].text != menu.lastSelected.text)
			{
				buttons[i].selected = false;
				if (buttons[i].anim != 0)
				{
					buttons[i].anim--;
				}
			}
			if ((32 in keysDown || 90 in keysDown) && !menu.hasSelected)
			{
				menu.lastSelected.execute();
			}
		}
		requestAnimationFrame(updateMenu);
	}
	else
	{
		cancelAnimationFrame(updateMenu);
	}
}


window.addEventListener('load', function()
{
	introductionScreen();
	addEventListener("keydown", function(e)
	{
		for (var i = 0; i < protectedKeyCodes.length; i++)
		{
			// http://stackoverflow.com/questions/3902635/how-does-one-capture-a-macs-command-key-via-javascript
			if (protectedKeyCodes[i] == e.keyCode && (!e.shiftKey || !e.altKey || !e.ctrlKey || !e.metaKey))
			{
				e.preventDefault();
			}
		}
		keysDown[e.keyCode] = true;
	}, false);
	
	addEventListener("keyup", function(e)
	{
		delete keysDown[e.keyCode];
	}, false);

	addEventListener('mousemove', function(evt)
	{
		getMousePos(evt);
	}, false);

	addEventListener('click', clickHandler, false);
	
	document.body.addEventListener('touchmove', function(event)
	{
		// prevent iPhone hold to copy
		event.preventDefault();
	}, false); 


	id('container').addEventListener('touchstart', function(event)
	{
		// If there's exactly one finger inside this element
		if (event.targetTouches.length == 1)
		{
			var touch = event.targetTouches[0];
			TOUCH.X = touch.pageX - id('container').offsetLeft;
			TOUCH.Y = touch.pageY - id('container').offsetTop;
			clickHandler();
		}
	}, false);

	id('container').addEventListener('touchmove', function(event)
	{
		// If there's exactly one finger inside this element
		if (event.targetTouches.length == 1)
		{
			var touch = event.targetTouches[0];
			TOUCH.X = touch.pageX - id('container').offsetLeft;
			TOUCH.Y = touch.pageY - id('container').offsetTop;
		}
	}, false);

}, false);

/*	Buttons
	------------------------------------- */

function Button(x, y, w, h, t, s, fn)
{
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.text = t;
	this.selected = s;
	this.anim = 0;
	this.func = fn;
	this.tick = 0;
}

Button.prototype.draw = function()
{
	this.tick = (this.tick > 60) ? 0 : this.tick + 1;
	var offset = 0;
	if (this.selected)
	{
		offset = 30 - (this.anim*3);
		hudCtx.fillStyle = "hsla(192, 100%, " + (100 - (this.anim*3)) + "%, " + (.6 + (this.anim/10*4)) + ")"
		if (this.tick > 30 && this.tick < 60)
		{
			hudCtx.fillRect(this.x - 15, this.y+4, 10, 10);
		}
	}
	else
	{
		hudCtx.fillStyle = "hsla(192, 100%, 70%, .6)";
	}
	hudCtx.font = "16px Karnivore Lite";
	hudCtx.fillText(this.text, this.x, this.y + 15);
}

Button.prototype.execute = function()
{
	if (!menu.hasSelected)
	{
		menu.hasSelected = true;

		switch (this.func)
		{
			case 'play':
				game.menu = false;
				gameStart();
			break;

			case 'instruct':
				instruct();
			break;
		}
	}
}

Button.prototype.inBounds = function()
{
	var eX;
	var eY;

	if (TOUCH.IS_SUPPORTED)
	{
		eX = TOUCH.X;
		eY = TOUCH.Y;
	}
	else
	{
		eX = MOUSE.X;
		eY = MOUSE.Y;
	}

	if (eX > this.x && eX < this.x + this.width &&
		eY > this.y && eY < this.y + this.height) return true;
}


/*	Main game loop
	------------------------------------- */

function gameStart()
{
	clear();
	bgCtx.fillStyle = "black";
	bgCtx.fillRect(0, 0, game.w, game.h);
	buttons = [];
	menu.lines = [];
	game.score = 0;
	game.wave = 0;
	game.tick = 0;
	game.maxwaves = game.stages[game.stages.length-1].tick;
	enemies = [];
	for (var i = 0; i <= game.w; i += 50)
	{
		spawn(lines, GridLine, [i, 0, game.h, 'vertical', 'hsla(192, 100%, 70%, .075)']);
	}
	for (var i = 0; i < game.h - 50; i += 50)
	{
		spawn(lines, GridLine, [0, i + 50, game.w, 'horizontal', 'hsla(192, 100%, 70%, .075)']);
	}
	for (var i = 0; i <= game.w + 25; i += 25)
	{
		spawn(lines, GridLine, [i, 0, game.h, 'vertical', 'hsla(192, 100%, 70%, .075)']);
	}
	for (var i = 0; i < game.h - 25; i += 25)
	{
		spawn(lines, GridLine, [0, i + 25, game.w, 'horizontal', 'hsla(192, 100%, 70%, .075)']);
	}
	player.start();
	headsUpDisplay.init();
	play();
}

function play()
{
	game.active = true;
	updateAll();
}

function pause()
{
	game.active = false;
	pauseCounter = 0;
	cancelAnimationFrame(updateAll);
	delete keysDown[27];
	id('container').className = 'blur';
	overlayCtx.font = "16px Karnivore Lite";
	overlayCtx.fillStyle = 'white';
	overlayCtx.fillText("paused", 20, 20);
	pauseLoop();
}

function pauseLoop()
{
	if (27 in keysDown && pauseCounter > 25)
	{
		overlayCtx.clearRect(0, 0, game.w, game.h);
		id('container').className = '';
		cancelAnimationFrame(pauseLoop);
		pauseCounter = 0;
		TIME.LAST = new Date().getTime();
		play();
	}
	if (!game.active)
	{
		pauseCounter++;
		requestAnimationFrame(pauseLoop);
	}
}

function stop()
{
	game.active = false;
	updateAll();
}

function updateAll()
{
	if (27 in keysDown && pauseCounter > 25)
	{
		pause();
	}
	if (game.active)
	{
		TIME.DELTA = (new Date().getTime() - TIME.LAST)/1000;
		TIME.LAST = new Date().getTime();
		TIME.FPS = 1/TIME.DELTA;
		
		pauseCounter++;
		var unpause = true;
		for (var h = 0; h < game.stages.length; h++)
		{
			if (game.enemytick > game.stages[h].tick && game.stages[h].currentwave === false && game.stages[h].spawned == false)
			{
				game.stages[h].spawned = true;
				for (var i = 0; i < game.stages[h].enemies.length; i++)
				{
					if (game.stages[h].enemies[i][7] === 'orbiter')
					{
						var orbit_target = spawn(enemies, Enemy, game.stages[h].enemies[i][8]);
						var angle = (360 / game.stages[h].enemies[i][0]) * TO_RADIANS;
						for (var j = 0; j < game.stages[h].enemies[i][0]; j++)
						{
							game.stages[h].enemies[i][8] = [orbit_target, game.stages[h].enemies[i][1], j * angle];
							spawn(enemies, Enemy, game.stages[h].enemies[i]);
						}
					}
					else
					{
						spawn(enemies, Enemy, game.stages[h].enemies[i]);
					}
				}
				game.stages[h].currentwave = true;
			}
			if (game.stages[h].pause === true && game.stages[h].currentwave === true)
			{
				for (var j = 0; j < enemies.length; j++)
				{
					if (enemies[j].active)
					{
						unpause = false;
						break;
					}
				}
				if (unpause)
				{
					game.stages[h].currentwave = false;
				}
			}
			var allEnemiesAreDead = false;
			if (game.stages[h].tick == game.maxwaves && game.enemytick > game.stages[h].tick)
			{
				for (var j = 0; j < enemies.length; j++)
				{
					if (enemies[j].active)
					{
						allEnemiesAreDead = false;
						break;
					}
					allEnemiesAreDead = true;
				}
				if (allEnemiesAreDead)
				{
					gameWon();
				}
			}
		}
		if (unpause)
		{
			game.enemytick++;
		}
		game.tick++;
		headsUpDisplay.update();
		clear([projectileCtx, particleCtx, enemyCtx]);
		player.draw();
		/*for (var i = 0; i < enemies.length; i++)
		{
			lx = (enemies[i].x - 20 > 0) ? enemies[i].x - 20 : 0;
			ly = (enemies[i].y - 20 > 0) ? enemies[i].y - 20 : 0;
			enemyCtx.clearRect(	lx,
								ly,
								lx + enemies[i].width + 20,
								ly + enemies[i].height + 20);
		}*/
		for (var i = 0; i < enemies.length; i++)
		{
			enemies[i].update();
		}
		if (game.tick % 25 == 0)
		{
			spawn(lines, GridLine, [game.w+25, 0, game.h, 'vertical', 'hsla(192, 100%, 70%, .075)']);
		}
		if (game.tick % 50 == 0)
		{
			spawn(lines, GridLine, [game.w, 0, game.h, 'vertical', 'hsla(192, 100%, 70%, .075)']);
		}
		for (var i = 0; i < lines.length; i++)
		{
			if (lines[i].active && lines[i].direction == 'horizontal')
			{
				bgCtx.clearRect(lines[i].x, lines[i].y, game.w, 1);
			}
			else if (lines[i].active && lines[i].direction == 'vertical')
			{
				bgCtx.clearRect(lines[i].x, lines[i].y, 1, game.h);
			}		
		}
		for (var i = 0; i < lines.length; i++)
		{
			lines[i].update();
		}
		for (var i = 0; i < particles.length; i++)
		{
			particles[i].draw();
		}
		requestAnimationFrame(updateAll);
	}
	else
	{
		cancelAnimationFrame(updateAll);
	}
}

/*	Game Over
	------------------------------------- */

function endGame()
{
	stop();
	particles = [];
	enemies = [];
	clear();
	bgCtx.fillStyle = "black";
	bgCtx.fillRect(0, 0, bg.width, bg.height);
	hudCtx.fillStyle = "#fff";
	hudCtx.font = "16px Karnivore Lite";
	hudCtx.shadowColor = "black";
	hudCtx.shadowOffsetX = 0;
	hudCtx.shadowOffsetY = 1;
	hudCtx.shadowBlur = 10;
}

function gameWon()
{
	endGame();
	hudCtx.fillText("You win! Your score was: " + game.score, 300, 200);
}

function gameOver()
{
	endGame();
	hudCtx.fillText("Game Over! Your score was: " + game.score, 300, 200);
}

/*	Collisions
	------------------------------------- */

function collides(a, b)
{
	if (a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height &&
		a.y + a.height > b.y) return true;
}

/*	SPLODE
	------------------------------------- */

function Explosion()
{
	this.hasHit = false;
	this.currentFrame = 0;
	this.totalFrames = 10;
	this.colour = '#fff';
}

Explosion.prototype.update = function()
{
	if (this.hasHit)
	{
		if (this.currentFrame == 0)
		{
			for (var k = 0; k < 50; k++)
			{
				spawn(particles, Particle, [this.x, this.y, 4, this.colour, 6, 60, (359/k)*Math.PI]);
			}
		}
		if (this.currentFrame == 1)
		{
			for (var k = 0; k < 50; k++)
			{
				spawn(particles, Particle, [this.x, this.y, 1, this.colour, 3, 60, (359/k)*Math.PI]);
			}
		}
		if (this.currentFrame == 2)
		{
			for (var k = 0; k < 50; k++)
			{
				spawn(particles, Particle, [this.x, this.y, 2, this.colour, 5, 120, (359/k)*Math.PI]);
			}
		}
		if (this.currentFrame == 3)
		{
			for (var k = 0; k < 50; k++)
			{
				spawn(particles, Particle, [this.x, this.y, 3, this.colour, 7, 180, (359/k)*Math.PI]);
			}
		}
		this.currentFrame++;
		if (this.currentFrame == this.totalFrames)
		{
			this.hasHit = false;
			this.currentFrame = 0;
		}
	}
}

/*	Events
	------------------------------------- */

function getMousePos(e)
{
	MOUSE.X = e.pageX - id('container').offsetLeft;
	MOUSE.Y = e.pageY - id('container').offsetTop;
}

function clickHandler()
{
	for (var i = 0; i < buttons.length; i++)
	{
		if (buttons[i].inBounds()) buttons[i].execute();
	}
}