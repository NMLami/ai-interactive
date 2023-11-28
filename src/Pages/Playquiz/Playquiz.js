import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const Playquiz = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
  
    const handleOption1Change = (event) => {
      setSelectedOption1(event.target.value);
    };
  
    const handleOption2Change = (event) => {
      setSelectedOption2(event.target.value);
    };
  
    const handleSubmit = () => {
      // Handle the submission logic here
      console.log('Selected Options:', selectedOption1, selectedOption2);
    };

    
    return (
        <div>
            <Navigation></Navigation>
            (
    <Container>
      <Typography variant="h4" gutterBottom>
        Quiz
      </Typography>

      <div>
        <img src="path/to/image1.jpg" alt="Option 1" style={{ width: '100%', maxWidth: '400px' }} />
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="quiz"
            name="quiz1"
            value={selectedOption1}
            onChange={handleOption1Change}
          >
            <FormControlLabel value="optionA" control={<Radio />} label="Option A" />
            <FormControlLabel value="optionB" control={<Radio />} label="Option B" />
            <FormControlLabel value="optionC" control={<Radio />} label="Option C" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <img src="path/to/image2.jpg" alt="Option 2" style={{ width: '100%', maxWidth: '400px' }} />
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="quiz"
            name="quiz2"
            value={selectedOption2}
            onChange={handleOption2Change}
          >
            <FormControlLabel value="optionX" control={<Radio />} label="Option X" />
            <FormControlLabel value="optionY" control={<Radio />} label="Option Y" />
            <FormControlLabel value="optionZ" control={<Radio />} label="Option Z" />
          </RadioGroup>
        </FormControl>
      </div>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
        </div>
    );
};

export default Playquiz;