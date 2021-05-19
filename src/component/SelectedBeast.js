import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class SelectedBeast extends React.Component{


    render(){
        
        return(
            
            <div>
         <Modal show={this.props.shows} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedAnimal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.selectedAnimal.image_url} alt={this.props.selectedAnimal.title} style={{display : 'inline-flex', textAlign : 'center' , width: '18rem' }}/></Modal.Body>
        <Modal.Body>{this.props.selectedAnimal.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
 
        )
    }
}

export default SelectedBeast;