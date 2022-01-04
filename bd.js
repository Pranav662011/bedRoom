img='';
 status="";

  function preload(){
      img=loadImage("Bed_Room.jpeg");
  }
 
 function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("main").innerHTML="Status: detecting object";
}

function draw(){
    image(img,0,0,640,420);
    fill("#fc0303");
    text("Dog",45,75);
    noFill();
    stroke("#fc0303");
    rect(30,60,450,350);
    rect(300,60,300,350);
    text("Cat",320,75);

    
    rect(280,300,130,100);
    text("Bowl",300,310);
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
    if (error){
        console.log(error);
    }

    else{
        console.log(results);
    }
}