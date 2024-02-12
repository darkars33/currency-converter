import React from 'react';
import { Button, Grid } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function SwitchCurrency() {
  return (

      <Grid item md="auto"><Button xs={
          {
                    borderRadius:1,
                    height: "100%"
          }
      }>
          <CompareArrowsIcon sx={{fontSize:30}}/>
      </Button></Grid>
    
  )
}
export default SwitchCurrency;