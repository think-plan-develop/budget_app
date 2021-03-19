
import React from 'react';
import Chart from "react-google-charts";





import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';









const GooglePie=(props)=>{

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };





    

const incomes=props.income;
const expenses=props.expense;


    return(<>
    
    <h1>This is google pie chart</h1>
    <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>

    <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart...</div>}
  data={[
    ['Transaction_Name', 'Amount'],
    ['Income', incomes],
    ['Expense', expenses],
   
  ]}
  options={{
    title: 'My Income Calculater',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>




<div>
<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div >
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
      </div>

    
    </>)
}

export default GooglePie;
