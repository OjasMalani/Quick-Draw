function setup(){
    canvas= createCanvas(310,310);
   canvas.center();
   background("white");
   canvas.mouseReleased(classifyCanvas);
   synth= window.speechSynthesis;0
} 

function preload() {
    classifier= ml5.imageClassifier('DoodleNet');
}

function clear_canvas(){
    background("white")
}

function draw() {
    strokeWeight(13.1);
    stroke("blue");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas,gotResults)
}

function gotResults(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML='Label:'+results[0].label;
        document.getElementById("confidence").innerHTML='confidence:'+Math.round(results[0].confidence * 100)+'%';
        utterThis= new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}