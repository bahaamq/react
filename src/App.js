import React from 'react';
import Header from './component/header.js'
import Footer from './component/footer.js'
import Main from './component/main.js'


class App extends React.Component
{
    render(){
      return (
<div style={{textAlign: 'center'}}>
       <Header />
       <Main />
       <Footer />
       </div>
      )}
}


export default App;
