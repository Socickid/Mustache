NoseX = 0;
NoseY = 0;
function preload(){
    Mustache = loadImage("https://i.postimg.cc/Y9vqKgJ5/istockphoto-485318064-612x612-removebg-preview.png");
}
function setup(){
    Canvas = createCanvas(500, 500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(500, 500);
    Video.hide()

    PoseNet = ml5.poseNet(Video, modelLoaded)
    PoseNet.on("pose", gotPoses)
}
function draw(){
    image(Video, 0, 0, 500, 500);
    stroke("Black");
    fill("black");
    image(Mustache, NoseX, NoseY, 200, 200);
}
function TakeSnap(){
    save("Mustache.png");
}

function modelLoaded(){
    console.log("Model initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x - 100;
        NoseY = results[0].pose.nose.y - 70;
    }
}