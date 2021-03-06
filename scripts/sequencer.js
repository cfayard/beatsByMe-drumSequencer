let hh, snare2, kick808, midBassSeq, trumpet, subBass; //Instrument. serve as container that holds a sound source
let hhPat, snarePat, kick808Pat, midBassSeqPat, trumpetPat, subBassPat; //Instrument Pattern. array of numbers we can manipulate to make beats
let hPhrase, sPhrase, kPhrase, midBassSeqPhrase, trumpetPhrase, subBassPhrase; //Instrument Phrase. defines how the instrument pattern is interpreted.
let drums; //Part. we will attach the phrase to the part, which will serve as our transport to drive the phrase
let bpmCTRL;
let beatLength;
let cellWidth;
let canvas;
let sequncerPattern;
let cursorPos;

function setup() {
  canvas = createCanvas(1100, 500);
  canvas.mousePressed(canvasPressed);
  beatLength = 16;
  cellWidth = width/beatLength;
  cursorPos = 0;

  
  kick808 = loadSound('assets/808kick.wav', () => {});
  // kick808 = playKick();
  snare2 = loadSound('assets/Snare.wav', () => {});
  // snare2 = playSnare();
  hh = loadSound('assets/hat.wav', () => {});
  // hh = playHiHat();
  midBassSeq = loadSound('assets/115525__ongitak__bass-stab-11.wav', () => {});
  // midBassSeq = playChirp();
  trumpet = loadSound('assets/waterDrop.wav', () => {});
  // trumpet = playTrump();
  subBass = loadSound('assets/410149__screamstudio__kick-drum.wav', () => {});
  // subBass = playLowBass();
    
kick808Pat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
snarePat= [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
hhPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
midBassSeqPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
trumpetPat= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
subBassPat= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
sequencerPattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  kPhrase = new p5.Phrase('kick808', (time) => {
    kick808.play(time)
  }, kick808Pat);
  sPhrase = new p5.Phrase('snare2', (time) => {
    snare2.play(time)
  }, snarePat);
  hPhrase = new p5.Phrase('hh', (time) => {
    hh.play(time)
  }, hhPat);
    midBassSeqPhrase = new p5.Phrase('midBassSeq', (time) => {
    midBassSeq.play(time)
  }, midBassSeqPat);
    trumpetPhrase = new p5.Phrase('trumpet', (time) => {
    trumpet.play(time)
  }, trumpetPat);
    subBassPhrase = new p5.Phrase('subBass', (time) => {
    subBass.play(time)
  }, subBassPat);

  drums = new p5.Part();

  drums.addPhrase(kPhrase);
  drums.addPhrase(sPhrase);
  drums.addPhrase(hPhrase);
  drums.addPhrase(midBassSeqPhrase);
  drums.addPhrase(trumpetPhrase);
  drums.addPhrase(subBassPhrase);
  drums.addPhrase('seq', sequence, sequencerPattern);
 
  bpmCTRL = createSlider(60, 170, 80, 1);
  bpmCTRL.position("fixed", 500, 500); //Placement of slider
  bpmCTRL.input(() => {drums.setBPM(bpmCTRL.value())});
  drums.setBPM('90');
  
  drawMatrix();
  // const button1 = document.querySelector(".js-restart");
  // button1.addEventListener("click", ()=> {
  //   drums.loop();
  // })
}  

function keyPressed() {
  if (key === " ") {
    if (hh.isLoaded() && snare2.isLoaded() && kick808.isLoaded() && midBassSeq.isLoaded() && trumpet.isLoaded() && subBass.isLoaded()) {
      if (!drums.isPlaying) { 
        drums.metro.metroTicks = 0; //makes animator start over at beginning after pressing spacebar
      drums.loop();
      } else {
        drums.pause();
      }
    } else {
         console.log('oops, be patient as the drums load...');
    }
    getAudioContext().resume() 
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
    kick808Pat[indexClicked] = +!kick808Pat[indexClicked];
  } else if (rowClicked === 3) {
    console.log('fourth row' + indexClicked);
    midBassSeqPat[indexClicked] = +!midBassSeqPat[indexClicked];
  } else if (rowClicked === 4) {
    console.log('fifth row' + indexClicked);
    trumpetPat[indexClicked] = +!trumpetPat[indexClicked];
  } else if (rowClicked === 5) {
    console.log('sixth row' + indexClicked);
    subBassPat[indexClicked] = +!subBassPat[indexClicked];
  }
  drawMatrix();
}

function drawMatrix(){
    background(100);
    stroke("LightGreen"); //Changes color of grid
    strokeWeight(4.2); //Changes size of boxes inside grid
    fill("red"); //Color of dot inside of box in
   
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
        if(kick808Pat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/2.5, 10);
    }
        if(midBassSeqPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/1.7, 10);
    }
        if(trumpetPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/1.35, 10);
    }
        if(subBassPat[i] === 1) {
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
  stroke('rgba(131, 11, 39, 0.461)'); //changes color of moving column
  fill(255, 0, 0, 30); //fourth value transparency
  rect((beatIndex-1) * cellWidth, 0, cellWidth, height);
}

// function touchStarted() {
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//   }
// }