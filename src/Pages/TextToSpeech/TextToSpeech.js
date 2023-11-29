import React, { useState, useRef , useEffect} from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Button, Typography, Paper, Slider } from '@mui/material';
import { useHistory } from 'react-router-dom';

const kidsgif = "/kids-answer.gif"
const midsgif = "/mid-answer.gif"
const seniorgif = "/senior-answer.gif"

const TextToSpeech = () => {

    const {id}  = useParams();
    const grp = id // GRP is to set the range of age
    console.log(grp) 
    const history = useHistory();
  

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
    const [audioUrl, setAudioUrl] = useState(null);
    const [language, setLanguage] = useState("en");
    const [currentVideo, setVideoUrl] = useState("/kids-answer.gif");
  
    

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
    console.log(language)
    const formData = new FormData();
    formData.append('file', recordedBlob.blob);
    formData.append('lang', language );
    formData.append('grp', grp );
    console.log("API HIT")
    console.log("audioData API", recordedBlob.blob)

    try {
     fetch('http://localhost:8000/answer', {
        method: 'POST',
        body: formData,
      }).then(async(response) => {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
       
      })
      .then(data => console.log(typeof data) )
      
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

const goToSwedish = () => {
    // Navigate to the desired URL when the button is clicked
    history.push(`/interactive-friend/swedish/${grp}`);
  };



    return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    <p>sjdj</p> */}
    <Navigation></Navigation>
    <div class=" mx-5 d-flex justify-content-center mt-4">
    <Button className='mx-2' variant="contained" color="primary" onClick={goToSwedish}>
          Ask In Swedish
          </Button>
    </div>

      <ReactMic
        record={isRecording}
        className="sound-wave mic"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#64A8A6"
      />
      <div>
      <h4>Welcome!!! Ask Your Question By Touching The Start Button</h4>
      </div>
     <div class="controls mx-5 d-flex justify-content-center mt-4">
        <button href="#" class="button lightbg-blue clearfix mx-5" onClick={startRecording} >
        <span>
            Start</span>

        </button>

        <button href="#" class="button lightbg-blue clearfix" onClick={stopRecording} >
        <span>
            Stop
        </span>

        </button>
        </div>
        {/* <h4>  Reply {
                    audioData && audioData.map(transcribe => 
                        <p>{transcribe.answer}</p>
                        )
                }
                </h4> */}
  

         {audioUrl && (
        <div class="media">
           <img style={{ width: '18rem', margin: '10px' }}
              src={
                currentVideo && grp === "kid"
                  ? currentVideo
                  : grp === "senior"
                  ? seniorgif
                  : midsgif
              }
          />
          <audio autoPlay controls 
          style={{ display: "none"}}
          >
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          
          </div>
      )}
        
 
    </div>

    
    );
  };

export default TextToSpeech;