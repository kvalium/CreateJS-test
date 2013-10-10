if ('ontouchstart' in document.documentElement) {
    canvas.addEventListener('touchstart', function(e) {
        handleKeyDown();handleKeyUp;
    }, false);
} else {
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
    document.onmousedown = handleKeyDown;
}

// Keyboard Variables
var leftKey = 37;
var upKey = 38;
var rightKey = 39;
var downKey = 40;
var spaceKey = 32;

var stage,
        canvas,
        hero,
        text,
        img = new Image();

function init() {
    canvas = document.createElement('canvas');
    canvas.width = getWidth();
    canvas.height = getHeight();
    document.body.appendChild(canvas);

    stage = new createjs.Stage(canvas);

    text = new createjs.Text("", "30px Arial");
    stage.addChild(text);

    img.onload = onImageLoaded;
    img.src = 'assets/hero.png';
}

function onImageLoaded(e) {
    hero = new Hero(img);
    stage.addChild(hero);
    hero.reset();

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", mainTick);
}

// move the hero down by 1px
// and update/render the stage
function mainTick() {
    text.text = "x = " + hero.x + "\ny = " + Math.round(hero.y) + "\nV(x) = " + hero.velocity.x + "\nV(y) = " + hero.velocity.y;
    hero.tick();
    stage.update();
}


function handleKeyDown(e) {
//cross browser issues exist
    if (!e) {
        var e = window.event;
    }

    if (e.keyCode === rightKey) {
        hero.move_right();
    }
    
    if (e.keyCode === leftKey) {
        hero.move_left();
    }

    if (e.keyCode === upKey) {
        hero.jump();
    }
}

function handleKeyUp(e) {
//cross browser issues exist
    if (!e) {
        var e = window.event;
    }
    
    if (e.keyCode === rightKey || e.keyCode === leftKey) {
        hero.stop();
    }

}


init();