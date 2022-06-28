noseX=0;
noseY=0;
function preload(){
nosepng= loadImage('Clown_nose.webp');
}
function setup(){
    //createCanvas(width,height)
    canvas = createCanvas(300,300);
    canvas.center();
    //createCapture is a pre-defined function of p5.js that helpes us access the webcam
    video = createCapture(VIDEO);
    video.size(300,300);
    //it will hide the live view component of the webcam of p5.js
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
}

function take_snapshot(){
    save('MyFilterImage.png')
}
function modelLoaded(){
    console.log("PoseNet Model Loaded")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        //results will have the x and y coordinate of 17 body parts
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(nosepng, noseX-15, noseY-10, 40, 40);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    }