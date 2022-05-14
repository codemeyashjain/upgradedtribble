noseX=0;
noseY=0;
function preload(){
mustache=loadImage('m.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

   posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("missionposenutisasuccess");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y+16;

}
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,60,35);    
}
function takesnap(){
    save('er-se-eb-pp.png')
}