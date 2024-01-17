import React from 'react';
import ReactPlayer from 'react-player';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



export default function LightFinder() { 
    // export default allows another file to access this Object elsewhere (somewhat like a return statement but not inside a method)
    return (
        <div>
            <h1> Find Lights near you!</h1> 
            <Form>

            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
                
                <br/>

                <Button variant="primary" type="submit">
                Submit
                </Button>

            </Form>
           
            
            <ReactPlayer
                    url="https://www.youtube.com/watch?v=PhKVSZsRxQM"
                    playing={true}
                    loop={true}
                    volume={0.5} // Adjust the volume as needed (0.0 to 1.0)
                    muted={false} // Set to true if you want the audio to start muted
                    width="0px"
                    height="0px"
            />
        </div>
    )
}