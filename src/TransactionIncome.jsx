import React,{useState} from 'react';
import Output from './Output';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

const TransactionIncome=(props)=>{
    // const[incomeout,setincomeout]=useState([]);


        const delClick=(e)=>{
            e.preventDefault();
            props.deleteitem(props.id);
        }
  
        // const dataa=props.result;
        // setincomeout(dataa);
        // const pro=incomeout;

    return(<>



























<div className="container-8 r1 ">

<div classname="row ">
    <div className="col-8 offset-1  ">
 {/* <p>{time,date}</p> */}
    
    
    <dl className="op">
    <dt className="op" style={{color:"blue"}}> { props.nameofel}</dt>
    <dd className="op ml-3" style={{color:"blueviolet"}}>  {props.amount}</dd> 
        </dl>
<Button className="mr-1"   color="secondary"  onClick={delClick}>
      <DeleteOutlineIcon/> </Button> 
       
        </div>

 

            {/* <Button  variant="contained" color="secondary" onClick={delClick}><DeleteOutlineIcon/> </Button> */}
                 

</div>
</div>







    </>)
}
export default TransactionIncome;