import Phaser from 'phaser';

const gameOptions = {
	canvas_height: 600,
	canvas_width: 800,
	flap_velocity: 250,
	gravity: 400,
	pipe: null,
	bird: null
};

gameOptions.bird_initial_pos = {
	x: gameOptions.canvas_width * 0.1,
	y: gameOptions.canvas_height / 2
};

const config = {
	type: Phaser.AUTO,
	height: gameOptions.canvas_height,
	width: gameOptions.canvas_width,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: {
		preload,
		create,
		update
	}
};

function preload() {
	this.load.image('sky', 'assets/sky.png');
	this.load.image('bird', 'assets/bird.png');
	this.load.image('pipe', 'assets/pipe.png');
}

function create() {
	this.add.image(0, 0, 'sky').setOrigin(0, 0);

	gameOptions.pipe = this.physics.add.sprite(300, 100, 'pipe').setOrigin(0, 0);

	gameOptions.bird = this.physics.add
		.sprite(gameOptions.bird_initial_pos.x, gameOptions.bird_initial_pos.y, 'bird')
		.setOrigin(0, 0);

	gameOptions.bird.body.gravity.y = gameOptions.gravity;

	this.input.on('pointerdown', flap);
	this.input.keyboard.on('keydown_SPACE', flap);
}

function update(time, delta) {
	if (gameOptions.bird.y > config.height - gameOptions.bird.height || gameOptions.bird.y < 0) {
		restartBirdPosition();
	}
}

function flap() {
	gameOptions.bird.body.velocity.y = -gameOptions.flap_velocity;
}

function restartBirdPosition() {
	gameOptions.bird.x = gameOptions.bird_initial_pos.x;
	gameOptions.bird.y = gameOptions.bird_initial_pos.y;
	gameOptions.bird.body.velocity.y = 0;
}

new Phaser.Game(config);
