import React, { useState, useEffect } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "./Playquiz.css"

const quizVideo = "panda-select-one.mp4"



const Playquiz = () => {

        const [quiz, setQuizes] = useState({
            "random_question": {
                "correctOption": " ",
                "option1": " ",
                "option2": " ",
                "question": " "
            }
        })

        const [showModal, setShowModal] = useState(false);
        const [answer, setAnswer] = useState(" ");

        const handleClose = () => setShowModal(false);
        const handleShow = () => setShowModal(true);
      

    useEffect(() => {
        fetch('http://localhost:5000/random_question')
            .then(res => res.json())
            .then(data => setQuizes(data));
    }, [])
   
    console.log(quiz)

    const handleClick = (event)=>{
        console.log(event)
        if(event["quizAnswer"] === event["selectedAnswer"]){
            console.log(event["quizAnswer"])
            setAnswer("Wohooo! Great Answer")
        }else{
            setAnswer("Oh no!!! Try another one")
        }
        
        handleShow()
    }

    const newQuestion = ()=>{

        fetch('http://localhost:5000/random_question')
        .then(res => res.json())
        .then(data => setQuizes(data));

        handleClose()

    }
    const [currentVideoQuiz] = useState(quizVideo);


    return (
        <div >
            <Navigation></Navigation>
            <Container  >
      <Row id= "quizcont" > 
        {/* First Card */}
        <Col>
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src= { quiz.random_question['option1']} />
            <Card.Body>
              <Card.Title>Option A</Card.Title>
              <Button variant="primary" onClick= {() => handleClick({"quizAnswer":quiz.random_question['correctOption'],"selectedAnswer":"option1"})}>Select</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col>
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{ quiz.random_question['question']}</Card.Title>
            </Card.Body>
          </Card> 
          <video
          id="videoPlayer"
          loop autoPlay controls
          src= {currentVideoQuiz}
          style={{ width: '80%', maxHeight: '400px' }}
        />   
        </Col>
        
    
       
        {/* Third Card */}
        <Col>
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={ quiz.random_question['option2']}/>
            <Card.Body>
              <Card.Title>Option B</Card.Title>
              <Button variant="primary" onClick= {() => handleClick({"quizAnswer":quiz.random_question['correctOption'],"selectedAnswer":"option2"})} >Select</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's See The Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>{answer}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newQuestion}>
            Try Another
          </Button>
        </Modal.Footer>
      </Modal>
      
        </div>
    );
};

export default Playquiz;