
noseX=0
noseY=0

function preload () {

    nose_image=loadImage('https://i.postimg.cc/pdWHZMDy/clown-nose.png');


}

function setup ()
{
    canvas=createCanvas(300,300);
    canvas.center()
    capture=createCapture(VIDEO)
    capture.size(300,300)
    capture.hide()
    posenet=ml5.poseNet(capture,modeloaded)
    posenet.on('pose',gotposes)
}

function modeloaded ()
{
    console.log('posenet is initialised');


}

function gotposes(results)
{
    if (results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-5;
        noseY=results[0].pose.nose.y-5;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);

    }

}

function draw ()
{
    image(capture,0,0,300,300)
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
    image(nose_image,noseX,noseY,15,15);

}

function take_snapshot ()
{
    save('myfilter.png')
}