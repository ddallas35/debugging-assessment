var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp({update: update}),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////
    
    // TODO 1 : Declare and initialize our variables //
    var circle;
    var circles = [];
    // TODO 2 : Create a function that draws a circle  //
    var drawCircle = function() {
        circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        physikz.addRandomVelocity(circle, canvas);
        view.addChild(circle);
        circles.push(circle);
        
    }
    
    // TODO 3 : Call the drawCircle function 5 times //

    // TODO 7 : Create a Loop to call drawCircle 100 times
    for (var i = 0; i < 100; i++){
        drawCircle();
    }
    view.addChild(fps);
    app.addUpdateable(fps);

    function checkCircleBounds(circle) {
        // TODO 5 : YOUR CODE STARTS HERE //////////////////////
        if (circle.x > canvas.width) {
            circle.x = 0;
        } else if ( circle.x < 0) {
           circle.x = canvas.width;
        } if (circle.y > canvas.height) {
            circle.y = 0;
        } else if ( circle.y < 0 ) {
            circle.y = canvas.height;
        }
        // YOUR TODO 5 CODE ENDS HERE //////////////////////////
    }

    function update() {
        // TODO 4 : Update the circle's position //
        for (var i = 0; i < circles.length; i++){
            var allCircles = circles[i];
            physikz.updatePosition(allCircles);
            checkCircleBounds(allCircles);
        }
       
        // TODO 6 : Call checkCircleBounds on your circles.
        
        // TODO 8 : Iterate over the array
    

        for (var i = 0; i < circles.length - 1; i++) {
            var circle = circles[0];
            physikz.updatePosition(circle);
            checkCircleBounds(circle);
        }
    
    }
        
    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
