import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          numberOfPets: 0,
        }
      }
    
      increaseNumberOfPets = () => {
        this.setState({
          numberOfPets: this.state.numberOfPets + 1,
        })
      }
    

    render(){
        return (
          
         
      <div style={{display : 'inline-flex', textAlign : 'center' }}>
 

    <Card style={{ width: '18rem' }}>
    <h2> {this.props.title} </h2> 

  <Card.Img variant="top" src ={this.props.imgUrl} />

  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
   {this.props.description}
    </Card.Text>
    <Button variant="primary" onClick={this.increaseNumberOfPets} >Counter</Button>
  
    <p>😸: {this.state.numberOfPets}</p>

  </Card.Body>

  </Card>

  </div>
        )}
}

export default HornedBeasts;