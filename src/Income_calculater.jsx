import React,{useState,createContext, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import {red} from '@material-ui/core/colors/red';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TransactionExpense from './TransactionExpense';
import TransactionIncome from './TransactionIncome';
import GooglePie from './GooglePie';
const Income_calculater=()=>{

    const[state2,setstate2]=useState(false);
    const[state3,setstate3]=useState(false);
    const[col,setcol]=useState("primary");
    const[col1,setcol1]=useState("primary");
    const  TransHistory2=()=>{
    if(state2==false){
      setcol("secondary");
    setstate2(true);
    }
    else{
      setcol("primary");
      setstate2(false);
    }
  }



  const  TransHistory1=()=>{
    if(state3==false){
      setcol1("secondary");
    setstate3(true);
    }
    else{
      setcol1("primary");
      setstate3(false);
    }
  }













const[error,setError]=useState("");
const[error2,setError2]=useState("");  

    const[income,setIncome]=useState({
        nam:"",
        val:""
    });
    const[income2,setIncome2]=useState([]);

   
   

    let temp=0;
   

  
  

    const inputNum=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            console.log(income.val);

           setError("");
  //  
           
           
           
           
           
           


            setIncome((pre)=>{
                return {...pre,[name]:value}
                })
              
    }


   
    const submit=(e)=>{
      
            e.preventDefault();



            if (!Number(income.val)) {
              
             setError("Your amount must be a number");
            }

           
           
           
            else{
              setError("");
          setIncome2((prevalue)=>{
         return  [...prevalue,income]});
     
    }
setIncome({val:"" , nam:""});
   
  }
 
    console.log(income2);
    console.log(error);

    const deleteClick=(key)=>{
        console.log("deleteClick")
        setIncome2((olddata)=>
     olddata.filter((val,ind)=>{ return ind!==key
           
       }))}
        
       //////////////////



       const[outcome,setoutcome]=useState({
        nam:"",
        val:""
    });
    const[outcome2,setoutcome2]=useState([]);
      
      
    let tempo=0;
    const inputNume=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            setError2("");
            setoutcome((pre)=>{
                return {...pre,[name]:value}
                })
    }
      
    const submite=(e)=>{
            e.preventDefault();
            if (!Number(outcome.val)) {
            
              setError2("Your amount must be a number");
             }
             else{
               setError2("");
          setoutcome2((prevalue)=>{
         return  [...prevalue,outcome]});
    }
    setoutcome({val:"" , nam:""});
    
  }
      
  
    const deleteClicke=(key)=>{
        console.log("deleteClick")
        setoutcome2((olddata)=>
     olddata.filter((val,ind)=>{ return ind!==key
           
       }))}
        
       



      
        
    

    return(<>
    <div className="bg-secondary">
   

    <h1 className="text-center bg-primary text-white my-md-3 mx-1">Budget Calculater</h1>
<div className="main my-md-5">
            <div className="centerd mx-sm-5 mx-1"><div className="row">
                
                
                
                
               
            <div className="row">
                 <div className="col-md-4 border-right">

     
     
                 <div>
          <h1 className="my-md-4">Budget App</h1>
  
  
  
  
  

   
          <div className="row my-5">
                   
          <div className="col">
  
  

     
      

       {     
       income2.map((data,index)=>{
       const a=data.val;
       const b=Number(a);
     
        
      let c=b;
        
      let sum=temp+c;
       temp=sum;
       c=0;
       sum=0;
        
     
  
     return(
      <>

        


    
                   {/* {console.log("length of array is : ",income2.length - 1,index)} */}





 
      {income2.length - 1==index ?<div className="col"> <h5>Income</h5>
                       <p>{temp}</p>
                      
      </div> : ""}
               </>  
               )
              })
            }





      </div>


      <div className="col">
     
    
     
      {     
      outcome2.map((data,index)=>{
      const a=data.val;
      const b=Number(a);
     
       
     let c=b;
       
     let sum=tempo+c;
      tempo=sum;
      c=0;
      sum=0;
      
         
    return(
     
     <>
       
       
     {outcome2.length - 1==index ?  <div className="col">
                <h5>Expenses</h5>
               
                     <p> {tempo}</p>
                    
                    </div>
                     : ""}
              </>  
              )
             })
           }
     
 


          </div>

  
          <div className="col-9 order-first w-100">
<h2>Your Balance</h2>
<h4>{`${temp-tempo}`}</h4>
      </div><br/>


  

       </div>
      </div>









                  
                  
    


   
   
   
         </div>


             <div className="col-md-4 border-right">
                 <input placeholder="Add income" className="my-4"
                 name="nam" value={income.nam} onChange={inputNum}/><br />
                 <input placeholder="Enter amount" className="my-4" 
                 name="val" value={income.val} onChange={inputNum}/>
                 <p style={{color:"red"}}>{error}</p>
                 <br/>
                 <Button className="bg-primary" onClick={submit}>submit</Button><br />
                     
                {/* <button className="my-3" onClick={TransHistory1}>Transaction History</button> */}
                <Button className="my-3" onClick={TransHistory1}  variant="contained" size="medium" color={col1} >Transaction History <ArrowDownwardIcon/></Button>
        
               
               
               
               

              
                {state3===true?   
                <div>        
                
  {     
    income2.map((data,index)=>{
    const a=data.val;
    const b=Number(a);

   

   let c=b;
   

   let sum=temp+c;
    temp=sum;
    c=0;
    sum=0;
  
       
    

    return(
     <>
       

      
      
     <TransactionIncome
        deleteitem={deleteClick}
        result={temp}
        key={index}
        id={index}

   
   
   
   
     
       
        nameofel={data.nam} 
        amount={data.val}
            />



             </>                   )
                })
                    }
 
 </div>
    
    :"" }

             </div>

            
            
                        
                    <div className="col-md-4">
    
    <input placeholder="Add expense" className="my-4"
      name="nam" value={outcome.nam} onChange={inputNume}/><br />
      <input placeholder="Enter amount" className="my-4" 
      name="val" value={outcome.val} onChange={inputNume}/>
       <p style={{color:"red"}}>{error2}</p><br/>
      <Button className="bg-primary" onClick={submite}>submit</Button><br />
            <br />
            <Button className="" onClick={TransHistory2}  variant="contained" size="medium" color={col} >Transaction History <ArrowDownwardIcon/></Button>
        
    
    {state2===true?
        <div>       
         {     
      outcome2.map((data,index)=>{
      
      const a=data.val;
      const b=Number(a);
   
     
     let c=b;
     
     let sum=temp+c;
      temp=sum;
      let temp2=temp;
      c=0;
      sum=0;
      
         
      
      return(
       <>
         
  
  
        
       <TransactionExpense
          deleteitem={deleteClicke}
          result={temp}
          key={index}
          id={index}
     
     
     
     
       
         
          nameofel={data.nam} 
          amount={data.val}
              />
               </>                 
                 )
                  })
                      }
                      </div>
    
                   :"" }
            
      </div>
    
              
                     </div>
                
                
            
                
                
                
             
                </div>
                



</div>

</div>
</div>




 <p>{temp}</p>
 
 <p>{tempo}</p>
 
 <GooglePie income={temp} expense={tempo} totalamount={temp+tempo} />
    





    </>)
}
export default Income_calculater;