function setup(){
        canvas= createCanvas(510, 425);
        canvas.position(800,300);
        video= createCapture(VIDEO);
        video.size(500, 600);
        video.position(45, 225);
}

function draw(){
    background('#666a75');
    fill('#e8431e');
    stroke('#e8431e');
}