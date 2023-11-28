import React, { useState, useRef, useEffect } from 'react';
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
  const [audioUrl, setAudioUrl] = useState(null);
  const [currentVideo, setVideoUrl] = useState("panda.gif");
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
    formData.append('lang', "en");
    formData.append('grp', "kid");
    console.log("API HIT")
    console.log("audioData API", recordedBlob.blob)

    try {
      fetch('http://localhost:8000/answer', {
        method: 'POST',
        body: formData,
      }).then(async (response) => {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setVideoUrl("panda.gif")
      })
        .then(data => console.log(typeof data))

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
        className="sound-wave mic"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#64A8A6"
      />
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
          <audio autoPlay controls >
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <img
            src={currentVideo}
          /></div>
      )}


    </div>


  );
};

export default TextToSpeech;