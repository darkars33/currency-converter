import { Grid, TextField } from '@mui/material';
import React, {useContext} from 'react';
import { CurrencyContext } from '../context/CurrencyContext'


function InputAmount() {
  const {firstCurrency, setFirstCurrency}= useContext(CurrencyContext);
  return (
      <Grid item xs={12} md>
          <TextField 
          label="Amount"
          onChange={(e) => setFirstCurrency(e.target.value)}
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