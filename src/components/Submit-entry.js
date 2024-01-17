import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Rating } from 'react-simple-star-rating'
import { useState} from 'react';
import ReactPlayer from 'react-player';


export default function GridComplexExample() {
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  const[rating, setRating] = useState(0); // sets defualt 0 rating

  const handleRating = (rate: number) => {
    setRating(rate);   // Catch Rating value reactively (re-renders)
  }
    return (
    <div>
      <ReactPlayer
                    url="https://www.youtube.com/watch?v=wKhRnZZ0cJI&pp=ygUiY2hlc3RudXRzIHJvYXN0aW5nIG9uIGFuIG9wZW4gZmlyZQ%3D%3D"
                    playing={true}
                    loop={true}
                    volume={0.5} // Adjust the volume as needed (0.0 to 1.0)
                    muted={false} // Set to true if you want the audio to start muted
                    width="0px"
                    height="0px"
            />

    <Form>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            {
              states.map(function(state) {
                return <option>{state}</option>;
              })
            }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      Rating 
      {/* plain text */}
      <br/>
      <Rating
        onClick={handleRating}
      />
      <br/> 
      <br/>
      {/* line break */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

