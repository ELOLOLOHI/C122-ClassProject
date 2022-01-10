x=0;
y=0;
draw_circ="";
draw_rect="";

srecog=window.webkitSpeechRecognition;
recog=new srecog();


function setup(){
    canvas=createCanvas(900,600);
}

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak."
    recog.start();
}

recog.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="The speech has been recognized as "+content;

    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        console.log("circle");
        document.getElementById("status").innerHTML="Drawing circle initiated.";
        draw_circ="set";

    }

    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Drawing rectangle initiated.";
        draw_rect="set";
    }
}

function draw(){
    if(draw_circ=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle has been drawn.";
        draw_circ="";
    
    }
    if(draw_rect=="set"){
        width=Math.floor(Math.random()*150);
        height=Math.floor(Math.random()*150);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="Rectangle has been drawn.";
        draw_rect="";
    }
}