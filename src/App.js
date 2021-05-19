import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import hornedData from './component/hornedData.json';
import SelectedBeast from './component/SelectedBeast'
import FilterData from './component/FilterData';


class App extends React.Component{

      constructor(props){
        super(props)
        this.state={
            hornedData : hornedData,
          selectedAnimal: {},
          show:false,
        num:0,
        filteredArray:hornedData
        }
      }
      
    
      OurSelected=(title)=> {
        let foundObj = hornedData.find(element => {      
          if (element.title === title) {
                    return element;
                  }})
        
                  this.setState({
                    show:true,
                    selectedAnimal: foundObj
                  })
                }

                filterData=(num)=> {
                  let newArrayv = hornedData.filter((element)=>
                  {

        if (element.horns==num)
                      {
                        // console.log(element.horns)

                        return element
                       
                      }
                  })

  
                 this.setState({
                  num : this.state.num,
                  filteredArray:newArrayv
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
          <FilterData   
          filterData={this.filterData}
          />

          <Main
          filterDataNum={this.state.num}
          hornedData={this.state.filteredArray}
           OurSelected={this.OurSelected}
           handleClose={this.handleClose}
           
          />
          <Footer/>
            <SelectedBeast
            // handleShow={this.handleShow}
            shows={this.state.show}
            handleClose={this.handleClose}
            selectedAnimal={this.state.selectedAnimal}
            />
    
          </>
        )
      }
    }
    
    export default App;