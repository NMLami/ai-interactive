import React, {useState, useRef, useEffect} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

import { Container, Button, Typography, Paper, Slider } from '@mui/material';
import Services from '../Services/Services';


const videosEnglish = "panda-intro-english.mp4"
const videosSwedish = "swedish-intro.mp4"

const getLanguage = () => localStorage.getItem('lang');

const Home = () => {

    const [currentVideo, setCurrentVideo] = useState(videosEnglish);
 
   const changeVideo = ()=>{
    setCurrentVideo(videosSwedish)
   }
    return (
        <div>
            <Navigation></Navigation>
            <Button className='mx-2' onClick={changeVideo} variant="danger">Swedish</Button>
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Video Carousel
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <video
          id="videoPlayer"
          loop autoPlay controls 
          src= {currentVideo}
          
          style={{ width: '100%', maxHeight: '400px' }}
        />
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" >
            Kids
          </Button>
          <Button variant="contained" color="primary" >
            Midlle Age
          </Button>

          <Button variant="contained" color="primary" >
            Senior
          </Button>
        </div>
      </Paper>
    </Container>

           
           
        </div>
    );
};

export default Home;