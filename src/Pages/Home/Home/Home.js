import React, {useState, useRef, useEffect} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { useHistory } from 'react-router-dom';
import { Container, Button, Typography, Paper, Slider } from '@mui/material';
import Services from '../Services/Services';
import "./Home.css"

const videosEnglish = "Intro-panda-new.mp4"
const videosSwedish = "swedish-intro.mp4"


const Home = () => {

    const [currentVideo, setCurrentVideo] = useState(videosEnglish);

    const history = useHistory();
 
   const changeVideo = (event)=>{
    if(event == "sv"){
        setCurrentVideo(videosSwedish)
    }else{
        setCurrentVideo(videosEnglish)
    }
    
   }

   const handlejuniorClick = () => {
    // Navigate to the desired URL when the button is clicked
    history.push('/interactive-friend/kid');
  };

   const handleMidClick = () => {
    // Navigate to the desired URL when the button is clicked
    history.push('/interactive-friend/mid');
  };

   const handleSeniorClick = () => {
    // Navigate to the desired URL when the button is clicked
    history.push('/interactive-friend/senior');
  };



    return (
        <div>
            <Navigation></Navigation>

            <div id="changeLang">
            <Button className='mx-2' onClick={()=>changeVideo("sv")} variant="contained">Swedish</Button>
            <Button className='mx-2' onClick={()=>changeVideo("en")} variant="contained">English</Button>
            </div>
    
    <Container  maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography id="videoContainerText" variant="h4" align="center" gutterBottom>
        Welcome To Exploratorium Science Center
      </Typography>
      <Paper elevation={3} id="videoContainer" style={{ padding: '20px', textAlign: 'center' }}>
        <video
          id="videoPlayer"
          loop autoPlay controls
          src= {currentVideo}
          style={{ width: '100%', maxHeight: '400px' }}
        />
        <div style={{ marginTop: '20px' }}>
          <Button className='mx-2' variant="contained" color="primary" onClick={handlejuniorClick}>
          Junior Dynamo
          </Button>
          <Button className='mx-2' variant="contained" color="primary" onClick={handleMidClick} >
          Midlife Marvel
          </Button>

          <Button className='mx-2' variant="contained" color="primary" onClick={handleSeniorClick}>
          Senior Sage
          </Button>
        </div>
      </Paper>
    </Container>
 
           
        </div>
    );
};

export default Home;