import { transpose , note } from '@tonaljs/tonal';
import {chord} from '@tonaljs/chord';
import { entries } from '@tonaljs/chord-dictionary';
import { Howler, howl } from 'howler';

const sound = new Howl({
    src: ['assets/pianosprite.mp3'],
    onload() {
        console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror(e, msg) {
        console.log('Error', e, msg);
    }
});

const startNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; 

//const startNoteSelector = document.querySelector('#start-note');
const octaveSelector = document.querySelector('#octave');
const buttons = document.querySelector('.buttons');
const roots = document.querySelector('.roots');
const intervalsInChord = document.querySelector('.intervals-in-chord');
const notesInChord = document.querySelector('.notes-in-chord');

let selectedStartNote = 'C';
let selectedOctave = '2';
let selectedChord="";

const app = {
    init() {
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
        });
        
    },
    setupButtons() {
        const chordNames = entries().map(entry => {
            return entry.aliases[0];
        }); 
        chordNames.forEach(chordName => {
            let chordButton = this.createElement('button', chordName);
            buttons.appendChild(chordButton);
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
            this.resetButtons();
            event.target.style.backgroundColor = "MediumSpringGreen";
            selectedStartNote = event.target.innerText;
        });
        buttons.addEventListener('click', (event) => {
            if (event.target.classList.contains('buttons')) {
                return;
            }
            selectedChord = event.target.innerText;
            console.log(selectedChord);
            this.displayAndPlayChord(selectedChord);
        });

        addEventListener("keydown", (event) => { 
           
            switch (event.key) {
                case "a":
                   this.changeRootButton(startNotes[0]);
                    
                  break; 
                case "w":
                    this.changeRootButton(startNotes[1]);
                  break;
                case "s":
                    this.changeRootButton(startNotes[2]);
                  break;
                case "e":
                    this.changeRootButton(startNotes[3]);
                  break;
                case "d":
                    this.changeRootButton(startNotes[4]);
                  break;
                case "f":
                    this.changeRootButton(startNotes[5]);
                  break;
                  case "t":
                    this.changeRootButton(startNotes[6]);
                    break;
                    case "g":
                        this.changeRootButton(startNotes[7]);
                        break;
                      case "y":
                        this.changeRootButton(startNotes[8]);
                        break;
                      case "h":
                        this.changeRootButton(startNotes[9]);
                        break;
                      case "u":
                        this.changeRootButton(startNotes[10]);
                        break;
                      case "j":
                        this.changeRootButton(startNotes[11]);
                        break;
                     
                default:
                  return; 
              }
        });
    },
    resetButtons() {
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button"); ;
        rootscollection.forEach(rootsbutton => {
            rootsbutton.style.backgroundColor = "MediumSlateBlue";
        });
    },
    changeRootButton(val) {
        this.resetButtons();
        selectedStartNote = val;
        const rootscollection = document.getElementsByClassName("roots")[0].querySelectorAll("button"); ;
        rootscollection.forEach(rootsbutton => {
            if(rootsbutton.innerText==val)
            rootsbutton.style.backgroundColor = "MediumSpringGreen";
        });
    },
    displayAndPlayChord(selectedChord) {
        let chordIntervals = chord(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(' - ');
        
        const startNoteWithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNoteWithOctave, val);
        });
        notesInChord.innerText = chordNotes.join(' - ');
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
        const lengthOfNote = 2400;
        let timeIndex = 0;
        for (let i = 24; i <= 96; i++) {
            sound['_sprite'][i] = [timeIndex, lengthOfNote];
            timeIndex += lengthOfNote;
        }
        
    },
    play(soundSequence) {

        const chordMidiNumbers = soundSequence.map(noteName => {
            return note(noteName).midi;
        });
        sound.volume(0.75);
        chordMidiNumbers.forEach(noteMidiNumber => {
            
            sound.play(noteMidiNumber.toString());
        });
    }
}

app.init();
