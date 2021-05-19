  
import React from 'react';
import { Form, Button } from 'react-bootstrap/';

class FilterData extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            num:0,
        }
    }



    updateHornsNum = (event)=> 
    {
      
       this.setState({
        num : event.target.value
   
      })


    }

    submitHour=()=>
    {
    this.props.filterData(this.state.num)

    //console.log(this.state.num)
    }


    render(){
        return(
<>
<Form onClick={this.submitHour}>

<Form.Group controlId="exampleForm.SelectCustomHtmlSize">
<Form.Label> HOW YOU OREFER PHOTOS WITH HOW MANY HORNS </Form.Label>
<Form.Control as="select" custom name='updateHornsNum' onChange={this.updateHornsNum}>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3' >3</option>
<option value='wow'>wow</option>

</Form.Control>
</Form.Group>

</Form>


</>
        )
    }
}
export default FilterData;
