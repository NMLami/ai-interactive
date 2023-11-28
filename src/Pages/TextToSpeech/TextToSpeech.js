import React, { useState, useRef , useEffect} from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Navigation from '../Shared/Navigation/Navigation';


const TextToSpeech = () => {

    // const {
    //     transcript,
    //     listening,
    //     resetTranscript,
    //     browserSupportsSpeechRecognition
    //   } = useSpeechRecognition();
    

    //   if (!browserSupportsSpeechRecognition) {
    //     return <span>Browser doesn't support speech recognition.</span>;
    //   }

    const [isRecording, setRecording] = useState(false);
    const [audioData, setAudioData] = useState([]);
    const [language, setLanguage] = useState("en");

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is:', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is:', recordedBlob);
    console.log("audioData", recordedBlob.blob)

    const formData = new FormData();
    formData.append('file', recordedBlob.blob);
    formData.append('lang', language );
    console.log("API HIT")
    console.log("audioData API", recordedBlob.blob)

    try {
     fetch('http://localhost:8000/answer', {
        method: 'POST',
        body: formData,
      }).then(res => res.json())
      .then(data => console.log(data))
      
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };


//   const sendAudioToBackend = async (audioBlob) => {
//     const formData = new FormData();
//     formData.append('file', audioData);
//     console.log("API HIT")
//     console.log("audioData API", audioData)
//     try {
//       const response = await fetch('http://localhost:8000/answer', {
//         method: 'POST',
//         body: formData,
//       });
      
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error transcribing audio:', error);
//     }
//   };
  

    return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    <p>sjdj</p> */}
    <Navigation></Navigation>
  
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
        <h4>  Reply {
                    audioData && audioData.map(transcribe => 
                        <p>{transcribe.answer}</p>
                        )
                }
                </h4>
    </div>
    );
  };

export default TextToSpeech;