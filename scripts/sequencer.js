let hh, snare2, kick2, shaker, oh, fx; //Instrument. serve as container that holds a sound source
let hhPat, snarePat, kickPat, shakerPat, ohPat, fxPat; //Instrument Pattern. array of numbers we can manipulate to make beats
let hPhrase, sPhrase, kPhrase, shakerPhrase, ohPhrase, fxPhrase; //Instrument Phrase. defines how the instrument pattern is interpreted.
let drums; //Part. we will attach the phrase to the part, which will serve as our transport to drive the phrase
let bpmCTRL;
let beatLength;
let cellWidth;
let canvas;
let sequncerPattern;
let cursorPos;

function setup() {
  canvas = createCanvas(640, 200);
  canvas.mousePressed(canvasPressed);
  beatLength = 16;
  cellWidth = width/beatLength;
  cursorPos = 0;
  
  kick2 = loadSound('assets/808kick.wav', () => {});
  // kick2 = playKick();
  snare2 = loadSound('assets/Snare.wav', () => {});
  // snare2 = playSnare();
  hh = loadSound('assets/hat.wav', () => {});
  // hh = playHiHat();
  shaker = loadSound('assets/shaker.wav', () => {});
  // shaker = playChirp();
  oh = loadSound('assets/oh.wav', () => {});
  // oh = playTrump();
  fx = loadSound('assets/fx.mp3', () => {});
  // fx = playLowBass();
    
kickPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
snarePat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
hhPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
shakerPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ohPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
fxPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
sequencerPattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  kPhrase = new p5.Phrase('kick2', (time) => {
    kick2.play(time)
  }, kickPat);
  sPhrase = new p5.Phrase('snare2', (time) => {
    snare2.play(time)
  }, snarePat);
  hPhrase = new p5.Phrase('hh', (time) => {
    hh.play(time)
  }, hhPat);
    shakerPhrase = new p5.Phrase('shaker', (time) => {
    shaker.play(time)
  }, shakerPat);
    ohPhrase = new p5.Phrase('oh', (time) => {
    oh.play(time)
  }, ohPat);
    fxPhrase = new p5.Phrase('fx', (time) => {
    fx.play(time)
  }, fxPat);

  drums = new p5.Part();

  drums.addPhrase(kPhrase);
  drums.addPhrase(sPhrase);
  drums.addPhrase(hPhrase);
  drums.addPhrase(shakerPhrase);
  drums.addPhrase(ohPhrase);
  drums.addPhrase(fxPhrase);
  drums.addPhrase('seq', sequence, sequencerPattern);
 
  bpmCTRL = createSlider(30, 600, 80, 1);
  bpmCTRL.position(50,310); //Placement of slider
  bpmCTRL.input(() => {drums.setBPM(bpmCTRL.value())});
  drums.setBPM('95');
  
  drawMatrix();
}  

function keyPressed() {
  if (key === " ") {
    if (hh.isLoaded() && snare2.isLoaded() && kick2.isLoaded() && shaker.isLoaded() && oh.isLoaded() && fx.isLoaded()) {
      if (!drums.isPlaying) { 
        drums.metro.metroTicks = 0; //makes animator start over at beginning after pressing spacebar
      drums.loop();
      } else {
        drums.pause();
      }
    } else {
         console.log('oops, be patient as the drums load...');
    }
  }
}

function canvasPressed() {
  let rowClicked = floor(6 * mouseY/height);
  let indexClicked = floor(16 * mouseX / width);
  
  if (rowClicked === 0) {
    console.log('first row' + indexClicked);
    hhPat[indexClicked] = +!hhPat[indexClicked];
  } else if (rowClicked === 1) {
    console.log('second row' + indexClicked);
    snarePat[indexClicked] = +!snarePat[indexClicked];
  } else if (rowClicked === 2) {
    console.log('third row' + indexClicked);
    kickPat[indexClicked] = +!kickPat[indexClicked];
  } else if (rowClicked === 3) {
    console.log('fourth row' + indexClicked);
    shakerPat[indexClicked] = +!shakerPat[indexClicked];
  } else if (rowClicked === 4) {
    console.log('fifth row' + indexClicked);
    ohPat[indexClicked] = +!ohPat[indexClicked];
  } else if (rowClicked === 5) {
    console.log('sixth row' + indexClicked);
    fxPat[indexClicked] = +!fxPat[indexClicked];
  }
  drawMatrix();
}

function drawMatrix(){
    background(55);
    stroke("LightGreen"); //Changes color of grid
    strokeWeight(4.2); //Changes size of boxes inside grid
    fill("Lime"); //Color of dot inside of box in
   
    for (let i = 0; i< beatLength+1; i++){
        line(i*cellWidth, 0, i* cellWidth, height);
    }
    for (let i =0; i< 7 ; i++){
        line(0, i*height/6, width, i*height/6);
    }
    
    noStroke();
    for (let i =0; i < beatLength; i++) {
        if(hhPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/12, 10);
    }
        if(snarePat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/4, 10);
    }
        if(kickPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/2.5, 10);
    }
        if(shakerPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/1.7, 10);
    }
        if(ohPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/1.35, 10);
    }
        if(fxPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/1.1, 10);
    }
  }
}

function sequence(time, beatIndex) {
  // console.log(beatIndex);
  setTimeout(() => {
  drawMatrix();
  drawPlayhead(beatIndex);  
  }, time*1000); //time is in units of seconds
}

function drawPlayhead(beatIndex) {
  stroke('purple'); //changes color of moving column
  fill(255, 0, 0, 30); //fourth value transparency
  rect((beatIndex-1) * cellWidth, 0, cellWidth, height);
}
