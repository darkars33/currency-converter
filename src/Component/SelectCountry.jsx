import React from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';

function SelectCountry() {
  return (

      <Grid item xs={12} md={3}>
          <Autocomplete
                    value="option1" 
                    options={["option1", "option2"]}
                    renderInput={(params) => <TextField {...params} label="form"/>}
          />
      </Grid>
    
  )
}
export default SelectCountry;