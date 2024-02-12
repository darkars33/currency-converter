import { Grid, TextField } from '@mui/material';
import React from 'react';


function InputAmount() {
  return (
      <Grid item xs={12} md>
          <TextField 
          label="Amount"
          fullWidth
          inputProps={{
                    type:'number',
                    startAdornment:<InputAmount position='start'>$</InputAmount>
          }}
      />
      </Grid>
  )
}
export default InputAmount;