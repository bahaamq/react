import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import hornedData from './component/hornedData.json';
import SelectedBeast from './component/SelectedBeast'


class App extends React.Component{

      constructor(props){
        super(props)
        this.state={
            hornedData : hornedData,
          selectedAnimal: {},
          show:false
        }
      }
    
    
    
    
    
    
      
    
      OurSelected=(title)=> {
        let foundObj = hornedData.find(element => {      
          if (element.title === title) {
                    return element;
                  }})
        
                  this.setState({
                    show:true,
                    selectedAnimal: foundObj,
                  })
                }
                
    
    
        handleClose = () =>{
          this.setState({
            show:false,
          })
        }
    
    
    
    
        
        handleShow = () => {
          this.setState({
            show:true,
          })
        }
    
      render(){
        return(
          <>
          <Header/>
          <Main
           hornedData={this.state.hornedData}
           OurSelected={this.OurSelected}
           handleClose={this.handleClose}
           
          />
          <Footer/>
            <SelectedBeast
            // handleShow={this.handleShow}
            show={this.state.show}
            handleClose={this.handleClose}
            selectedAnimal={this.state.selectedAnimal}
            />
    
          </>
        )
      }
    
    }
    
    
    export default App;