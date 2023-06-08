import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './main.css';
import Graph from '../Images/Graph.png'
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import { shadows } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Cards = () => {
  return (
    <>
       <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}   >
          <Item className='card-one' style={{ borderRadius: '32px', height:'190px' }}  sx={{
    boxShadow: '0px 4px 2px 0px #E17CFD, 0px 8px 10px 0px #E17CFD, 0px 0px 0px 0px #E17CFD',
    '&:hover': {
      boxShadow: '0px 4px 20px 0px #E17CFD, 0px 8px 10px 0px #E17CFD', // Adjust this value as needed
    },
  }}>
          <div className='d-flex justify-content-between p-3'>
            <span className='ms-4'><img src={Graph}  /></span>
            <span className='bi bi-caret-up-fill me-4'><span style={{color:'white'}}>12%</span></span>
          </div>
          <div className='d-flex justify-content-between p-3 mt-2'>
            <div className='cardone-digit'>
                <span >42.34%</span>
                <p>Bounce Rate</p>
            </div>
            <span className='bi bi-question-circle-fill me-5 mt-3'></span>
          </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} >
        <Item  style={{ borderRadius: '32px', height:'190px',  }}>
          <div className='d-flex justify-content-between p-3'>
            <div className="bi bi-calendar4-week ms-4"></div>
          </div>
          <div className='d-flex justify-content-between p-3'>
            <div className='cardtwo-digit'>
                <span className='me-3'>42.34%</span>
                <p className="fw-bold">Pages per visit</p>
            </div>
            <span className='bi bi-question-circle-fill mt-3' style={{color:'#7166F9'}}></span>
          </div>
          </Item>
        </Grid>


        <Grid item xs={12} sm={6} >
        <Item  style={{ borderRadius: '32px', height:'190px', backgroundColor:'#F6F6FB' }}>
          <div className='d-flex justify-content-between p-3'>
            <span className='ms-4 bi bi-person-fill'></span>
            <span className='bi bi-caret-down-fill me-4 mt-4' style={{color:'red'}}><span style={{color:'black'}}> 2.1%</span></span>
          </div>
          <div className='d-flex justify-content-between p-3'>
            <div className='cardtwo-digit'>
                <span className='me-4'>326.60k</span>
                <p className="fw-bold">Total Monthly Visit</p>
            </div>
          </div>
          </Item>
        </Grid>


        <Grid item xs={12} sm={6} >
        <Item  style={{ borderRadius: '32px', height:'190px', backgroundColor:'#F6F6FB' }}>
          <div className='d-flex justify-content-between p-3'>
            <span className='ms-4' style={{fontSize:'35px'}}><HourglassFullIcon className='hours'/></span>
            <span className='bi bi-caret-down-fill me-4 mt-4' style={{color:'red'}}><span style={{color:'black'}}> 2.4%</span></span>
          </div>
          <div className='d-flex justify-content-between p-3'>
            <div className='cardtwo-digit'>
                <span className='me-3'>00:03:27</span>
                <p className="fw-bold">Avg. Visit Duration</p>
            </div>
          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Cards
