var noseX=0
var noseY=0

var noseImg
function preload(){
    noseImg= loadImage("A_nose.png")
}

function setup(){
    canvas = createCanvas(300,300) 
    canvas.center()
    video= createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    // fill("red")
    // stroke("red")
    // circle(noseX, noseY, 35);
    image(noseImg, noseX-25, noseY-15, 45, 45)

}

function kidnapsnap(){
    save("sussybombaclat.png")
}

function modelLoaded(){
    console.log('Posenet Is initiated 👌')
}

function gotPoses(results){
    if(results.length>0){
       
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
    }
}