import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class CardItem extends Component {
    render() {
      return(
        <div>
            <Card style={{ width: '33rem', padding: '10px', margin: '10px', alignItems: 'center'}}>
            <Card.Img variant="top" ssrc="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
          );
      }
  }
  
  export default CardItem;