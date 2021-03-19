import React from 'react';

const DispOut=(props)=>{

    const delClicke=(e)=>{
        e.preventDefault();
        props.deleteitem(props.id);
    }



    return(
        <>
        
        <p key={props.key}>{props.result} </p>
        <button onClick={delClicke}>delete</button>
        
        
        </>
    )
}
export default DispOut;