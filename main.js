nose_x = 0; 
nose_y = 0; 
r_wrist_x = 0; 
l_wrist_x = 0;
difference = 0; 


function setup(){
c1 = createCanvas(500, 480);
c1.position(850,185);
v1 = createCapture(VIDEO);
v1.position(100,185);

poseN = ml5.poseNet(v1, modelLoaded); 
poseN.on('pose', gotPoses); 
}

function gotPoses(results){
 
if (results.length>0){

console.log(results);

nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y; 

console.log("Nose X: " +nose_x+ " Nose Y: "+nose_y);

r_wrist_x = results[0].pose.rightWrist.x; 
l_wrist_x = results[0].pose.leftWrist.x;
difference = floor(l_wrist_x - r_wrist_x);

console.log("Right Wrist X: "+r_wrist_x+ " Left Wrist X: " +l_wrist_x+" Difference: "+difference);


}


}

function modelLoaded(){

console.log("Model has Loaded!!"); 

}
function draw(){

background("lightgreen"); 

document.getElementById("size").innerHTML = "Length of the Square is: "+difference+ "px";

fill ("red"); 
stroke ("red"); 
square (nose_x, nose_y, difference); 


}

