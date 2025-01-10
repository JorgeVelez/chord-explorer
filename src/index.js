import { transpose , note } from '@tonaljs/tonal';
import {chord} from '@tonaljs/chord';
import { entries } from '@tonaljs/chord-dictionary';
import { Howler, Howl } from 'howler';
import {WebMidi} from "webmidi";

const sound = new Howl({
    src: ['assets/piano.webm','assets/piano.mp3'],
    //piano
    sprite:{"21":[89e3,14117.73242630386],"22":[105e3,14117.73242630386],"23":[121e3,14117.73242630386],"24":[137e3,14117.73242630386],"25":[153e3,14117.73242630386],"26":[169e3,14117.73242630386],"27":[185e3,14117.73242630386],"28":[201e3,14117.73242630386],"29":[217e3,14117.73242630386],"30":[233e3,14117.73242630386],"31":[249e3,14117.73242630386],"32":[265e3,14860.77097505671],"33":[281e3,14117.73242630386],"34":[297e3,14860.77097505671],"35":[313e3,14860.77097505671],"36":[329e3,14860.77097505671],"37":[345e3,14860.77097505671],"38":[361e3,14117.73242630386],"39":[377e3,14117.73242630386],"40":[393e3,14117.73242630386],"41":[409e3,12631.65532879816],"42":[423e3,12631.65532879816],"43":[437e3,11888.616780045368],"44":[45e4,11145.578231292518],"45":[463e3,14117.73242630386],"46":[479e3,14117.73242630386],"47":[495e3,14117.73242630386],"48":[511e3,11888.616780045368],"49":[524e3,11888.616780045368],"50":[537e3,12631.65532879816],"51":[551e3,11888.616780045368],"52":[564e3,11145.57823129246],"53":[577e3,13374.693877551068],"54":[592e3,13374.693877551068],"55":[607e3,12631.65532879816],"56":[621e3,13374.693877551068],"57":[636e3,12631.65532879816],"58":[65e4,12631.65532879816],"59":[664e3,8173.424036281176],"60":[674e3,8173.424036281176],"61":[684e3,7430.385487528383],"62":[693e3,11888.616780045368],"63":[706e3,11145.57823129246],"64":[719e3,11145.57823129246],"65":[732e3,12631.65532879816],"66":[746e3,11888.616780045368],"67":[759e3,11888.616780045368],"68":[772e3,11888.616780045368],"69":[785e3,11888.616780045368],"70":[798e3,11888.616780045368],"71":[811e3,10402.539682539667],"72":[823e3,9659.501133786875],"73":[834e3,9659.501133786875],"74":[845e3,7430.385487528383],"75":[854e3,7430.385487528383],"76":[863e3,7430.385487528383],"77":[872e3,10402.539682539667],"78":[884e3,10402.539682539667],"79":[896e3,10402.539682539667],"80":[908e3,13374.693877551068],"81":[923e3,13374.693877551068],"82":[938e3,13374.693877551068],"83":[953e3,13374.693877551068],"84":[968e3,13374.693877551068],"85":[983e3,13374.693877551068],"86":[998e3,14117.73242630386],"87":[1014e3,14117.732426303746],"88":[103e4,14117.732426303746],"89":[1046e3,9659.501133786762],"90":[1057e3,9659.501133786762],"91":[1068e3,9659.501133786762],"92":[1079e3,9659.501133786762],"93":[109e4,9659.501133786762],"94":[1101e3,9659.501133786762],"95":[1112e3,12631.65532879816],"96":[1126e3,12631.65532879816],"97":[114e4,12631.65532879816],"98":[1154e3,8173.424036281176],"99":[1164e3,8173.424036281176],"100":[0,8173.42403628118],"101":[1e4,8916.46258503401],"102":[2e4,8916.46258503401],"103":[3e4,8916.46258503401],"104":[4e4,9659.501133786847],"105":[51e3,9659.501133786847],"106":[62e3,9659.501133786847],"107":[73e3,6687.346938775505],"108":[81e3,6687.346938775505]},
    //epiano
    //sprite:{"21":[27e3,14860.770975056688],"22":[43e3,14860.770975056688],"23":[59e3,14860.770975056696],"24":[75e3,14860.770975056696],"25":[91e3,14860.770975056696],"26":[107e3,14860.770975056696],"27":[123e3,14860.770975056681],"28":[139e3,14860.770975056681],"29":[155e3,14860.770975056681],"30":[171e3,14860.770975056681],"31":[187e3,14860.770975056681],"32":[203e3,14860.770975056681],"33":[219e3,14860.770975056681],"34":[235e3,14860.770975056681],"35":[251e3,14860.77097505671],"36":[267e3,14860.77097505671],"37":[283e3,14117.73242630386],"38":[299e3,14860.77097505671],"39":[315e3,14860.77097505671],"40":[331e3,14860.77097505671],"41":[347e3,14860.77097505671],"42":[363e3,14117.73242630386],"43":[379e3,14117.73242630386],"44":[395e3,14117.73242630386],"45":[411e3,14117.73242630386],"46":[427e3,14117.73242630386],"47":[443e3,14117.73242630386],"48":[459e3,14117.73242630386],"49":[475e3,14117.73242630386],"50":[491e3,14117.73242630386],"51":[507e3,14117.73242630386],"52":[523e3,14117.73242630386],"53":[539e3,12631.65532879816],"54":[553e3,14117.73242630386],"55":[569e3,14117.73242630386],"56":[585e3,14117.73242630386],"57":[601e3,14117.73242630386],"58":[617e3,14117.73242630386],"59":[633e3,12631.65532879816],"60":[647e3,11145.57823129246],"61":[66e4,11145.57823129246],"62":[673e3,11145.57823129246],"63":[686e3,8916.462585033969],"64":[696e3,8173.424036281176],"65":[706e3,9659.501133786875],"66":[717e3,10402.539682539667],"67":[729e3,11145.57823129246],"68":[742e3,10402.539682539667],"69":[754e3,10402.539682539667],"70":[766e3,11145.57823129246],"71":[779e3,10402.539682539667],"72":[791e3,9659.501133786875],"73":[802e3,8916.462585033969],"74":[812e3,8916.462585033969],"75":[822e3,8173.424036281176],"76":[832e3,8173.424036281176],"77":[842e3,8173.424036281176],"78":[852e3,7430.385487528383],"79":[861e3,6687.346938775477],"80":[869e3,6687.346938775477],"81":[877e3,6687.346938775477],"82":[885e3,6687.346938775477],"83":[893e3,5944.308390022684],"84":[9e5,5944.308390022684],"85":[907e3,5201.269841269891],"86":[914e3,5201.269841269891],"87":[921e3,4458.2312925169845],"88":[927e3,4458.2312925169845],"89":[933e3,3715.1927437641916],"90":[938e3,3715.1927437641916],"91":[943e3,2972.154195011285],"92":[947e3,2972.154195011285],"93":[951e3,2972.154195011285],"94":[955e3,2972.154195011285],"95":[959e3,2229.1156462584922],"96":[963e3,2229.1156462584922],"97":[967e3,2229.1156462584922],"98":[971e3,2229.1156462584922],"99":[975e3,2229.1156462584922],"100":[0,1486.077097505669],"101":[3e3,1486.0770975056691],"102":[6e3,1486.0770975056691],"103":[9e3,1486.0770975056691],"104":[12e3,1486.0770975056691],"105":[15e3,1486.0770975056673],"106":[18e3,1486.0770975056673],"107":[21e3,1486.0770975056673],"108":[24e3,1486.0770975056673]},
    onload() {
        console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror(e, msg) {
        console.log('Error', e, msg);
    }
});

const startNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; 
const chordQualities = ['M', 'maj7', 'maj9', 'm', 'm7', 'm9', 'dim', 'dim7', 'aug', 'A', 'A#', 'B']; 

//const startNoteSelector = document.querySelector('#start-note');
const octaveSelector = document.querySelector('#octave');
const buttons = document.querySelector('.buttons');
const roots = document.querySelector('.roots');
const intervalsInChord = document.querySelector('.intervals-in-chord');
const notesInChord = document.querySelector('.notes-in-chord');
const chordName = document.querySelector('.chord-name');
var mySynth;
var myKeyboard;

let selectedStartNote = 'C';
let selectedOctave = '2';
let selectedChord="M";

const app = {
    init() {
        WebMidi.enable()
        .then(() => this.onEnabled())
        .catch(err => console.log(err));
       // this.setupStartNotes();
        this.setupOctaves();
        this.setupButtons();
        this.setupRoots();
        this.setupEventListeners();
    },
    // setupStartNotes() {
    //     startNotes.forEach(noteName => {
    //         let noteNameOption = this.createElement('option', noteName);
    //         startNoteSelector.appendChild(noteNameOption);
    //     });
    // },
    onEnabled() {
        
        if (WebMidi.inputs.length < 1) {
          document.body.innerHTML+= "No device detected.";
        } else {
            console.log("Inputs:");
            WebMidi.inputs.forEach((device, index) => {
                //document.body.innerHTML+= `${index}: ${device.name} <br>`;
                console.log(index+":"+device.name)
              });
              console.log("Outputs:");
              WebMidi.outputs.forEach((device, index) => {
                //document.body.innerHTML+= `${index}: ${device.name} <br>`;
                console.log(index+":"+device.name)
              });
        }

        myKeyboard = WebMidi.inputs[1];
        mySynth = WebMidi.outputs[0];
        // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")

        myKeyboard.channels[1].addListener("noteon", e => {
         // document.body.innerHTML+= `${e.note.name} <br>`;
          console.log(e.note.number);
          sound.volume(0.75);
          sound.play(e.note.number.toString());
        });

      },
    setupOctaves() {
        for (let i = 1; i <= 4; i++) {
            let octaveNumber = this.createElement('option', i);
            octaveSelector.appendChild(octaveNumber);
        }
    },
    setupRoots() {
        startNotes.forEach(root => {
            let rootButton = this.createElement('button', root);
            roots.appendChild(rootButton);
            if(root==selectedStartNote)
                rootButton.style.backgroundColor = "MediumSpringGreen";
        });
        
    },
    setupButtons() {
        const chordNames = entries().map(entry => {
            return entry.aliases[0];
        }); 
        chordNames.forEach(chordName => {
            let chordButton = this.createElement('button', chordName);
            buttons.appendChild(chordButton);
            if(chordName==selectedChord)
                chordButton.style.backgroundColor = "Tomato";
        });
        
    },
    setupEventListeners() {
        // startNoteSelector.addEventListener('change', () => {
        //     selectedStartNote = startNoteSelector.value;
        // });
        octaveSelector.addEventListener('change', () => {
            selectedOctave = octaveSelector.value;
        });
        roots.addEventListener('click', (event) => {
            if (event.target.classList.contains('roots')) {
                //alert("no existe!");
                return;
            }
            this.resetRootButtons();
            event.target.style.backgroundColor = "MediumSpringGreen";
            selectedStartNote = event.target.innerText;
            this.displayAndPlayChord(selectedChord);
        });
        buttons.addEventListener('click', (event) => {
            if (event.target.classList.contains('buttons')) {
                return;
            }
            this.resetButtons();
            event.target.style.backgroundColor = "Tomato";
            console.log(event.target);
            selectedChord = event.target.innerText;
            console.log(selectedChord);
        });

        addEventListener("keydown", (event) => { 
           
            switch (event.key) {
                case "1":
                   this.changeRootButton(startNotes[0]);
                  break; 
                case "2":
                    this.changeRootButton(startNotes[1]);
                  break;
                case "3":
                    this.changeRootButton(startNotes[2]);
                  break;
                case "4":
                    this.changeRootButton(startNotes[3]);
                  break;
                case "5":
                    this.changeRootButton(startNotes[4]);
                  break;
                case "6":
                    this.changeRootButton(startNotes[5]);
                  break;
                  case "7":
                    this.changeRootButton(startNotes[6]);
                    break;
                    case "8":
                        this.changeRootButton(startNotes[7]);
                        break;
                      case "9":
                        this.changeRootButton(startNotes[8]);
                        break;
                      case "0":
                        this.changeRootButton(startNotes[9]);
                        break;
                      case "-":
                        this.changeRootButton(startNotes[10]);
                        break;
                        case "+":
                            this.changeRootButton(startNotes[11]);
                            break;
                            case "=":
                                this.changeRootButton(startNotes[11]);
                                break;
                            case "m":
                        this.changeChordButton("M");
                        break;
                        case "j":
                        this.changeChordButton("maj7");
                        break;
                        case "u":
                        this.changeChordButton("6");
                        break;
                        case "i":
                        this.changeChordButton("7");
                        break;
                        case "n":
                        this.changeChordButton("m");
                        break;
                        case "h":
                        this.changeChordButton("m7");
                        break;
                        case "y":
                        this.changeChordButton("m6");
                        break;
                        case "b":
                        this.changeChordButton("dim");
                        break;
                        case "g":
                        this.changeChordButton("dim7");
                        break;
                        case "v":
                            this.changeChordButton("aug");
                            break;
                           
                     
                default:
                  return; 
              }
        });
    },
    resetRootButtons() {
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button"); ;
        rootscollection.forEach(rootsbutton => {
            rootsbutton.style.backgroundColor = "MediumSlateBlue";
        });
    },
    resetButtons() {
        const buttonscollection = document.getElementsByClassName("buttons")[0].querySelectorAll("button"); ;
        buttonscollection.forEach(chordbutton => {
            chordbutton.style.backgroundColor = "Orange";
        });
    },
    changeRootButton(val) {
        this.resetRootButtons();
        selectedStartNote = val;
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button"); ;
        rootscollection.forEach(rootsbutton => {
            if(rootsbutton.innerText==val)
            rootsbutton.style.backgroundColor = "MediumSpringGreen";
        });
        this.displayAndPlayChord(selectedChord);
    },
    changeChordButton(val) {
        this.resetButtons();

       this.resetButtons();
       const rootscollection = document.getElementsByClassName("buttons")[0].querySelectorAll("button");
       rootscollection.forEach(rootsbutton => {
           if(rootsbutton.innerText==val)
           rootsbutton.style.backgroundColor = "Tomato";
       });
        selectedChord = val;
        console.log(selectedChord);
    },
    displayAndPlayChord(selectedChord) {
        let chordIntervals = chord(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(' - ');
        
        const startNoteWithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNoteWithOctave, val);
        });

        notesInChord.innerText = chordNotes.join(' - ');
        chordName.innerText =  chord(selectedStartNote + selectedOctave+selectedChord).name;
       
        soundEngine.play(chordNotes);
    },
    createElement(elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    }
}

const soundEngine = {
    init() {
        // const lengthOfNote = 2400;
        // let timeIndex = 0;
        // for (let i = 24; i <= 96; i++) {
        //     sound['_sprite'][i] = [timeIndex, lengthOfNote];
        //     timeIndex += lengthOfNote;
        // }
        
    },
    play(soundSequence) {

        const chordMidiNumbers = soundSequence.map(noteName => {
            return note(noteName).midi;
        });
        sound.volume(0.75);
        chordMidiNumbers.forEach(noteMidiNumber => { 
            
            sound.play(noteMidiNumber.toString());
            mySynth.playNote(noteMidiNumber, {duration: 10});
        });
    }
}

app.init();
