import React from 'react';

const Disp=(props)=>{

    const delClick=(e)=>{
        e.preventDefault();
        props.deleteitem(props.id);
    }



    return(
        <>
        
        <p key={props.key}>{props.result} </p>
        <button onClick={delClick}>delete</button>
        
        
        </>
    )
}
export default Disp;