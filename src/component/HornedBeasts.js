import React from 'react';


class HornedBeasts extends React.Component
{
    render(){
        return (
        <div>
      <h2> {this.props.title} </h2> 
       <img src ={this.props.imageUrl} alt=''></img>
   <h6>    {this.props.desc} </h6>

         </div>
        )}
}

export default HornedBeasts;