import React from 'react';
import Header from './component/header.js'
import Footer from './component/footer.js'
import Main from './component/main.js'
import Horneddata from './component/Horneddata.json'


class App extends React.Component
{

      constructor(props) {
            super(props);
            this.state = {
                  Horneddata: Horneddata,
            }
          }
        
    render(){
      return (
<div style={{textAlign: 'center'}}>
       <Header />
       <Main 
      data={this.state.Horneddata} //2 

       />
       
       <Footer />
       </div>
      )}
}


export default App;
