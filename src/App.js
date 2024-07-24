import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import useSound from 'use-sound';
import tom_1 from "./Sounds/tom-1.mp3";
import tom_2 from "./Sounds/tom-2.mp3";
import bass_drum from "./Sounds/kick-bass.mp3";
import crash from "./Sounds/crash.mp3";
import snare from "./Sounds/snare.mp3";
import floor_tom from './Sounds/floor-tom.mp3';
import ride from './Sounds/ride-cymbal.mp3';

function App() {
  var [Tom1] = useSound(tom_1);
  var [Tom2] = useSound(tom_2);
  var [Bass] = useSound(bass_drum);
  var [Crash] = useSound(crash);
  var [Snare] = useSound(snare);
  var [Floor_Tom] = useSound(floor_tom);
  var [Ride] = useSound(ride);

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);
      event.preventDefault();
      var activeButton = document.querySelector(".me");

      switch (event.key) {
        case 'f':
          activeButton = document.querySelector("#tom1");
          Tom1();
          break;

        case 'j':
          activeButton = document.querySelector("#tom2");
          Tom2();
          break;

        case 'd':
          activeButton = document.querySelector("#floor-tom");
          Floor_Tom();
          break;

        case 'k':
          activeButton = document.querySelector("#snare-drum");
          Snare();
          break;

        case 's':
          activeButton = document.querySelector("#ride-cymbal");
          Ride();
          break;

        case 'l':
          activeButton = document.querySelector("#crash-cymbal");
          Crash();
          break;

        case 'a':
          activeButton = document.querySelector("#bass-drum");
          Bass();
          break;

        case 'F':
          activeButton = document.querySelector("#tom1");
          Tom1();
          break;

        case 'J':
          activeButton = document.querySelector("#tom2");
          Tom2();
          break;

        case 'D':
          activeButton = document.querySelector("#floor-tom");
          Floor_Tom();
          break;

        case 'K':
          activeButton = document.querySelector("#snare-drum");
          Snare();
          break;

        case 'S':
          activeButton = document.querySelector("#ride-cymbal");
          Ride();
          break;

        case 'L':
          activeButton = document.querySelector("#crash-cymbal");
          Crash();
          break;

        case 'A':
          activeButton = document.querySelector("#bass-drum");
          Bass();
          break;

        default: console.log(event.key);
      }
      activeButton.classList.add("pressed");

      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className="App">
      <div className='title'>
        <div className='drumkit1' />
        <h1>DRUM KIT</h1>
        <div className='drumkit2' />
      </div>

      <div className='info' id='tom1_info' onClick={Tom1}><h1>TOM-LEFT [F]</h1></div>
      <div className='drum' id='tom1' onClick={Tom1} />

      <div className='info' id='tom2_info' onClick={Tom2}><h1>TOM-RIGHT [J]</h1></div>
      <div className='drum' id='tom2' onClick={Tom2} />

      <div className='info' id='floor-tom_info' onClick={Floor_Tom}><h1>FLOOR-TOM [D]</h1></div>
      <div className='drum' id='floor-tom' onClick={Floor_Tom} />

      <div className='info' id='snare-drum_info' onClick={Snare}><h1>SNARE-DRUM [K]</h1></div>
      <div className='drum' id='snare-drum' onClick={Snare} />

      <div className='info' id='bass-drum_info' onClick={Bass}><h1>BASS-DRUM [A]</h1></div>
      <div className='drum' id='bass-drum' onClick={Bass} />

      <div className='info' id='ride-cymbal_info' onClick={Ride}><h1>RIDE-CYMBAL [S]</h1></div>
      <div className='drum' id='ride-cymbal' onClick={Ride} />

      <div className='info' id='crash-cymbal_info' onClick={Crash}><h1>CRASH-CYMBAL [L]</h1></div>
      <div className='drum' id='crash-cymbal' onClick={Crash} />

      <div className='me'>
        <h1>TINESH WARKE</h1>
      </div>
    </div>
  );
}

export default App;
