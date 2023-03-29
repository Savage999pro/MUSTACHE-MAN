nosex=0; 
nosey=0;
function preload() {
   mustache=loadImage("Mustache.jpg")
}
function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

    function takesnapshot(){
        save('myFilterImage.jpg');
    }
    function modelLoaded()  {
        console.log("POSENET IS INITIALIZED :D")
    }
    function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        nosex =  results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
        }
    }
    function draw() {
        image(video, 0, 0, 500, 500);
       image(mustache, nosex -45, nosey -5, 90,70)
    }