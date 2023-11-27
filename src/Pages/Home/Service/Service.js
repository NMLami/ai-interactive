import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Service = (props) => {
    // const {id, name, Provider}= props.service

    // let srcPic ='';
    // if(name == "EC2"){
    //   srcPic ='https://i.ibb.co/zHz0wtt/ec2-pic.jpg';
    // }else if(name == "S3"){
    //   srcPic='https://i.ibb.co/pxSwH4b/s3-pic.jpg'
    // }
  



    return (
      <div><p>abcbcb</p></div>
      //   <Col xs={6} md={4}>
      //   <Card style={{ width: "18rem", marginTop: "10px" }}>
      //     <Card.Img
      //       variant="top"
      //       src={srcPic}
      //     />
      //     <Card.Body>
      //       <Card.Title>Service {name}</Card.Title>
      //     </Card.Body>
      //     {/* <ListGroup variant="flush">
      //       <ListGroup.Item><DeviceThermostatIcon/>{temp.toFixed(2)}°C<span></span> <WbSunnyIcon />{humidity} </ListGroup.Item> */}
      //       {/* <ListGroup.Item>Humidity : </ListGroup.Item> */}
      //       {/* <ListGroup.Item>Pressure: {pressure}</ListGroup.Item> */}
      //       {/* <ListGroup.Item>Smoke: {smoke ? "Yes" : "No"}</ListGroup.Item> */}
      //       {/* <ListGroup.Item>Sound: {sound}</ListGroup.Item> */}
      //     {/* </ListGroup> */}
      //     <Card.Body style={{}}>
      //       <Link to={`/services/${name}`}>
      //         <Button className="btn-info">Enter Service</Button>
      //       </Link>
      //     </Card.Body>
      //   </Card>
      // </Col>
    );
};

export default Service;