import React from 'react';
import HornedBeasts from './HornedBeasts.js'
class Main extends React.Component
{


    render(){
        return (

           <>
            {this.props.data.map((item ,index) =>{
                return (
                    <HornedBeasts
                        title={item.title}
                        imgUrl={item.image_url}
                        description= {item.description}
                        key={index}
                    />

    
                    )
                })}
              </>

        )}
}

export default Main