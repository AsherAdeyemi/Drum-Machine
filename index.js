const libOne = document.getElementById('lib-1');
const libTwo = document.getElementById('lib-2');
const libThree = document.getElementById('lib-3');
const beatName = document.getElementById('beat-name');
const padContainer = document.getElementById('pad-container');


let selectedLib;

const pressKeyHandler = (e) => {
	switch (e.keyCode) {
		case 81:
			classClick('Q');
			playPadSound('Q');
			break;
		case 87:
			classClick('W');
			playPadSound('W');
			break;
		case 69:
			classClick('E');
			playPadSound('E');
			break;
		case 65:
			classClick('A');
			playPadSound('A');
			break;
		case 83:
			classClick('S');
			playPadSound('S');
			break;
		case 68:
			classClick('D');
			playPadSound('D');
			break;
		case 90:
			classClick('Z');
			playPadSound('Z');
			break;
		case 88:
			classClick('X');
			playPadSound('X');
			break;
		case 67:
			classClick('C');
			playPadSound('C');
			break;
		case 49:
			selectedLib = libraryOne;
			createPads(libraryOne);
			break;
		case 50:
			selectedLib = libraryTwo;
			createPads(libraryTwo);
			break;
		case 51:
			selectedLib = libraryThree;
			createPads(libraryThree);
			break;
	}
};

const playPadSound = (key) => {
	if (selectedLib) {
		const pad = selectedLib.find(pad => pad.key === key);
		if (pad) {
			playSound(pad.sound, pad.name);
		}
	}
};

document.addEventListener('keydown', pressKeyHandler);

function Sound(src) {
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.setAttribute('preload', 'auto');
	this.sound.setAttribute('controls', 'none');
	this.sound.classList.add('clip');
	this.sound.style.display = 'none';
	document.body.appendChild(this.sound);
	this.play = function () {
		this.sound.play();
	};
	this.stop = function () {
		this.sound.pause();
		this.sound.currentTime = 0;
	};
}

const oneQ = new Sound('./sounds/library1/sound1.wav');
const oneW = new Sound('./sounds/library1/sound2.wav');
const oneE = new Sound('./sounds/library1/sound3.wav');
const oneA = new Sound('./sounds/library1/sound4.WAV');
const oneS = new Sound('./sounds/library1/sound5.wav');
const oneD = new Sound('./sounds/library1/sound6.wav');
const oneZ = new Sound('./sounds/library1/sound7.wav');
const oneX = new Sound('./sounds/library1/Sound8.wav');
const oneC = new Sound('./sounds/library1/Sound9.wav');

const libraryOne = [
	{ sound: oneQ, name: 'CLAP!', key: 'Q' },
	{ sound: oneW, name: 'CRASH!', key: 'W' },
	{ sound: oneE, name: 'KICK!', key: 'E' },
	{ sound: oneA, name: 'PERC 1', key: 'A' },
	{ sound: oneS, name: 'PERC 2', key: 'S' },
	{ sound: oneD, name: 'PERC 3', key: 'D' },
	{ sound: oneZ, name: 'PERC 4', key: 'Z' },
	{ sound: oneX, name: 'SHAKER!', key: 'X' },
	{ sound: oneC, name: 'SNARE!', key: 'C' }
];

const twoQ = new Sound('./sounds/library2/sound1.wav');
const twoW = new Sound('./sounds/library2/sound2.wav');
const twoE = new Sound('./sounds/library2/sound3.wav');
const twoA = new Sound('./sounds/library2/sound4.wav');
const twoS = new Sound('./sounds/library2/sound5.wav');
const twoD = new Sound('./sounds/library2/sound6.wav');
const twoZ = new Sound('./sounds/library2/sound7.WAV');
const twoX = new Sound('./sounds/library2/sound8.wav');
const twoC = new Sound('./sounds/library2/sound9.wav');

const libraryTwo = [
	{ sound: twoQ, name: 'HI-HAT 1', key: 'Q' },
	{ sound: twoW, name: 'KICK', key: 'W' },
	{ sound: twoE, name: 'HI-HAT 2', key: 'E' },
	{ sound: twoA, name: 'TAMBOURINE', key: 'A' },
	{ sound: twoS, name: 'ANALOG BELL!', key: 'S' },
	{ sound: twoD, name: 'PERC 1', key: 'D' },
	{ sound: twoZ, name: 'PERC 2', key: 'Z' },
	{ sound: twoX, name: 'PERC 3', key: 'X' },
	{ sound: twoC, name: 'SNARE!', key: 'C' }
];

const threeQ = new Sound('./sounds/library3/sound1.wav');
const threeW = new Sound('./sounds/library3/sound2.wav');
const threeE = new Sound('./sounds/library3/sound3.wav');
const threeA = new Sound('./sounds/library3/sound4.wav');
const threeS = new Sound('./sounds/library3/sound5.wav');
const threeD = new Sound('./sounds/library3/sound6.wav');
const threeZ = new Sound('./sounds/library3/sound7.wav');
const threeX = new Sound('./sounds/library3/sound8.wav');
const threeC = new Sound('./sounds/library3/sound9.wav');

const libraryThree = [
	{ sound: threeQ, name: 'HI-HAT!', key: 'Q' },
	{ sound: threeW, name: 'KICK!', key: 'W' },
	{ sound: threeE, name: 'CLAP!', key: 'E' },
	{ sound: threeA, name: 'FX 1', key: 'A' },
	{ sound: threeS, name: 'FX 2', key: 'S' },
	{ sound: threeD, name: 'FX 3', key: 'D' },
	{ sound: threeZ, name: 'FX 4', key: 'Z' },
	{ sound: threeX, name: 'FX 5', key: 'X' },
	{ sound: threeC, name: 'TOM!', key: 'C' }
];

function NewPad(pad) {
    const { sound, name, key } = pad;
    const padElement = document.createElement('div');
    padElement.classList.add('drum-pad');
    padElement.setAttribute('id', key);
    padElement.setAttribute('role', 'button');
    padElement.innerText = key;
    padElement.onclick = () => {
        playSound(sound, name);
        classClick(key);
    };
    padElement.onmouseover = () => classHover(key);
    padElement.onmouseleave = () => {
        padElement.classList.remove('drum-pad-hover');
    };
    padContainer.appendChild(padElement);
}

// Create pad function
const createPads = (library) => {
    while (padContainer.firstChild) {
        padContainer.removeChild(padContainer.lastChild);
    }
    library.forEach((pad) => {
        new NewPad(pad);
    });
};

// Play sound function
const playSound = (sound, name) => {
    sound.play();
    beatName.innerHTML = name;
};

// Edit class when hover
const classHover = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-hover');
};

// Edit class when clicked
const classClick = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-click');
    setTimeout(() => pad.classList.remove('drum-pad-click'), 100);
};

// Event listeners for library buttons
libOne.addEventListener('click', () => {
    selectedLib = libraryOne;
    createPads(libraryOne);
});

libTwo.addEventListener('click', () => {
    selectedLib = libraryTwo;
    createPads(libraryTwo);
});

libThree.addEventListener('click', () => {
    selectedLib = libraryThree;
    createPads(libraryThree);
});

// Set default library on page load
selectedLib = libraryOne;
createPads(libraryOne);
