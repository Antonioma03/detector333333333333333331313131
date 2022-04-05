function identificar(){
    navigator.mediaDevices.getUserMedia({audio:true});
    modelo=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YYaUzudMd/model.json',modelosonidos);

}
function modelosonidos(){
    modelo.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    rojos=Math.floor(Math.random()*255)+1;
    verdes=Math.floor(Math.random()*255)+1;
    asules=Math.floor(Math.random()*255)+1;
    document.getElementById("sonido").innerHTML='es un sonido de '+ results[0].label;
document.getElementById("presision").innerHTML='la presision es de '+(results[0].confidence*100).toFixed(2)+'%';
document.getElementById("sonido").style.color="rgb("+rojos+","+verdes+","+asules+")";
document.getElementById("presision").style.color="rgb("+rojos+","+verdes+","+asules+")";
alien1=document.getElementById('alien1');
alien2=document.getElementById('alien2');
alien3=document.getElementById('alien3');
alien4=document.getElementById('alien4');
if(results[0].label=="aves"){
alien1.src='aliens-01.gif';
alien2.src='aliens-02.png';
alien3.src='aliens-03.png';
alien4.src='aliens-04.png';
}

else if(results[0].label=="lobo"){
    alien2.src='aliens-02.gif';
alien1.src='aliens-01.png';
alien3.src='aliens-03.png';
alien4.src='aliens-04.png';
}

else if(results[0].label=="perro"){
    alien3.src='aliens-03.gif';
alien1.src='aliens-01.png';
alien2.src='aliens-02.png';
alien4.src='aliens-04.png';
}
else{
    alien4.src='aliens-04.gif';
alien1.src='aliens-01.png';
alien3.src='aliens-03.png';
alien2.src='aliens-02.png';
}
}
}


