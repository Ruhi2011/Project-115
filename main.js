nosex = 0;
nosey = 0;
function preload() {
    clownnose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function take_snapshot() {
    save('myFilterImage.png');
}

function draw() {
image(video, 0, 0, 300, 300);
image(clownnose, nosex, nosey, 80, 35);
}
 function take_snapshot() {
    save('myFilterImage.png');
 }

 function modelLoaded() {
    console.log('PoseNet is Intialized');
 }
 
 function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    nosex = results[0].pose.nose.x-40;
    nosey = results[0].pose.nose.y;
    }
 }
