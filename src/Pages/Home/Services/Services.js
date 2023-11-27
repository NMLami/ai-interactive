import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Service from '../Service/Service';


const baseUrl = require('./../../../Static/env.json').baseUrlNew;

const Services = () => {
    // const [services, setServices] = useState([])

    // useEffect(() => {
    //     fetch(baseUrl+'/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
   
    return (
        <Container>
        <Row>   
            <p>abbsbs</p>
        {/* {
                    services && services.map(service => 
                        <Service
                            key={services.id}
                            service={service}
                        ></Service>)
                } */}
        
        </Row>
    </Container>
    );
};

export default Services;