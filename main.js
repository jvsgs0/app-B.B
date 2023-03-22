noseX=0;
noseY=0;
nosesY=0;
nosesX=0;

function preload() {
  bo = loadImage('bo.png');
  bi = loadImage('bi.png')
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

function modelLoaded() {
    console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+25;
        nosesX = results[0].pose.nose.x-20;
        nosesY = results[0].pose.nose.y;
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(bo, noseX, noseY, 50, 30);
  image(bi, nosesX, nosesY, 50, 30);
}

function takeSnapshot(){
    save('minhaImagemFiltrada.png');
}