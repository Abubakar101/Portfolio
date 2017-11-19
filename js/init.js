// Materialize Design
(function($) {
  $(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// Scroll Spy for scrolling smoothly
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});


// Adding 'active' class for selected Project divs - to highlight
// Showing projects according to selection
window.onload = function() {
  document.querySelector("body").addEventListener("click", function(e) {
    if (
      e.target.parentElement.parentElement.className ==
      "right hide-on-med-and-down projectMenu"
    ) {
      if (e.target.className === "allNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "nodeNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "reactNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "rubyNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "javascriptNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      }
    }
  });
};

// Remove active class function
function removeClass(current) {
  let menuChidlren = document.querySelectorAll(".projectMenu LI");
  // Removing every className 'active'
  for (let i = 0; i < menuChidlren.length; i++) {
    menuChidlren[i].classList.remove("active");
  }
  // Only adding 'active' to current class
  current.classList.add("active");
}

// Projects showing by selection
function showProject(eNav) {
  let project = document.querySelectorAll(".projectDivs");
  // Showing All Projects
  project.forEach(function(e, i) {
    // To make new selection each time.
    e.style.display = "none";

    if (eNav == "allNav") {
      if (e.className.includes("all")) e.style.display = "block";
    } else if (eNav == "nodeNav") {
      if (e.className.includes("node")) e.style.display = "block";
    } else if (eNav == "reactNav") {
      if (e.className.includes("react")) e.style.display = "block";
    } else if (eNav == "rubyNav") {
      if (e.className.includes("ruby")) e.style.display = "block";
    } else if (eNav == "javascriptNav") {
      if (e.className.includes("javascript")) e.style.display = "block";
    }
  }, this);
}

/*
	click to clear and change hue

	don't look at or judge this code
	I just kept tweaking values and
	adding random things in a messy way
	
	it's full of magic numbers
*/

// var c,
// 	ctx,
// 	w,
// 	h,
// 	cx,
// 	cy,
// 	branches,
// 	startHue,
// 	tick;

// function rand( min, max ) {
// 	return Math.random() * ( max - min ) + min;
// }

// function randInt( min, max ) {
// 	return Math.floor( min + Math.random() * ( max - min + 1 ) );
// };

// function Branch( hue, x, y, angle, vel ) {
// 	var move = 15;
// 	this.x = x + rand( -move, move );
// 	this.y = y + rand( -move, move );
// 	this.points = [];
// 	this.angle = angle != undefined ? angle : rand( 0, Math.PI * 1 );
// 	this.vel = vel != undefined ? vel : rand( -4, 4 );
// 	this.spread = 0;
// 	this.tick = 0;
// 	this.hue = hue != undefined ? hue : 200;
// 	this.life = 1;
// 	this.decay = 0.0015;
// 	this.dead = false;

// 	this.points.push({
// 		x: this.x,
// 		y: this.y
// 	});
// }

// Branch.prototype.step = function( i ) {
// 	this.life -= this.decay;
// 	if( this.life <= 0 ) {
// 		this.dead = true;
// 	}

// 	if( !this.dead ) {
// 		var lastPoint = this.points[ this.points.length - 1 ];
// 		this.points.push({
// 			x: lastPoint.x + Math.cos( this.angle ) * this.vel,
// 			y: lastPoint.y + Math.sin( this.angle ) * this.vel
// 		});
// 		this.angle += rand( -this.spread, this.spread );
// 		this.vel *= 0.99;
// 		this.spread = this.vel * 0.04;
// 		this.tick++;
// 		this.hue += 0.3;
// 	} else {
// 		branches.splice( i, 1 );
// 	}
// };

// Branch.prototype.draw = function() {
// 	if( !this.points.length || this.dead ) {
// 		return false;
// 	}

// 	var length = this.points.length,
// 		i = length - 1,
// 		point = this.points[ i ],
// 		lastPoint = this.points[ i - randInt( 5, 100 ) ];
// 		//jitter = 8;
// 	if( lastPoint ) {
// 		var jitter = 2 + this.life * 6;
// 		ctx.beginPath();
// 		ctx.moveTo( lastPoint.x, lastPoint.y );
// 		ctx.lineTo( point.x + rand( -jitter, jitter ), point.y + rand( -jitter, jitter ) );
// 		ctx.lineWidth = 1;
// 		var alpha = this.life * 0.075;
// 		ctx.strokeStyle = 'hsla(' + ( this.hue + rand( -10, 10 ) ) + ', 70%, 40%, ' + alpha + ')';
// 		ctx.stroke();
// 	}
// }

// function init() {
// 	c = document.getElementById( 'c' );
// 	ctx = c.getContext( '2d' );
// 	startHue = 220;
// 	branches = [];
// 	reset();
// 	loop();
// }

// function reset() {
// 	w = window.innerWidth;
// 	h = window.innerHeight;
// 	cx = w / 2;
// 	cy = h / 2;
// 	branches.length = 0;
// 	c.width = w;
// 	c.height = h;
// 	tick = 0;

// 	for( var i = 0; i < 500; i++ ) {
// 		branches.push( new Branch( startHue, cx, cy) );
// 	}
// }

// function step() {
// 	var i = branches.length;
// 	while( i-- ) { branches[ i ].step( i ) }
// 	tick++;
// }

// function draw() {
// 	var i = branches.length;
// 	if( tick < 450 ) {
// 		ctx.save();
// 		ctx.globalCompositeOperation = 'lighter';
// 		ctx.globalAlpha = 0.002;
// 		ctx.translate( cx, cy );
// 		var scale = 1 + tick * 0.00025 ;
// 		ctx.scale( scale, scale );
// 		ctx.translate( -cx, -cy );
// 		ctx.drawImage( c, rand( -150, 150 ), rand( -150, 150 ) );
// 		ctx.restore();
// 	}

// 	ctx.globalCompositeOperation = 'lighter';
// 		while( i-- ) { branches[ i ].draw() }
// }

// function loop() {
// 	requestAnimationFrame( loop );
// 	step();
// 	draw();
// 	step();
// 	draw();
// }

// window.addEventListener( 'resize', reset );
// window.addEventListener( 'click', function() {
// 	startHue += 60;
// 	reset();
// });

// init();
