(function(window) {

    var floor = getHeight() / 1.50;

    function Hero(image) {
        this.initialize(image);
    }
    Hero.prototype = new createjs.Bitmap();

    // save the original initialize-method so it won't be gone after
    // overwriting it
    Hero.prototype.Bitmap_initialize = Hero.prototype.initialize;

    // initialize the object
    Hero.prototype.initialize = function(image) {
        this.velocity = {x: 0, y: 0};
        this.Bitmap_initialize(image);
        this.name = 'Hero';
        this.doublejump = true;
        this.snapToPixel = true;
    };

    // we will call this function every frame to 
    Hero.prototype.tick = function() {
        this.velocity.y++;

        var addY = this.velocity.y;

        this.y += addY;


        this.x += this.velocity.x;

        if (this.y >= floor) {
            this.reset();
        }

    };

    Hero.prototype.jump = function() {
        if (hero.y === floor) {
            this.velocity.y = -17;
        }
        
        if(hero.y < floor && this.doublejump === true){
            this.velocity.y = -17; this.doublejump = false;
        }

    };

    Hero.prototype.move_right = function() {
        this.velocity.x = 5;
    };

    Hero.prototype.move_left = function() {
        this.velocity.x = -5;
    };

    Hero.prototype.stop = function() {
        this.velocity.x = 0;
    };

    // this will reset the position of the hero
    // we can call this e.g. whenever a key is pressed
    Hero.prototype.reset = function() {
        this.y = floor;
        this.velocity.y = 0;
        this.doublejump = true;
    };

    window.Hero = Hero;
}(window));