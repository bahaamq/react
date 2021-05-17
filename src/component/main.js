import React from 'react';
import HornedBeasts from './HornedBeasts.js'
import Horneddata from './Horneddata.json'
class Main extends React.Component
{


    render(){
        return (

           <>
            {Horneddata.map((item ,index) =>{
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